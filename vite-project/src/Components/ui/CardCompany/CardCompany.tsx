import { Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import { InfoButton } from "../InfoButton/InfoButton";
import { FC } from "react";
import { CardInfoModel } from "../CardInfoModel/CardInfoModel";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import useModal from "../../../hooks/useModal";
import { CardCreateCompany } from "../CardCreateCompany/CardCreateCompany";

interface IPropsCardCompany {
  company: IEmpresa;
  onOpen: (company: IEmpresa) => void;
}

export const CardCompany: FC<IPropsCardCompany> = ({ company, onOpen }) => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();

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
            <EditButton
              isCompany={true}
              onEditClick={() => openModal("edit")}
            />
            <InfoButton
              typeEdit="Company"
              isCompany={true}
              onInfoClick={() => openModal("info")}
            />
          </div>
        </CardContent>
      </Card>

      {isModalOpen && activeModal === "info" && (
        <CardInfoModel type={company} onClose={closeModal} />
      )}

      {isModalOpen && activeModal === "edit" && (
        <CardCreateCompany onClose={closeModal} />
      )}
    </>
  );
};
