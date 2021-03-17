export enum ActionTypeStates {
  INPROGRESS = "INPROGRESS",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export interface IToken {
  accessToken: string | null | undefined;
}
export interface IUserInfo {
  email: string | null,
  exp: Date | null
  iat: Date | null
  provider: string | null
  role: string | null
  tosAccepted: boolean | null
  userId: number | null
}

export interface IAppState {
  token: IToken;
  user: IUserState;
}

export interface IBaseState {
  status?: ActionTypeStates
	redirectTo?: string | null
	error?: any | null
}

export interface IUserState extends IBaseState{
  userInfo: IUserInfo | null
}

export interface IFAQItem{
  title: string,
  description: string
}

export interface IInvoiceTableItem{
  date: string,
  description: string,
  period: string,
  amount: string,
  status: string
}