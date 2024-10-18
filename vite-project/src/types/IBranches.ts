import { ICompany } from "./ICompnay";

export interface IBranches {
  name: string;
  company: ICompany;
  residence: string;
  mainResidence: boolean;
  open: Date;
  close: Date;
  logo: string;
}