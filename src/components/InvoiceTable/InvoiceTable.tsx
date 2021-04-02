import * as React from 'react';
import { PaymentInvoice, PaymentSubscription } from '../../reducers/app/types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
export interface InvoiceTableProps {
    invoices: PaymentInvoice[];
    style?: React.CSSProperties;
}

import {
    Wrapper,
    Title,
    TableCellWrapper as TableCell,
    TableContainerWrapper as TableContainer,
} from './style';

import { displayTimestamp, displayAmount } from '../../utils/renders';

enum PaymentStatus {
    paid = 'Paid',
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({
    style,
    invoices = [],
}) => {
    return (
        <Wrapper container>
            <Title>Invoices</Title>
            <TableContainer>
                <Table aria-label="invoce table">
                    <TableHead>
                        <TableRow>
                            <TableCell header>Date</TableCell>
                            <TableCell header>Description</TableCell>
                            <TableCell header>Subscription period</TableCell>
                            <TableCell header>Amount</TableCell>
                            <TableCell header>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell> {displayTimestamp(item.timestamp)}</TableCell>
                                <TableCell>Pro Monthly Plan</TableCell>
                                <TableCell>{`${displayTimestamp(item.startDate)} - ${displayTimestamp(item.endDate)}`}</TableCell>
                                <TableCell>{`$${displayAmount(item.amount)}`}</TableCell>
                                <TableCell>{PaymentStatus[item.status]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper>
    );
};

export default InvoiceTable;
