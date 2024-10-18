import { IBranches } from "./IBranches";

export interface ICompany {
  name: string,
  companyName: string,
  cuit: number,
  img: string,
  listBranches: IBranches[]
}