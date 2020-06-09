import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { BoxBg, Title, TableHeadCell, TableBodyCell } from './style';

const BoxTable = ({ title, head, body }) => {
    return (
        <BoxBg>
            <Title variant="subtitle1">{title}</Title>
            <Table aria-label="data-table">
                <TableHead>
                    <TableRow>
                        {head.map((row, index) => (
                            <TableHeadCell key={row} align={index > 0 ? 'right' : 'left'}>
                                {row}
                            </TableHeadCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {body.map((row, index) => (
                        <TableRow key={index}>
                            <TableBodyCell component="th" scope="row">
                                {row.first}
                            </TableBodyCell>
                            <TableBodyCell align="right">{row.second}</TableBodyCell>
                            <TableBodyCell align="right">{row.third}</TableBodyCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </BoxBg>
    );
};

export default BoxTable;
