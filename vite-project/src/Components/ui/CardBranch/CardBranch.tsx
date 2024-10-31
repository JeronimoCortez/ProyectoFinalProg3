import { Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import { BranchDataButton } from "../BranchDataButton/BranchDataButton";
import WatchIcon from "@mui/icons-material/WatchLaterRounded";
import { InfoButton } from "../InfoButton/InfoButton";
import styles from "./CardBranch.module.css";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import { FC } from "react";
import { CardInfoModel } from "../CardInfoModel/CardInfoModel";
import useModal from "../../../hooks/useModal";

interface ICardBranch {
  branch: ISucursal;
}

export const CardBranch: FC<ICardBranch> = ({ branch }) => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();

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
            <EditButton
              isCompany={false}
              onEditClick={() => openModal("edit")}
            />
            <InfoButton
              typeEdit="Brunch"
              isCompany={false}
              onInfoClick={() => openModal("info")}
            />
          </div>
        </CardContent>
      </Card>

      {isModalOpen && activeModal === "info" && (
        <CardInfoModel type={branch} onClose={closeModal} />
      )}
    </>
  );
};
