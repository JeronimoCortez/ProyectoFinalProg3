import { FC } from "react";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";

interface IInfoProps {
  type: IEmpresa | ISucursal;
}

const isCompany = (type: IEmpresa | ISucursal): type is IEmpresa => {
  return (type as IEmpresa).razonSocial !== undefined;
};

export const CardInfoModel: FC<IInfoProps> = ({ type }) => {
  return (
    /* MODIFICAR ESTILOS Y ETIQUETAS CON MATERIAL UI */
    <>
      {isCompany(type) ? (
        <div key={type.id}>
          <p>Nombre: {type.nombre}</p>
          <p>Razon Social: {type.razonSocial}</p>
          <p>CUIT: {type.cuit}</p>
          <div>
            <p>Logo: </p>
            <img src={`type.logo`} alt="" />
          </div>
           {/* AGREGAR CAMPO PARA PAIS */}
        </div>
      ) : (
        {/* MODIFICAR NOMBRES ATRIBUTOS */}
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
