import { Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import { BranchDataButton } from "../BranchDataButton/BranchDataButton";
import WatchIcon from "@mui/icons-material/WatchLaterRounded";
import { InfoButton } from "../InfoButton/InfoButton";
import styles from "./CardBranch.module.css";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import { FC, useState } from "react";
import { CardInfoModel } from "../CardInfoModel/CardInfoModel";

interface ICardBranch {
  branch: ISucursal;
}

export const CardBranch: FC<ICardBranch> = ({ branch }) => {
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
        sx={{
          minWidth: 250,
          height: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#134074",
          margin: "1rem",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            gutterBottom
            sx={{ color: "#FFFFFF", fontSize: 24, textAlign: "center" }}
          >
            {branch.nombre}
          </Typography>
          <img src="../../public/assets/BranchImg.png" alt="" />
          <div className={styles.containerTime}>
            <WatchIcon style={{ color: "#d9d9d9" }} />
            <p className={styles.time}>
              {branch.horarioApertura} - {branch.horarioCierre}
            </p>
          </div>
          <div className={styles.containerIcons}>
            <BranchDataButton typeEdit="Companies" />
            <EditButton typeEdit="Company" isCompany={false} />
            <InfoButton
              typeEdit="Brunch"
              isCompany={false}
              onInfoClick={handleInfoClick}
            />
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <CardInfoModel
          type={{
            id: 1,
            nombre: "sucursal",
            empresa: {
              id: 12,
              nombre: "Nombre empresa",
              razonSocial: "Razón Social de la Empresa", // Asegúrate de proporcionar un valor
              cuit: 2222222,
              logo: "../public/assets/BranchImg.png",
              pais: { nombre: "Argentina", id: 12 },
              sucursales: [],
            },
            domicilio: {
              id: 12,
              calle: "calle",
              numero: 123,
              cp: 5500,
              piso: 12,
              nroDpto: 12,
              localidad: {
                id: 12,
                nombre: "mendoza",
                provincia: {
                  nombre: "Mendoza",
                  pais: {
                    nombre: "Argentina",
                    id: 12,
                  },
                  id: 12,
                },
              },
            },
            calle: "Calle",
            latitud: 123,
            longitud: 123,
            categorias: [],
            esCasaMatriz: true,
            horarioApertura: "1212",
            eliminado: false,
            horarioCierre: "123",
            logo: "../public/assets/BranchImg.png",
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
