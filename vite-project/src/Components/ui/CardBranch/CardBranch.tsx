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
import { CreateBranch } from "../CreateBranch/CreateBranch";
import { useNavigate } from "react-router-dom";

interface ICardBranch {
  branch: ISucursal;
}

export const CardBranch: FC<ICardBranch> = ({ branch }) => {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();

  const handleNavigate = () => {
    navigate(`/branch/${branch.empresa.id}/${branch.id}`);
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
          <img
            src={
              branch.logo
                ? branch.logo
                : "https://i.postimg.cc/FRKsWfmM/Branch-Img.png"
            }
            alt=""
            height={"120px"}
          />
          <div className={styles.containerTime}>
            <WatchIcon style={{ color: "#d9d9d9" }} />
            <p className={styles.time}>
              {branch.horarioApertura} - {branch.horarioCierre}
            </p>
          </div>
          <div className={styles.containerIcons}>
            <BranchDataButton onClick={handleNavigate} />
            <EditButton
              isCompany={false}
              onEditClick={() => openModal("edit")}
            />
            <InfoButton
              isCompany={false}
              onInfoClick={() => openModal("info")}
            />
          </div>
        </CardContent>
      </Card>

      {isModalOpen && activeModal === "info" && (
        <CardInfoModel type={branch} onClose={closeModal} />
      )}

      {isModalOpen && activeModal === "edit" && (
        <CreateBranch
          onClose={closeModal}
          company={branch.empresa}
          branch={branch}
        />
      )}
    </>
  );
};
