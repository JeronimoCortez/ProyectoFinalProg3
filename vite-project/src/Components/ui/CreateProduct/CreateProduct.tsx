import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./CreateProduct.module.css";
import ImageIcon from "@mui/icons-material/Image";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { IProductos } from "../../../types/dtos/productos/IProductos";
import { FC } from "react";

const FormContainer = styled(Box)(({ theme }) => ({
  minWidth: 600,
  minHeight: 400,
  padding: theme.spacing(5.5),
  backgroundColor: "#8DA9C4",
  border: "2px solid #134074",
  borderRadius: "0.4 rem",
  textAlign: "center",
  alignItems: "center",
}));

const FieldContainer = styled(Box)(({ theme }) => ({
  borderRadius: "0.4 rem",
  marginBottom: theme.spacing(2),
}));

interface IPropsCreateProduct {
  product?: IProductos;
  onClose: () => void;
}

const CreateProduct: FC<IPropsCreateProduct> = ({ product, onClose }) => {
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
      <FormContainer>
        <Typography
          sx={{
            marginBottom: "15px",
            color: "#134074",
            fontFamily: "Promp, sans-serif",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Crear un producto
        </Typography>
        <Box
          sx={{ display: "flex", gap: "3rem", justifyContent: "space-between" }}
        >
          <Box>
            <FieldContainer>
              <TextField
                fullWidth
                label="Ingrese una denominacion"
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
                label="Ingrese una denominacion"
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
              <select className={styles.selectContainer}>
                <option className={styles.selectOption} value="">
                  Categoria
                </option>
                <option className={styles.selectOption} value="">
                  1
                </option>
                <option className={styles.selectOption} value="">
                  2
                </option>
              </select>
            </FieldContainer>
            <FieldContainer>
              <TextField
                fullWidth
                label="Ingrese precio de venta"
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
                label="Ingrese un codigo"
                variant="outlined"
                size="small"
                inputProps={{ style: { border: "none" } }}
                InputLabelProps={{
                  style: { color: "#FFFFFF", fontSize: "16px" },
                }}
                sx={{ backgroundColor: "rgba(217,217,217,.12)" }}
              />
            </FieldContainer>
          </Box>
          <Box>
            <TextField
              fullWidth
              label="Ingrese una descripcion"
              variant="outlined"
              size="small"
              rows={10}
              multiline
              inputProps={{ style: { border: "none" } }}
              InputLabelProps={{
                style: { color: "#FFFFFF", fontSize: "16px" },
              }}
              sx={{
                backgroundColor: "rgba(217,217,217,.12)",
                marginBottom: "1.5rem",
              }}
            />
            <Box>
              <TextField
                label="Ingrese una imagen"
                variant="outlined"
                size="small"
                inputProps={{ style: { border: "none" } }}
                InputLabelProps={{
                  style: { color: "#FFFFFF", fontSize: "16px" },
                }}
                sx={{
                  backgroundColor: "rgba(217,217,217,.12)",
                }}
              />
              <ImageIcon sx={{ fontSize: "40px", color: "#FFFFFF" }} />
            </Box>
          </Box>
        </Box>

        <Box mt={3} display="flex" justifyContent="space-between">
          <CheckButton isCompany={true} />
          <CloseButton isCompany={true} onclick={onClose} />
        </Box>
      </FormContainer>
    </Box>
  );
};

export default CreateProduct;
