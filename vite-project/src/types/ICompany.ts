import  IBranches  from "./IBranches";

export default interface ICompany {
  id: string;
  name: string;
  companyName: string;
  cuit: number;
  img: string;
  listBranches?: IBranches[];
}
