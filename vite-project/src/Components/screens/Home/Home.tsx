import { Box, Button } from "@mui/material";
import { CardBranch } from "../../ui/CardBranch/CardBranch";

export const Home = () => {
  return (
    <>
      <Box className="branchInfoContainer" sx={{ backgroundColor: "#0B2545" }}>
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
