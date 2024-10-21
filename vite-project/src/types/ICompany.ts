import { IBranches } from "./IBranches";

export default interface ICompany {
  name: string;
  companyName: string;
  cuit: number;
  img: string;
  listBranches: IBranches[];
}
