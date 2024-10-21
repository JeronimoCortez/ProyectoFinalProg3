import { Box } from "@mui/material";
import { CardCompany } from "../../ui/CardCompany/CardCompany";
import styles from "./Home.module.css";
import { AddButton } from "../../ui/AddButton/AddButton";

export const Home = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundColor: "#8DA9C4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className={styles.containerCardCompany}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            maxWidth: "1100px",
            margin: "5px auto",
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
        >
          <CardCompany />
          <CardCompany />
          <CardCompany />
          <CardCompany />
          <CardCompany />
        </Box>
        <AddButton typeAdd="Company" isCompany={true} />
      </Box>
    </>
  );
};
