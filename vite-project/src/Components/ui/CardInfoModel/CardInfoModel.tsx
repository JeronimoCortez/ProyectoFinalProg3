import { FC } from "react";
import ICompany from "../../../types/ICompany";
export const CardInfoModel: FC<T> = (type: T) => {
  const isCompany = (type as ICompany).companyName !== undefined;
  return (
    <>
      {isCompany &&
        type.map((e) => (
          <div key={e.id}>
            <p>Nombre: {e.name}</p>
            <p>Razon Social: {e.companyName}</p>
            <p>CUIT: {e.cuit}</p>
            <div>
              <p>Logo: {e.logo}</p>
              <img src="" alt="" />
            </div>
          </div>
        ))}
    </>
  );
};
