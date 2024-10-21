import  ICompany  from "./ICompany";

export default interface IBranches {
  id: string;
  name: string;
  company: ICompany;
  residence: string;
  mainResidence: boolean;
  open: Date;
  close: Date;
  logo: string;
}
