import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Grid from '@material-ui/core/Grid';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';
import { format } from 'date-fns'

import BoxTable from '../../components/BoxTable';

import {
    Main,
    StatsTabs,
    StatsTab,
    CustomSelect,
    CustomInput,
    TimeContainer,
    RefreshButton,
    TimeTextWrapper,
    TimeText,
    ChartContainer,
    ChartBg,
    ChartTitleContainer,
    ChartTitle,
    ChartSubtitle,
    ChartLegendIcon,
    ChartLegendText,
    ChartLineWrapper,
    BoxesContainer,
    NoDataWrapper,
    NoData,
} from './style';

import { getQueryRate } from '../../reducers/app/thunks';

import { displayQueryRateTime } from '../../utils/renders';

import { AppState } from '../../types';

import { BucketFramesName } from '../../reducers/app/types';

function transparentize(color, opacity?: number) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return Chart.helpers.color(color).alpha(alpha).rgbString();
}

const data: any = {
    labels: [],
    datasets: [
        {
            label: '',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'tranparent',
            borderColor: 'transparent',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'transparent',
            pointHoverBorderColor: 'transparent',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
        },
        {
            label: '',
            fill: true,
            lineTension: 0.1,
            backgroundColor: transparentize('#90bcd0', 0.9),
            borderColor: '#90bcd0',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
        },
    ],
};

const times = ['Last 24 hours', 'Last 7 Days', 'Last 30 Days'];

const Stats = () => {
    const chartRef = useRef(null);
    const accessToken = useSelector((state: AppState) => state.token.accessToken);
    const [time, setTime] = useState(0);
    const [queryData, setQueryData] = useState(null);

    const getQueryData = async (time?: string) => {
        try {
            if (!accessToken) {
                return;
            }

            const [queryRate, timeFrame] = await getQueryRate(time);

            if (!queryRate) {
                setQueryData(null);
                return;
            }

            const queries: any = {};

            for (let q of queryRate) {
                const queryTime = new Date(q.periodEnd).getTime();
                if (queries[queryTime]) {
                    queries[queryTime].hits += q.hits;
                    continue;
                }
                queries[queryTime] = { ...q, timestamp: queryTime };
            }

            const queriesInTime = timeFrame.map((t: any) => {
                const queriesInBucket = [];
                for (let i of Object.values(queries) as any) {
                    if (i.timestamp >= t.start.getTime() && i.timestamp <= t.end.getTime()) {
                        queriesInBucket.push(i);
                    }
                }

                if (queriesInBucket.length) {
                    return queriesInBucket.reduce((prev, next) => (prev += next.hits), 0);
                }
                return 0;
            });

            const formatLabel = (BucketFramesName.LAST30DAYS === time || BucketFramesName.LAST7DAYS === time) ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm:ss";
            const queryLabels = timeFrame.map((t) => format(new Date(t.start.getTime()), formatLabel));
            const queryValues = queriesInTime;

            const newData = {
                labels: queryLabels,
                datasets: [
                    {
                        label: '',
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: transparentize('#90bcd0', 0.9),
                        borderColor: '#90bcd0',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: queryValues,
                    },
                ],
            };
            setQueryData(newData);
        } catch (e) {}
    };

    const changeTime = async (e) => {
        await getQueryData(times[e.target.value]);
        setTime(e.target.value);
    };

    const getChartOptions = () => {
        return {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            callback: function (value) {
                                return queryData && Number.isInteger(value) ? value : '';
                            },
                            fontColor: "rgba(255, 255, 255, 0.8)"
                        },
                    },
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: "rgba(255, 255, 255, 0.8)"
                        }
                    }
                ]
            },
            animation: {
                onComplete: function () {
                    if (!queryData) {
                        chartRef.current.chartInstance.clear();
                    }
                },
            },
        };
    };

    useEffect(() => {
        const fetchData = async () => {
            await getQueryData();
        };
        fetchData();
    }, []);

    return (
        <Grid container justify="center" direction="column">
            <TimeContainer>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <CustomSelect
                            value={time}
                            onChange={changeTime}
                            name="endpoints"
                            input={<CustomInput inputProps={{ 'aria-label': 'naked' }} />}
                            inputProps={{ 'aria-label': 'endpoints' }}
                            IconComponent={ExpandMoreIcon}
                            style={{ width: '160px' }}
                        >
                            {times.map((name, index) => (
                                <option
                                    style={{ margin: '15px 10px', cursor: 'pointer' }}
                                    value={index}
                                    key={name}
                                >
                                    {name}
                                </option>
                            ))}
                        </CustomSelect>
                    </Grid>
                </Grid>
            </TimeContainer>
            <ChartContainer>
                <ChartBg>
                    <Grid container alignItems="center" wrap="nowrap">
                        <ChartTitleContainer item xs={9}>
                            <ChartTitle variant="subtitle1">Query Rate</ChartTitle>
                            <ChartSubtitle variant="subtitle1">5 Minute Bucket</ChartSubtitle>
                        </ChartTitleContainer>
                    </Grid>
                    <ChartLineWrapper>
                        {!queryData && (
                            <NoDataWrapper>
                                <NoData>No data</NoData>
                            </NoDataWrapper>
                        )}
                        <Line
                            data={queryData || data}
                            legend={{ display: false }}
                            options={getChartOptions()}
                            ref={chartRef}
                        />
                    </ChartLineWrapper>
                </ChartBg>
            </ChartContainer>
        </Grid>
    );
};

export default Stats;
