import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { InvoiceTableItem } from "../../types";
import { ReactComponent as PlusIcon } from "../../assets/img/accordion-plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/img/accordion-minus.svg";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export interface InvoiceTableProps {
  items: InvoiceTableItem[];
  style?: React.CSSProperties;
}

import {
  Wrapper,
  Title,
  TableCellWrapper as TableCell,
  TableContainerWrapper as TableContainer,
} from "./style";

const InvoiceTable: React.FC<InvoiceTableProps> = ({ style, items = [] }) => {
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
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell> {item.date}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.period}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="action">View Invoice</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default InvoiceTable;
