import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { AddButton } from "../../ui/AddButton/AddButton";
import { CategoryLabel } from "../../ui/CategoryLabel/CategoryLabel";
import useModal from "../../../hooks/useModal";
import { CreateCategory } from "../../ui/CreateCategory/CreateCategory";
import { FC, useEffect } from "react";
import { CategoriaService } from "../../../services/CategoriaService";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../redux/store/store";
import { setCategories } from "../../../redux/slices/categorySlice";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

interface IPropsCategories {
  idBranch?: number;
  idEmpresa: number;
}

const API_URL = import.meta.env.VITE_BASE_URL;

export const Categories: FC<IPropsCategories> = ({ idBranch, idEmpresa }) => {
  const categoryService = new CategoriaService(`${API_URL}/categorias`);

  const categories = useAppSelector(
    (state: RootState) => state.category.categories
  );
  const dispatch = useAppDispatch();
  const getAllCategorias = async () => {
    if (idBranch) {
      const data = await categoryService.getCategoriasBySucursal(idBranch);
      dispatch(setCategories(data));
    }
  };

  useEffect(() => {
    getAllCategorias();
  }, []);

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
        </Box>
        {categories?.map((category) => (
          <CategoryLabel
            category={category}
            idBranch={idBranch}
            idEmpresa={idEmpresa}
          />
        ))}
      </Box>

      {isModalOpen && activeModal === "addCategory" && (
        <CreateCategory onClose={closeModal} idEmpresa={idEmpresa} />
      )}
    </Box>
  );
};
