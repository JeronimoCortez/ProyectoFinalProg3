import {
  Box,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./CreateProduct.module.css";
import ImageIcon from "@mui/icons-material/Image";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { IProductos } from "../../../types/dtos/productos/IProductos";
import { FC, useState } from "react";
import * as Yup from "yup";
import { CheckBox } from "@mui/icons-material";

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
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

const validationSchema = Yup.object({
  denominacion: Yup.string().required("Ingrese una denominacion"),
  precioVenta: Yup.number()
    .positive("Ingrese un numero positivo")
    .required("Ingrese precio de venta"),
  descripcion: Yup.string().required("Ingrese una descripcion"),
  habilitado: Yup.boolean(),
  codigo: Yup.string().required("Ingrese un codigo"),
});

const CreateProduct: FC<IPropsCreateProduct> = ({ product, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Obtén un array de opciones seleccionadas
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  const [productActive, setProductActive] = useState<IProductos>();
  const [checked, setChecked] = useState<boolean>(false);

  if (product) {
    setProductActive(product);
  }

  const onHandleCheckedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(event.target.checked);
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
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
            justifyContent: "space-between",
          }}
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
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#FFFFFF",
                    "&.Mui-checked": {
                      color: "#4CE415",
                    },
                  }}
                  checked={checked}
                  onChange={onHandleCheckedChange}
                />
              }
              label="Habilitado"
              sx={{ color: "#FFFFFF" }}
            />
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
          <Box>
            <Box sx={{ maxHeight: "400px" }}>
              <select className={styles.containerSelectAlergen} multiple>
                <option className={styles.selectOption} value="" disabled>
                  Alergenos
                </option>
                <option className={styles.selectOption} value="">
                  1
                </option>
                <option className={styles.selectOption} value="">
                  2
                </option>
              </select>
              <Typography sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                Para seleccionar mas de una opcion mantenga la tecla Ctrl
              </Typography>
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
