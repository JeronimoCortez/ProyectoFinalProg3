import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./CreateProduct.module.css";
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
import { IUpdateProducto } from "../../../types/dtos/productos/IUpdateProducto";
import { IImagen } from "../../../types/IImagen";
import { UploadImage } from "../UploadImage/UploadImage";
import { ProductoService } from "../../../services/ProductoService";
import * as Yup from "yup";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_BASE_URL;

const validationSchema = Yup.object({
  denominacion: Yup.string().required("La denominación es obligatoria."),
  precioVenta: Yup.number()
    .required("El precio es obligatorio.")
    .min(0, "Debe ser un número positivo."),
  descripcion: Yup.string().optional(),
  habilitado: Yup.boolean().required(),
  codigo: Yup.string().required("El código es obligatorio."),
});

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
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [allergns, setAllergns] = useState<IAlergenos[]>();
  const [productActive, setProductActive] = useState<IProductos>();
  const [checked, setChecked] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<ICategorias[]>([]);
  const [imageProducto, setImagenProducto] = useState<IImagen | null>(null);

  const allergenService = new AlergenoService(`${API_URL}/alergenos`);
  const categoryService = new CategoriaService(`${API_URL}/categorias`);
  const productService = new ProductoService(`${API_URL}/articulos`);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) =>
      Number(option.value)
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
      categoryService.getSubcategoriasPorSucursal(idBranch).then((data) => {
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

  const initialValues: ICreateProducto | IUpdateProducto = product
    ? {
        id: product.id,
        denominacion: product.denominacion,
        precioVenta: product.precioVenta,
        descripcion: product.descripcion,
        habilitado: product.habilitado,
        imagenes: product.imagenes,
        codigo: product.codigo,
        idCategoria: product.categoria.id,
        idAlergenos: product.alergenos
          ? product.alergenos.map((alergeno) => alergeno.id)
          : [],
      }
    : {
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
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const parsedValues = {
            ...values,
            precioVenta: Number(values.precioVenta),
            idCategoria: Number(values.idCategoria),
            imagenes: Array.isArray(values.imagenes)
              ? values.imagenes
              : [values.imagenes],
          };

          console.log("Datos enviados:", parsedValues);

          if (product) {
            productService.editarProducto(
              product.id,
              parsedValues as IUpdateProducto
            );
            onClose();
            Swal.fire({
              title: "Éxito!",
              text: `El producto: ${product.denominacion} se edito correctamente!`,
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          } else {
            productService.crearProducto(parsedValues as ICreateProducto);
            onClose();
            Swal.fire({
              title: "Éxito!",
              text: `El producto: ${values.denominacion} se creo correctamente!`,
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          }
        }}
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
                {product ? "Editar producto" : "Crear un producto"}
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
                      error={
                        touched.denominacion && Boolean(errors.denominacion)
                      }
                      helperText={touched.denominacion && errors.denominacion}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <select
                      className={styles.selectContainer}
                      name="idCategoria"
                      onChange={handleChange}
                      value={values.idCategoria}
                    >
                      <option className={styles.selectOption} value="">
                        Categoria
                      </option>
                      {categorias?.map((categoria) => (
                        <option
                          className={styles.selectOption}
                          value={categoria.id}
                        >
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
                      name="precioVenta"
                      value={values.precioVenta}
                      onChange={handleChange}
                      error={touched.precioVenta && Boolean(errors.precioVenta)}
                      helperText={touched.precioVenta && errors.precioVenta}
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
                      name="codigo"
                      value={values.codigo}
                      onChange={handleChange}
                      error={touched.codigo && Boolean(errors.codigo)}
                      helperText={touched.codigo && errors.codigo}
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
                        checked={values.habilitado}
                        onChange={(e) => {
                          setFieldValue("habilitado", e.target.checked);
                        }}
                        name="habilitado"
                        value={values.habilitado}
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
                    name="descripcion"
                    value={values.descripcion}
                    onChange={handleChange}
                    error={touched.descripcion && Boolean(errors.descripcion)}
                    helperText={touched.descripcion && errors.descripcion}
                  />
                  <Box>
                    <UploadImage
                      imageObjeto={imageProducto}
                      setImageObjeto={(newImage) => {
                        setImagenProducto(newImage);
                        setFieldValue("imagenes", [
                          ...values.imagenes,
                          newImage,
                        ]);
                      }}
                      typeElement="articulos"
                      fieldName="imagenes"
                    />
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ maxHeight: "400px" }}>
                    <select
                      className={styles.containerSelectAlergen}
                      multiple
                      value={values.idAlergenos.map(String)}
                      onChange={(e) => {
                        const selectedValues = Array.from(
                          e.target.selectedOptions,
                          (option) => Number(option.value)
                        );
                        setFieldValue("idAlergenos", selectedValues);
                      }}
                    >
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
