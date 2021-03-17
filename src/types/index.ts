import {
  IAppState,
  IToken,
  IUserInfo,
  IUserState,
  IFAQItem,
  IInvoiceTableItem,
} from "../models";

export type AppState = IAppState | null;
export type Token = IToken | null;
export type UserInfo = IUserInfo | null;
export type UserState = IUserState | null;
export type FAQItem = IFAQItem;
export type InvoiceTableItem = IInvoiceTableItem;

export enum Plan {
  Basic = "Basic",
  Pro = "Pro",
}

export enum Direction {
  Row = "row",
  Column = "column",
}
