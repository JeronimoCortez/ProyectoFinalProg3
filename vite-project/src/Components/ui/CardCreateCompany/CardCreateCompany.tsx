import { Box, TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { FC } from "react";
import { Form, Formik } from "formik";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import { useAppSelector } from "../../../hooks/redux";
import * as Yup from "yup";
import { EmpresaService } from "../../../services/EmpresaService";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_BASE_URL;

interface IPropsCreateCompany {
  onClose: () => void;
  company?: IEmpresa;
}

const validationSchema = Yup.object({
  nombre: Yup.string().required("Ingrese un nombre"),
  razonSocial: Yup.string().required("Ingrese una razon social"),
  cuit: Yup.number()
    .typeError("El CUIT debe ser un numero")
    .positive("El CUIT debe ser un numero positivo")
    .integer("El CUIT debe ser un numero entero")
    .required("Ingrese un cuit"),
  logo: Yup.string().url("Debe ser una url valida"),
});

// Estilos personalizados
const FormContainer = styled(Box)(({ theme }) => ({
  width: 400,
  minHeight: 400,
  padding: theme.spacing(5.5),
  backgroundColor: "#EE964B",
  borderRadius: "0.4 rem",
  textAlign: "center",
  alignItems: "center",
}));
const FieldContainer = styled(Box)(({ theme }) => ({
  border: "1px solid #ffffff",
  borderRadius: "0.4 rem",
  marginBottom: theme.spacing(3),
}));

export const CardCreateCompany: FC<IPropsCreateCompany> = ({
  onClose,
  company,
}) => {
  const serviceCompany = new EmpresaService(`${API_URL}/empresas`);
  let elementActive = useAppSelector((state) => state.company.elementActive);
  if (company) {
    elementActive = company;
  }

  const initialValues: IEmpresa = company ||
    elementActive || {
      id: 0,
      nombre: "",
      razonSocial: "",
      cuit: 0,
      logo: "",
      sucursales: [],
      pais: {
        id: 0,
        nombre: "",
      },
    };

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
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (company) {
            serviceCompany.put(company.id, values);
            onClose();
            Swal.fire({
              title: "Éxito!",
              text: `La empresa: ${company.nombre} se edito correctamente!`,
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          } else {
            serviceCompany.post(values);
            onClose();
            Swal.fire({
              title: "Éxito!",
              text: `La empresa: ${values.nombre} se creo correctamente!`,
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          }
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <FormContainer sx={{ color: "#134074" }}>
              <Box sx={{ mb: 2 }}>
                {elementActive ? (
                  <h3>Editar empresa</h3>
                ) : (
                  <h3>Crear una empresa</h3>
                )}
              </Box>
              <Stack spacing={2}>
                <FieldContainer>
                  <TextField
                    fullWidth
                    name="nombre"
                    label="Ingrese un nombre"
                    variant="outlined"
                    size="small"
                    value={values.nombre}
                    onChange={handleChange}
                    error={touched.nombre && Boolean(errors.nombre)}
                    helperText={touched && errors.nombre}
                    inputProps={{ style: { border: "none" } }}
                    InputLabelProps={{
                      style: { color: "#FFFFFF", fontSize: "16px" },
                    }}
                    sx={{ backgroundColor: "rgba(217,217,217,.12)" }}
                  />
                </FieldContainer>
                <FieldContainer>
                  <TextField
                    fullWidth
                    name="razonSocial"
                    label="Ingrese una razón social"
                    variant="outlined"
                    size="small"
                    value={values.razonSocial}
                    onChange={handleChange}
                    error={touched.razonSocial && Boolean(errors.razonSocial)}
                    helperText={touched.razonSocial && errors.razonSocial}
                    inputProps={{ style: { border: "none" } }}
                    InputLabelProps={{
                      style: { color: "#FFFFFF", fontSize: "16px" },
                    }}
                    sx={{ backgroundColor: "rgba(217,217,217,.12)" }}
                  />
                </FieldContainer>
                <FieldContainer>
                  <TextField
                    fullWidth
                    name="cuit"
                    label="Ingrese su CUIT"
                    variant="outlined"
                    size="small"
                    value={values.cuit}
                    onChange={handleChange}
                    error={touched.cuit && Boolean(errors.cuit)}
                    helperText={touched.cuit && errors.cuit}
                    inputProps={{ style: { border: "none" } }}
                    InputLabelProps={{
                      style: { color: "#FFFFFF", fontSize: "16px" },
                    }}
                    sx={{ backgroundColor: "rgba(217,217,217,.12)" }}
                  />
                </FieldContainer>
                <FieldContainer
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    fullWidth
                    name="logo"
                    label="Imagen"
                    variant="outlined"
                    size="small"
                    value={values.logo}
                    onChange={handleChange}
                    error={touched.logo && Boolean(errors.logo)}
                    helperText={touched.logo && errors.logo}
                    inputProps={{ style: { border: "none" } }}
                    InputLabelProps={{
                      style: { color: "#FFFFFF", fontSize: "16px" },
                    }}
                    sx={{ backgroundColor: "rgba(217,217,217,.12)" }}
                  />
                  <img
                    src="../../public/assets/BranchImg.png"
                    alt=""
                    width="60px"
                    height="46px"
                  />
                </FieldContainer>
              </Stack>

              {/* Botones de Aceptar y Cancelar */}
              <Box mt={3} display="flex" justifyContent="space-between">
                <CheckButton isCompany={true} />
                <CloseButton isCompany={true} onclick={onClose} />
              </Box>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
