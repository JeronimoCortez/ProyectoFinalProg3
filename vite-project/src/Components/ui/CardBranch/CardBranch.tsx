import { Box, Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import { BranchDataButton } from "../BranchDataButton/BranchDataButton";
import WatchIcon from "@mui/icons-material/WatchLaterRounded";
import { InfoButton } from "../InfoButton/InfoButton";
import styles from "./CardBranch.module.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const CardBranch = () => {
  return (
    <>
      <Card
        sx={{
          width: 250,
          height: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#134074",
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
            Nombre de la Sucursal
          </Typography>
          <img src="../../public/assets/BranchImg.png" alt="" />
          <div className={styles.containerTime}>
            <WatchIcon style={{ color: "#d9d9d9" }} />
            <p className={styles.time}>20:00hs - 00:00hs</p>
          </div>
          <div className={styles.containerIcons}>
            <BranchDataButton typeEdit="Companies" />
            <EditButton typeEdit="Company" />
            <InfoButton typeEdit="Companies" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
