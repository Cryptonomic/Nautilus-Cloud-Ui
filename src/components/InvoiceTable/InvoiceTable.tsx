import * as React from 'react';
import { PaymentInvoice, PaymentSubscription } from '../../reducers/app/types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
export interface InvoiceTableProps {
    invoices: PaymentInvoice[];
    subscriptions: any;
    style?: React.CSSProperties;
}

import {
    Wrapper,
    Title,
    TableCellWrapper as TableCell,
    TableContainerWrapper as TableContainer,
} from './style';

import { displayTimestamp } from '../../utils/renders';

enum PaymentStatus {
    paid = 'Paid',
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({
    style,
    invoices = [],
    subscriptions = {},
}) => {
    const onClick = (url: string) => window.open(url, '_blank');

    return (
        <Wrapper container>
            <Title>Invoices</Title>
            <TableContainer>
                <Table aria-label="invoce table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Subscription period</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell> {displayTimestamp(item.timestamp)}</TableCell>
                                <TableCell>Pro Monthly Plan</TableCell>
                                <TableCell>{`${displayTimestamp(
                                    subscriptions[item.subscriptionId].startDate
                                )} - ${displayTimestamp(
                                    subscriptions[item.subscriptionId].endDate
                                )}`}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>{PaymentStatus[item.status]}</TableCell>
                                <TableCell className="action" onClick={() => onClick(item.url)}>
                                    View Invoice
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper>
    );
};

export default InvoiceTable;
