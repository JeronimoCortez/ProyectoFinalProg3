import { Box, Typography, TextField } from "@mui/material";
import { CloseButton } from "../CloseButton/CloseButton";
import { CheckButton } from "../CheckButton/CheckButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC, useState } from "react";
import * as Yup from "yup";
import { AlergenoService } from "../../../services/AlergenoService";
import { useAppSelector } from "../../../hooks/redux";
import { IAlergenos } from "../../../types/dtos/alergenos/IAlergenos";
import { Form, Formik } from "formik";
import Swal from "sweetalert2";
import { UploadImage } from "../UploadImage/UploadImage";
import { IImagen } from "../../../types/IImagen";

const API_URL = import.meta.env.VITE_BASE_URL;

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 285,
  bgcolor: "#8DA9C4",
  border: "4px solid #134074",
  borderRadius: "0.4rem",
  boxShadow: 12,
  p: 4,
};

interface IPropsCreateAllergens {
  onClose: () => void;
  allergen?: IAlergenos;
}

const validationSchema = Yup.object({
  denominacion: Yup.string().required(),
});

export const CardCreateAllergens: FC<IPropsCreateAllergens> = ({
  onClose,
  allergen,
}) => {
  const [image, setImage] = useState<IImagen | null>(null);
  const serviceAllergen = new AlergenoService(`${API_URL}/alergenos`);
  let elementActive = useAppSelector((state) => state.allergen.elementActive);

  if (allergen) {
    elementActive = allergen;
  }

  const initialValues: IAlergenos = allergen ||
    elementActive || {
      id: 0,
      denominacion: "",
      imagen: {
        id: 0,
        name: "",
        url: "",
        eliminado: false,
      },
    };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          background: "rgba(64,79,96, 0.62)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values) => {
            if (values.imagen.url) {
              values.imagen.name = values.denominacion;
              values.imagen.eliminado = false;
            }
            console.log(values);

            if (allergen) {
              serviceAllergen.put(allergen.id, values);
              onClose();
              Swal.fire({
                title: "Éxito!",
                text: `El alergeno: ${allergen.denominacion} se edito correctamente!`,
                icon: "success",
                confirmButtonText: "Aceptar",
              });
            } else {
              serviceAllergen.post(values);
              onClose();
              Swal.fire({
                title: "Éxito!",
                text: `El alergeno: ${values.denominacion} se creo correctamente!`,
                icon: "success",
                confirmButtonText: "Aceptar",
              });
            }
          }}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form>
              <Box sx={style}>
                {elementActive ? (
                  <Typography
                    id="modal-title"
                    fontSize={"20px"}
                    sx={{ color: "#0B2545", textAlign: "center", mb: 2 }}
                  >
                    Editar un alergeno
                  </Typography>
                ) : (
                  <Typography
                    id="modal-title"
                    fontSize={"20px"}
                    sx={{ color: "#0B2545", textAlign: "center", mb: 2 }}
                  >
                    Crear un alergeno
                  </Typography>
                )}
                <TextField
                  fullWidth
                  label="Ingrese una denominación"
                  variant="outlined"
                  size="small"
                  inputProps={{ style: { border: "none" } }}
                  InputLabelProps={{
                    style: {
                      color: "#134074",
                      fontSize: "16px",
                    },
                  }}
                  sx={{
                    mb: 2,
                    backgroundColor: "rgba(217,217,217,.12)",
                  }}
                  value={values.denominacion}
                  onChange={handleChange}
                  error={touched.denominacion && Boolean(errors.denominacion)}
                  helperText={touched.denominacion && errors.denominacion}
                  name="denominacion"
                />
                {/* Selector de imagen */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <UploadImage
                    imageObjeto={image}
                    setImageObjeto={setImage}
                    fieldName={"imagen"}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                  }}
                >
                  <CheckButton isCompany={false} />
                  <CloseButton isCompany={false} onclick={onClose} />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </ThemeProvider>
  );
};
