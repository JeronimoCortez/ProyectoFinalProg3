import { Box, Button } from "@mui/material";
import { CardBranch } from "../../ui/CardBranch/CardBranch";
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
          minHeight: "20vh",
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
      <Box
        className="branchInfoContainer"
        sx={{ backgroundColor: "#0B2545", minHeight: "80vh" }}
      >
        <Box
          sx={{
            color: "#FFFDFD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "Prompt, sans-serif",
          }}
        >
          <h1>SUCURSALES: NOMBRE DE EMPRESA</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#EE964B",
              color: "black",
              width: "120px",
              height: "55px",
              margin: "1rem",
              fontSize: "1.2rem",
              fontFamily: "Prompt, sans-serif",
            }}
          >
            Agregar
          </Button>
        </Box>
        <Box
          className="cardBranchesContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardBranch />
          <CardBranch />
          <CardBranch />
          <CardBranch />
        </Box>
      </Box>
    </>
  );
};
