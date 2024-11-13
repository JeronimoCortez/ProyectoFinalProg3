import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./CreateProduct.module.css";
import ImageIcon from "@mui/icons-material/Image";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { IProductos } from "../../../types/dtos/productos/IProductos";
import { FC, useEffect, useState } from "react";
import { ICreateProducto } from "../../../types/dtos/productos/ICreateProducto";
import { Form, Formik } from "formik";
import { IAlergenos } from "../../../types/dtos/alergenos/IAlergenos";
import { AlergenoService } from "../../../services/AlergenoService";
import { CategoriaService } from "../../../services/CategoriaService";
import { ICategorias } from "../../../types/dtos/categorias/ICategorias";

const API_URL = import.meta.env.VITE_BASE_URL;

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
  idBranch?: number;
  onClose: () => void;
}

const CreateProduct: FC<IPropsCreateProduct> = ({
  product,
  onClose,
  idBranch,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [allergns, setAllergns] = useState<IAlergenos[]>();
  const [productActive, setProductActive] = useState<IProductos>();
  const [checked, setChecked] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<ICategorias[]>([]);

  const allergenService = new AlergenoService(`${API_URL}/alergenos`);
  const categoryService = new CategoriaService(`${API_URL}/categorias`);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  const onHandleCheckedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(event.target.checked);
  };

  const getAllergens = async () => {
    allergenService.getAll().then((data) => {
      setAllergns(data as IAlergenos[]);
    });
  };

  const getCategorias = async () => {
    if (idBranch) {
      categoryService.getCategoriasBySucursal(idBranch).then((data) => {
        setCategorias(data);
      });
    }
  };

  useEffect(() => {
    if (product) {
      setProductActive(product);
    }
  });
  useEffect(() => {
    getAllergens();
    getCategorias();
  }, []);

  const initialValues: ICreateProducto = {
    denominacion: "",
    precioVenta: 0,
    descripcion: "",
    habilitado: false,
    codigo: "",
    imagenes: [],
    idCategoria: 0,
    idAlergenos: [],
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
        onSubmit={() => {}}
      >
        {({ values, handleChange, setFieldValue, errors, touched }) => (
          <Form>
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
                      name="denominacion"
                      value={values.denominacion}
                      onChange={handleChange}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <select className={styles.selectContainer}>
                      <option className={styles.selectOption} value="">
                        Categoria
                      </option>
                      {categorias?.map((categoria) => (
                        <option className={styles.selectOption} value="">
                          {categoria.denominacion}
                        </option>
                      ))}
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
                      <option className={styles.optionTitle} value="" disabled>
                        Alergenos
                      </option>
                      {allergns?.map((a) => (
                        <option className={styles.selectOption} value={a.id}>
                          {a.denominacion}
                        </option>
                      ))}
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
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateProduct;
