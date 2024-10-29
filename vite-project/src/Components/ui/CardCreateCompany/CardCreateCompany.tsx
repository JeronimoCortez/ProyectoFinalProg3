import { Box, TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";

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

export const CardCreateCompany = () => {
  return (
    <FormContainer sx={{ color: "#134074" }}>
      <Box sx={{ mb: 2 }}>
        <h3>Crear una empresa</h3>
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
              style: { color: "#FFFFFF", fontSize: "18px" },
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
              style: { color: "#FFFFFF", fontSize: "18px" },
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
              style: { color: "#FFFFFF", fontSize: "18px" },
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
              style: { color: "#FFFFFF", fontSize: "18px" },
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
        <CloseButton typeClose="Company" isCompany={true} />
      </Box>
    </FormContainer>
  );
};
