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
import useModal from "../../../hooks/useModal";
import { CreateCategory } from "../../ui/CreateCategory/CreateCategory";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export const Categories = () => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();
  return (
    <Box sx={{ backgroundColor: "#0B2545", minHeight: "100vh" }}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
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
            <AddButton
              onAddClick={() => openModal("addCategory")}
              isCompany={false}
            />
          </Box>

          {/* SERVICIO AL CLIENTE */}

          <CategoryLabel />

          {/* VENTAS Y MARKETING */}

          <CategoryLabel />

          {/* ADMINISTRACIÓN Y FINANZAS */}

          <CategoryLabel />
        </Box>
      </Box>
      {isModalOpen && activeModal === "addCategory" && (
        <CreateCategory onClose={closeModal} />
      )}
    </Box>
  );
};
