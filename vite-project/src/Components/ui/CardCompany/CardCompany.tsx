import { Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import { InfoButton } from "../InfoButton/InfoButton";
import { FC } from "react";
import { CardInfoModel } from "../CardInfoModel/CardInfoModel";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import useModal from "../../../hooks/openModal";

interface IPropsCardCompany {
  company: IEmpresa;
  onOpen: (company: IEmpresa) => void;
}

export const CardCompany: FC<IPropsCardCompany> = ({ company, onOpen }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

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
              onInfoClick={openModal}
            />
          </div>
        </CardContent>
      </Card>

      {isModalOpen && <CardInfoModel type={company} onClose={closeModal} />}
    </>
  );
};
