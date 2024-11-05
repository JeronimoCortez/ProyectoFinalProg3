import {
  Box,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { AddButton } from "../ui/AddButton/AddButton";
import Allergen from "../ui/Allergen/Allergen";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export const Allergens = () => {
  return (
    <Box sx={{ backgroundColor: "#0B2545", minHeight: "100vh" }}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <CssBaseline />

      {/* LISTA DE ALÉRGENOS */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              color: "#fff",
              fontWeight: "bold",
              marginTop: 4,
              marginBottom: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ALÉRGENOS
          </Typography>
          <Box
            className="addButton"
            sx={{ position: "absolute", top: 30, right: -500 }}
          >
            <AddButton typeAdd={"addAllergen"} isCompany={false} />
          </Box>
        </Box>

        <Grid container sx={{ color: "#fff", marginBottom: 2 }} spacing={2}>
          <Grid item xs={5}>
            <Typography
              align="center"
              variant="body1"
              sx={{ fontWeight: "bold", marginRight: "-7rem" }}
            >
              NOMBRE
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              align="center"
              variant="body1"
              sx={{ fontWeight: "bold", marginLeft: "18rem" }}
            >
              ACCIONES
            </Typography>
          </Grid>
        </Grid>
        {[1, 2, 3].map((item) => (
          <Allergen allergen={{ id: 0, denominacion: "Nombre" }} key={item} />
        ))}
      </Box>
    </Box>
  );
};
