import { FC } from "react";
import ICompany from "../../../types/ICompany";
import IBranches from "../../../types/IBranches";

interface IInfoProps {
  type: ICompany | IBranches;
}

const isCompany = (type: ICompany | IBranches): type is ICompany => {
  return (type as ICompany).companyName !== undefined;
};

export const CardInfoModel: FC<IInfoProps> = ({ type }) => {
  return (
    <>
      {isCompany(type) ? (
        <div key={type.id}>
          <p>Nombre: {type.name}</p>
          <p>Razon Social: {type.companyName}</p>
          <p>CUIT: {type.cuit}</p>
          <div>
            <p>Logo: </p>
            <img src={type.img} alt="" />
          </div>
        </div>
      ) : (
        <div key={type.id}>
          <p>Nombre: {type.name}</p>
          <p>Empresa: {type.company.companyName}</p>
          <p>Domicilio: {type.residence}</p>
          <p>Casa matriz: {type.mainResidence}</p>
          <p>Horario de apertura: {type.open.getTime()}</p>
          <p>Horario de cierre: {type.close.getTime()}</p>
          <div>
            <p>Logo: </p>
            <img src={type.logo} alt="" />
          </div>
        </div>
      )}
    </>
  );
};
