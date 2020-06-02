import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Grid from '@material-ui/core/Grid';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';

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
} from './style';

function transparentize(color, opacity?: number) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return Chart.helpers.color(color).alpha(alpha).rgbString();
}

const data = {
    labels: ['12:12', '12:13', '12:14', '12:15', '12:16'],
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
            data: [0, 0, 0, 0, 0],
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
            data: [530, 500, 510, 505, 500],
        },
        {
            label: '',
            fill: true,
            lineTension: 0.1,
            backgroundColor: transparentize('#ffa300', 0.9),
            borderColor: '#ffa300',
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
            data: [1000, 1001, 1000, 1010, 1000],
        },
    ],
};

const tableBody1 = [
    { first: '2020-03-17', second: '89.86 K', third: '127.21.01' },
    { first: '2020-03-17', second: '89.86 K', third: '127.21.01' },
    { first: '2020-03-17', second: '89.86 K', third: '127.21.01' },
    { first: '2020-03-17', second: '89.86 K', third: '127.21.01' },
    { first: '2020-03-17', second: '89.86 K', third: '127.21.01' },
    { first: '2020-03-17', second: '89.86 K', third: '127.21.01' },
];

const tableBody2 = [
    { first: '12:10:17', second: '89.86 K', third: '/nginx_status/tail' },
    { first: '12:10:17', second: '89.86 K', third: '/nginx_status/tail' },
    { first: '12:10:17', second: '89.86 K', third: '/nginx_status' },
    { first: '12:10:17', second: '89.86 K', third: '/nginx_status/tail' },
    { first: '12:10:17', second: '89.86 K', third: '/nginx_status' },
    { first: '12:10:17', second: '89.86 K', third: '/nginx_status/tail' },
];

const tableBody3 = [
    { first: '12:10:17', second: '89.86 K', third: 'API Header Key Missing' },
    { first: '12:10:17', second: '89.86 K', third: 'ApiKey Header Missing' },
    { first: '12:10:17', second: '89.86 K', third: 'ApiKey Header Missing' },
    { first: '12:10:17', second: '89.86 K', third: 'ApiKey Header Missing' },
    { first: '12:10:17', second: '89.86 K', third: 'Upstream stage is closed' },
    { first: '12:10:17', second: '89.86 K', third: 'Upstream stage is closed' },
];

const tableBody4 = [
    { first: '12:10:17', second: 'Yes', third: '44.86 K' },
    { first: '12:10:17', second: 'No', third: '44.86 K' },
    { first: '12:10:17', second: 'No', third: '44.86 K' },
    { first: '12:10:17', second: 'No', third: '44.86 K' },
    { first: '12:10:17', second: '0.00', third: '44.86 K' },
    { first: '12:10:17', second: '0.00', third: '44.86 K' },
];

const times = ['Last 24 hours', 'Last 7 Days', 'Last 30 Days'];

const Stats = () => {
    const [tab, setTab] = useState(0);
    const [time, setTime] = useState(0);
    const changeTab = (e, newValue) => setTab(newValue);
    const changeTime = (e) => setTime(e.target.value);

    return (
        <Main container justify="center" direction="column">
            <StatsTabs value={tab} onChange={changeTab} aria-label="tabs">
                <StatsTab label="Mainnet" />
                <StatsTab label="Tesnet" />
            </StatsTabs>
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
                        >
                            {times.map((name, index) => (
                                <option value={index} key={name}>
                                    {name}
                                </option>
                            ))}
                        </CustomSelect>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justify="flex-end">
                            <RefreshButton
                                showLabel
                                label="Refresh"
                                icon={<RefreshIcon color="primary" />}
                            />
                        </Grid>
                    </Grid>
                    <TimeTextWrapper item xs={12}>
                        <Grid container alignItems="center">
                            <InfoOutlinedIcon color="primary" />
                            <TimeText>Stats are collected every 5 seconds.</TimeText>
                        </Grid>
                    </TimeTextWrapper>
                </Grid>
            </TimeContainer>
            <ChartContainer>
                <ChartBg>
                    <Grid container alignItems="center" wrap="nowrap">
                        <ChartTitleContainer item xs={9}>
                            <ChartTitle variant="subtitle1">Query Rate</ChartTitle>
                            <ChartSubtitle variant="subtitle1">10 Second Bucket </ChartSubtitle>
                        </ChartTitleContainer>
                        <Grid item xs={3}>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <ChartLegendIcon color="#90bcd0" />
                                    <ChartLegendText variant="subtitle2">Permitted</ChartLegendText>
                                </Grid>
                                <Grid item>
                                    <ChartLegendIcon color="#ffa300" />
                                    <ChartLegendText variant="subtitle2">Denied</ChartLegendText>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <ChartLineWrapper>
                        <Line data={data} legend={{ display: false }} />
                    </ChartLineWrapper>
                </ChartBg>
            </ChartContainer>
            <BoxesContainer>
                <Grid container spacing={6} justify="space-between">
                    <Grid item xs={6}>
                        <BoxTable
                            title="Top 10 IP Hits"
                            head={['Timestamp', 'Hits', 'IP']}
                            body={tableBody1}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <BoxTable
                            title="Top 10 Routes"
                            head={['Timestamp', 'Hits', 'URI']}
                            body={tableBody2}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <BoxTable
                            title="Top 10 Access Outcomes"
                            head={['Timestamp', 'Hits', 'Exception']}
                            body={tableBody3}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <BoxTable
                            title="PDP Count"
                            head={['Timestamp', 'Decision', 'Sum']}
                            body={tableBody4}
                        />
                    </Grid>
                </Grid>
            </BoxesContainer>
        </Main>
    );
};

export default Stats;
