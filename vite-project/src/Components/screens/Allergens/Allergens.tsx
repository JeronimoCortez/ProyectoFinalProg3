import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import { InfoButton } from "../../ui/InfoButton/InfoButton";
import { EditButton } from "../../ui/EditButton/EditButton";
import { DeleteButton } from "../../ui/DeleteButton/DeleteButton";
import { AddButton } from "../../ui/AddButton/AddButton";

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
      {/* HEADER */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#8DA9C4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color="#000"
            variant="h6"
            fontWeight={"bold"}
            fontSize="1.5rem"
          >
            NOMBRE DE LA EMPRESA - SUCURSAL
          </Typography>
        </Toolbar>
      </AppBar>

      {/* MENÚ BOX */}
      <Box></Box>

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
          <Paper
            key={item}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              marginBottom: 2,
              width: "80vw",
              height: "65px",
              border: "1px solid black",
              borderRadius: "3rem",
              backgroundColor: "rgba(217, 217, 217, 0.2)",
              color: "#fff", // Color del texto en blanco
            }}
          >
            <Typography sx={{ marginLeft: "20vh" }} variant="body1">
              Nombre alérgeno
            </Typography>
            <Box>
              <IconButton color="inherit" sx={{ marginRight: 1 }}>
                <InfoButton
                  typeEdit="allergenInfo"
                  isCompany={false}
                  onInfoClick={() => {}}
                />
              </IconButton>
              <IconButton color="inherit">
                {<EditButton typeEdit="allergenEdit" isCompany={false} />}
              </IconButton>
              <IconButton sx={{ paddingLeft: "1rem" }}>
                <DeleteButton
                  typeDelete="deleteAllergen"
                  isCompany={false}
                  onDeleteClick={() => {}}
                />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
