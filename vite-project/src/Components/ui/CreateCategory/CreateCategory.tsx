import {
  Box,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { FC } from "react";
import * as Yup from "yup";
import { ICategorias } from "../../../types/dtos/categorias/ICategorias";
import { ICreateCategoria } from "../../../types/dtos/categorias/ICreateCategoria";
import { IUpdateCategoria } from "../../../types/dtos/categorias/IUpdateCategoria";
import { Form, Formik } from "formik";
import { CategoriaService } from "../../../services/CategoriaService";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_BASE_URL;

interface IPropsCreateCategory {
  categoria?: ICategorias;
  onClose: () => void;
  idEmpresa: number;
}

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

const validationSchema = Yup.object({
  denominacion: Yup.string().required("Ingrese denominacion"),
});

export const CreateCategory: FC<IPropsCreateCategory> = ({
  onClose,
  idEmpresa,
  categoria,
}) => {
  const initialValues: ICreateCategoria | IUpdateCategoria = categoria
    ? {
        id: categoria.id,
        denominacion: categoria.denominacion,
        eliminado: categoria.eliminado,
        idEmpresa: idEmpresa,
        idSucursales: categoria.sucursales
          ? categoria.sucursales.map((sucursal) => sucursal.id)
          : [],
        idCategoriaPadre: null,
      }
    : {
        denominacion: "",
        idEmpresa: idEmpresa,
        idCategoriaPadre: null,
      };

  const categoriaService = new CategoriaService(`${API_URL}/categorias`);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: "rgba(64,79,96, 0.62)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          width: "42vw",
          height: "52vh",
          backgroundColor: "#8DA9C4",
          border: "6px solid #134074",
          borderRadius: "4px",
        }}
      >
        <ThemeProvider theme={theme}></ThemeProvider>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{
            display: "flex",
            color: "#134074",
            justifyContent: "center",
            marginTop: "4vh",
            marginBottom: "4vh",
          }}
        >
          {categoria ? "Editar una categoría padre" : "Crear categoria padre"}
        </Typography>
        <Formik
          validationSchema={validationSchema}
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);

            if (categoria) {
              categoriaService.editarCategoria(
                values as IUpdateCategoria,
                categoria.id
              );
              onClose();
              Swal.fire({
                title: "Éxito!",
                text: `La empresa: ${values.denominacion} se editó correctamente!`,
                icon: "success",
                confirmButtonText: "Aceptar",
              });
            } else {
              categoriaService.crearCategoria(values as ICreateCategoria);
              onClose();
              Swal.fire({
                title: "Éxito!",
                text: `La empresa: ${values.denominacion} se creo correctamente!`,
                icon: "success",
                confirmButtonText: "Aceptar",
              });
            }
          }}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form>
              <TextField
                name="denominacion"
                value={values.denominacion}
                onChange={handleChange}
                error={touched.denominacion && Boolean(errors.denominacion)}
                helperText={touched.denominacion && errors.denominacion}
                variant="outlined"
                placeholder="Ingrese una denominación"
                InputProps={{
                  style: {
                    width: "34vw",
                    color: "#134074",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#FFFFFF",
                    fontSize: "1.5rem",
                  },
                }}
                sx={{
                  display: "flex",
                  margin: "3.1rem",
                  borderRadius: "2px",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(217, 217, 217, 0.7)",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#D9D9D9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFFFFF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFFFFF",
                    },
                  },
                }}
              ></TextField>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  marginTop: "2vh",
                  gap: "20vw",
                }}
              >
                <CheckButton isCompany={false} />
                <CloseButton isCompany={false} onclick={onClose} />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
