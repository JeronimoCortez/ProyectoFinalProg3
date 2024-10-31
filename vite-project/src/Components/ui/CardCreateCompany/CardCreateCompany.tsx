import { Box, TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { FC } from "react";
import { Form, Formik } from "formik";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

interface IPropsCreateCompany {
  onClose: () => void;
  getEmpresas?: Function;
}

// Estilos personalizados
const FormContainer = styled(Box)(({ theme }) => ({
  width: 400,
  height: 400,
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
  getEmpresas,
}) => {
  // Consultar si el valor del id lo generamos nosotros o lo genera la api
  const initialValues: IEmpresa = {
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

  // Declaramos las empresas que traemos por parametro funcion
  // const empresas = getEmpresas();

  const elementActive = useAppSelector((state) => state.company.elementActive);

  const dispatch = useAppDispatch();

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
      <FormContainer sx={{ color: "#134074" }}>
        <Box sx={{ mb: 2 }}>
          {elementActive ? <h3>Editar empresa</h3> : <h3>Crear una empresa</h3>}
        </Box>
        <Stack spacing={2}>
          <FieldContainer>
            <TextField
              fullWidth
              label="Ingrese un nombre"
              variant="outlined"
              size="small"
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
              label="Ingrese una razón social"
              variant="outlined"
              size="small"
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
              label="Ingrese su CUIT"
              variant="outlined"
              size="small"
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
              label="Imagen"
              variant="outlined"
              size="small"
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
          <CheckButton typeCheck="Company" isCompany={true} />
          <CloseButton typeClose="Company" isCompany={true} onclick={onClose} />
        </Box>
      </FormContainer>
    </Box>
  );
};
