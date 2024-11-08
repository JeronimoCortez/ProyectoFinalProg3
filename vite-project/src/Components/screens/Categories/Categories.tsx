import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CustomHeaderWithDrawer from "../../ui/Drawer/Drawer";
import { AddButton } from "../../ui/AddButton/AddButton";
import { CategoryLabel } from "../../ui/CategoryLabel/CategoryLabel";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export const Categories = () => {
  return (
    <Box sx={{ backgroundColor: "#0B2545", minHeight: "100vh" }}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <CssBaseline />
      <CustomHeaderWithDrawer />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "80vw",
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
            CATEGORÍAS
          </Typography>

          {/* AGREGAR CATEGORÍA */}
          <Box
            className="addButton"
            sx={{ position: "absolute", top: 34, right: -24 }}
          >
            <AddButton onAddClick={() => {}} isCompany={false} />
          </Box>

          {/* SERVICIO AL CLIENTE */}

          <CategoryLabel />

          {/* VENTAS Y MARKETING */}

          <CategoryLabel />

          {/* ADMINISTRACIÓN Y FINANZAS */}

          <CategoryLabel />
        </Box>
      </Box>
    </Box>
  );
};
