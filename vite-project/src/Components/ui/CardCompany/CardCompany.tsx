import { Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import { InfoButton } from "../InfoButton/InfoButton";
import { FC, useState } from "react";
import { CardInfoModel } from "../CardInfoModel/CardInfoModel";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";

interface IPropsCardCompany {
  company: IEmpresa;
  onOpen: (company: IEmpresa) => void;
}

export const CardCompany: FC<IPropsCardCompany> = ({ company, onOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        onClick={() => onOpen(company)}
        sx={{
          minWidth: 250,
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EE964B",
          margin: "1rem",
          cursor: "pointer",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              color: "#FFFFFF",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            {company.nombre}
          </Typography>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1.4rem" }}
          >
            <EditButton typeEdit="Company" isCompany={true} />
            <InfoButton
              typeEdit="Company"
              isCompany={true}
              onInfoClick={handleInfoClick}
            />
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <CardInfoModel
          type={{
            id: 12,
            nombre: "Nombre empresa",
            razonSocial: "Razón Social de la Empresa", // Asegúrate de proporcionar un valor
            cuit: 2222222,
            logo: "url_de_la_imagen.jpg",
            pais: { nombre: "Argentina", id: 12 },
            sucursales: [],
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
