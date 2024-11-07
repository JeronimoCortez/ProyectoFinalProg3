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
import { AlergenoService } from "../../services/AlergenoService";
import { useEffect } from "react";
import { IAlergenos } from "../../types/dtos/alergenos/IAlergenos";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setAllergens } from "../../redux/slices/allergenSlice";
import { RootState } from "../../redux/store/store";
import CustomHeaderWithDrawer from "../ui/Drawer/Drawer";
import useModal from "../../hooks/useModal";
import { CardCreateAllergens } from "../ui/CardCreateAllergens/CardCreateAllergens";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

const API_URL = import.meta.env.VITE_BASE_URL;
export const Allergens = () => {
  const allergens = useAppSelector(
    (state: RootState) => state.allergen.allergens
  );
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();
  const allergenService = new AlergenoService(`${API_URL}/alergenos`);
  const dispatch = useAppDispatch();

  const getAlergenos = async () => {
    await allergenService.getAll().then((allergenData) => {
      dispatch(setAllergens(allergenData));
    });
  };

  useEffect(() => {
    getAlergenos();
  }, []);
  return (
    <Box sx={{ backgroundColor: "#0B2545", minHeight: "100vh" }}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <CssBaseline />
      <CustomHeaderWithDrawer />

      {/* LISTA DE ALÉRGENOS */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
            <AddButton
              onAddClick={() => openModal("addAllergen")}
              isCompany={false}
            />
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
        {allergens?.map((item: IAlergenos) => (
          <Allergen allergen={item} key={item.id} />
        ))}
      </Box>
      {isModalOpen && activeModal === "addAllergen" && (
        <CardCreateAllergens onClose={closeModal} />
      )}
    </Box>
  );
};
