import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import styles from "./CreateBranch.module.css";
import { IPais } from "../../../types/IPais";
import { IProvincia } from "../../../types/IProvincia";
import { ILocalidad } from "../../../types/ILocalidad";
import { PaisService } from "../../../services/PaisService";
import { ProvinciaService } from "../../../services/ProvinciaService";
import { LocalidadService } from "../../../services/LocalidadService";
import { SucursalService } from "../../../services/SucursalService";
import * as Yup from "yup";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import { useAppSelector } from "../../../hooks/redux";
import { Form, Formik } from "formik";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";

interface IPropsCreateBranch {
  onClose: () => void;
  branch?: ISucursal;
  company: IEmpresa;
}

const API_URL = import.meta.env.VITE_BASE_URL;

const validationSchema = Yup.object({
  nombre: Yup.string().required("Ingrese un nombre"),
  domicilio: Yup.object({
    calle: Yup.string().required("Ingrese una calle"),
    numero: Yup.number()
      .typeError("Debe ingresar un numero")
      .positive("Debe ingresar un numero positivo")
      .integer("Debe ingresar un numero entero")
      .required("Ingrese numero"),
    cp: Yup.number()
      .typeError("Debe ingresar un numero")
      .positive("Debe ingresar un numero positivo")
      .integer("Debe ingresar un numero entero")
      .required("Ingrese codigo postal"),
    piso: Yup.number()
      .typeError("Debe ingresar un numero")
      .positive("Debe ingresar un numero positivo")
      .integer("Debe ingresar un numero entero")
      .required("Ingrese numero"),
    nroDpto: Yup.number()
      .typeError("Debe ingresar un numero")
      .positive("Debe ingresar un numero positivo")
      .integer("Debe ingresar un numero entero")
      .required("Ingrese numero"),
    // localidad: Yup.object({
    //   id: Yup.number().required("Seleccione localidad"),
    //   provincia: Yup.object({
    //     id: Yup.number().required("Seleccione provincia"),
    //     pais: Yup.object({
    //       id: Yup.number().required("Seleccione pais"),
    //     }),
    //   }),
    // }),
  }),
  calle: Yup.string().required("Ingrese una calle"),
  esCasaMatriz: Yup.boolean(),

  latitud: Yup.number()
    .typeError("Debe ingresar un numero")
    .integer("Debe ingresar un numero entero")
    .required("Ingrese latitud"),
  longitud: Yup.number()
    .typeError("Debe ingresar un numero")
    .integer("Debe ingresar un numero entero")
    .required("Ingrese longitud"),

  horarioApertura: Yup.string().required("Ingrese horario de apertura"),
  horarioCierre: Yup.string().required("Ingrese horario de cierre"),
  eliminado: Yup.boolean(),
  logo: Yup.string().url("Debe ser una url valida"),
});

export const CreateBranch: FC<IPropsCreateBranch> = ({
  onClose,
  branch,
  company,
}) => {
  let elementActive = useAppSelector((state) => state.branch.elementActive);
  if (branch) {
    elementActive = branch;
  }
  // VALORES INICIALES
  const initialValues: ISucursal = branch ||
    elementActive || {
      id: 0,
      nombre: "",
      empresa: company,
      domicilio: {
        id: 0,
        calle: "",
        numero: 0,
        cp: 0,
        piso: 0,
        nroDpto: 0,
        eliminado: false,
        localidad: {
          id: 0,
          nombre: "",
          provincia: {
            nombre: "",
            pais: {
              id: 0,
              nombre: "",
            },
            id: 0,
          },
        },
      },
      calle: "",
      categorias: [],
      esCasaMatriz: false,
      latitud: 0,
      longitud: 0,
      horarioApertura: "",
      horarioCierre: "",
      eliminado: false,
      logo: "",
    };

  //INSTANCIAMOS SERVICIOS
  const serviceCountries = new PaisService(`${API_URL}/paises`);
  const serviceProvinces = new ProvinciaService(`${API_URL}/provincias`);
  const servicesLocalities = new LocalidadService(`${API_URL}/localidades`);
  const serviceBranches = new SucursalService(`${API_URL}/sucursales`);

  // Declaramos estados
  const [checked, setChecked] = useState<boolean>(false);
  const [localityId, setLocalityId] = useState<number>();
  const [countryId, setCountryId] = useState<number | undefined>(undefined);
  const [provinceId, setProvinceId] = useState<number | undefined>(undefined);
  const [countries, setCountries] = useState<IPais[]>([]);
  const [provinces, setProvinces] = useState<IProvincia[]>([]);
  const [localities, setLocalities] = useState<ILocalidad[]>([]);

  // Manejador del evento cuando el usuario marca/desmarca el checkbox
  const handleCheckedChange = (prevEvent: any) => {
    setChecked((prevEvent) => !prevEvent);
  };
  const onPaisHandleChange = (idPais: number) => {
    setCountryId(idPais);
  };
  const getPaises = async () => {
    await serviceCountries.getAll().then((data) => {
      setCountries(data);
    });
  };

  useEffect(() => {
    getPaises();
  }, []);

  const getProvincia = async (idPais: number) => {
    try {
      const data = await serviceProvinces.getAllProvinciaByPais(idPais);
      setProvinces(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (countryId !== undefined) {
      getProvincia(countryId);
    }
  }, [countryId]);

  const onProvinciaHandleChange = (idProvincia: number) => {
    setProvinceId(idProvincia);
  };

  const getLocalidades = async (provinceId: number) => {
    try {
      const data = await servicesLocalities.getAllLocalidadByProvincia(
        provinceId
      );
      setLocalities(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (provinceId !== undefined) {
      getLocalidades(provinceId);
    }
  }, [provinceId]);

  const stylesTextField = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(217, 217, 217, 0.35)",
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFFFFF",
      },
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
      <Box
        sx={{
          width: "800px",
          maxHeight: "700px",
          backgroundColor: "#2E64A1",
          fontFamily: "Prompt, sans-serif",
          padding: ".4rem",
          overflow: "hidden",
        }}
      >
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values) => {
            values.calle = values.domicilio.calle;
            console.log(values.nombre);
            if (branch) {
              serviceBranches.put(branch.id, values);
            } else {
              serviceBranches.post(values);
            }
          }}
        >
          {({ values, handleChange, setFieldValue, errors, touched }) => (
            <Form>
              <Box sx={{ margin: "0 auto", maxWidth: "250px" }}>
                {elementActive ? (
                  <Typography
                    sx={{ fontSize: "24px", color: "#FFF", fontWeight: "300" }}
                  >
                    Editar sucursal
                  </Typography>
                ) : (
                  <Typography
                    sx={{ fontSize: "24px", color: "#FFF", fontWeight: "300" }}
                  >
                    Crear una sucursal
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)", // Tres columnas
                  gap: "1rem", // Espaciado entre columnas
                  padding: "1.6rem",
                }}
              >
                {/* Columna 1 */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <TextField
                    placeholder="Ingrese un nombre"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    error={touched.nombre && Boolean(errors.nombre)}
                    helperText={touched.nombre && errors.nombre}
                  />
                  <TextField
                    placeholder="Horario apertura"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="horarioApertura"
                    value={values.horarioApertura}
                    onChange={handleChange}
                    error={
                      touched.horarioApertura && Boolean(errors.horarioApertura)
                    }
                    helperText={
                      touched.horarioApertura && errors.horarioApertura
                    }
                  />
                  <TextField
                    placeholder="Horario de cierre"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="horarioCierre"
                    value={values.horarioCierre}
                    onChange={handleChange}
                    error={
                      touched.horarioCierre && Boolean(errors.horarioCierre)
                    }
                    helperText={touched.horarioCierre && errors.horarioCierre}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#FFFFFF",
                          "&.Mui-checked": {
                            color: "#4CE415",
                          },
                        }}
                        checked={values.eliminado}
                        onChange={(event) => {
                          handleCheckedChange(event);
                          handleChange({
                            target: {
                              name: "eliminado",
                              value: checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Habilitado"
                    sx={{
                      color: "#FFFFFF",
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#FFFFFF",
                          "&.Mui-checked": {
                            color: "#4CE415",
                          },
                        }}
                        checked={values.esCasaMatriz}
                        onChange={(event) => {
                          handleCheckedChange(event);
                          handleChange({
                            target: {
                              name: "esCasaMatriz",
                              value: checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Es casa matriz"
                    sx={{
                      color: "#FFFFFF",
                    }}
                  />
                </Box>

                {/* Columna 2 */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <select
                    className={styles.selectContainer}
                    name="domicilio.localidad.provincia.pais.id"
                    value={
                      values.domicilio.localidad.provincia.pais.id &&
                      values.domicilio.localidad.provincia.pais.id
                    }
                    onChange={(e) => {
                      handleChange(e);
                      const selectedCountryId = Number(e.target.value);
                      if (selectedCountryId) {
                        onPaisHandleChange(selectedCountryId);
                        const paisSeleccionado = countries.find(
                          (pais) => pais.id === selectedCountryId
                        );
                        setFieldValue(
                          "domicilio.localidad.provincia.pais.nombre",
                          paisSeleccionado?.nombre || ""
                        );
                      }
                    }}
                  >
                    <option className={styles.selectOption} value="" disabled>
                      Ingrese un país
                    </option>
                    {countries?.map((country) => (
                      <option
                        className={styles.selectOption}
                        key={country.id}
                        value={country.id}
                      >
                        {country.nombre}
                      </option>
                    ))}
                  </select>

                  <select
                    className={styles.selectContainer}
                    name="domicilio.localidad.provincia.id"
                    value={values.domicilio.localidad.provincia.id}
                    onChange={(e) => {
                      handleChange(e);
                      const selectedProvinceId = Number(e.target.value);
                      if (selectedProvinceId) {
                        onProvinciaHandleChange(selectedProvinceId);
                        const provinciaSeleccionada = provinces.find(
                          (provincia) => provincia.id === selectedProvinceId
                        );

                        setFieldValue(
                          "domicilio.localidad.provincia.nombre",
                          provinciaSeleccionada?.nombre || ""
                        );
                      }
                    }}
                  >
                    <option className={styles.selectOption} value="" disabled>
                      Ingrese una provincia
                    </option>
                    {provinces?.map((province) => (
                      <option
                        className={styles.selectOption}
                        key={province.id}
                        value={province.id}
                      >
                        {province.nombre}
                      </option>
                    ))}
                  </select>

                  <select
                    className={styles.selectContainer}
                    name="domicilio.localidad.id"
                    value={values.domicilio.localidad.id}
                    onChange={(e) => {
                      handleChange(e);
                      const selectedLocalityId = Number(e.target.value);
                      if (selectedLocalityId) {
                        onProvinciaHandleChange(selectedLocalityId);
                        const localidadSeleccionada = localities.find(
                          (localidad) => localidad.id === selectedLocalityId
                        );

                        setFieldValue(
                          "domicilio.localidad.nombre",
                          localidadSeleccionada?.nombre || ""
                        );
                      }
                    }}
                  >
                    <option className={styles.selectOption} value="" disabled>
                      Ingrese una localidad
                    </option>
                    {localities?.map((locality) => (
                      <option
                        className={styles.selectOption}
                        key={locality.id}
                        value={locality.id}
                      >
                        {locality.nombre}
                      </option>
                    ))}
                  </select>

                  {/* Longitud */}
                  <TextField
                    placeholder="Longitud"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="longitud"
                    value={values.longitud}
                    onChange={handleChange}
                    error={touched.longitud && Boolean(errors.longitud)}
                    helperText={touched.longitud && errors.longitud}
                  />
                  <TextField
                    placeholder="latitud"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="latitud"
                    value={values.latitud}
                    onChange={handleChange}
                    error={touched.latitud && Boolean(errors.latitud)}
                    helperText={touched.latitud && errors.latitud}
                  />
                </Box>

                {/* Columna 3 */}

                {/* Nombre de la calle */}

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <TextField
                    placeholder="Nombre de la calle"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="domicilio.calle"
                    value={values.domicilio.calle}
                    onChange={handleChange}
                    error={
                      touched.domicilio?.calle &&
                      Boolean(errors.domicilio?.calle)
                    }
                    helperText={
                      touched.domicilio?.calle && errors.domicilio?.calle
                    }
                  />
                  {/* Número de la calle */}
                  <TextField
                    placeholder="Numero de la calle"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="domicilio.numero"
                    value={values.domicilio.numero}
                    onChange={handleChange}
                    error={
                      touched.domicilio?.numero &&
                      Boolean(errors.domicilio?.numero)
                    }
                    helperText={
                      touched.domicilio?.numero && errors.domicilio?.numero
                    }
                  />
                  {/* Código postal */}
                  <TextField
                    placeholder="Codigo postal"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="domicilio.cp"
                    value={values.domicilio.cp}
                    onChange={handleChange}
                    error={
                      touched.domicilio?.cp && Boolean(errors.domicilio?.cp)
                    }
                    helperText={touched.domicilio?.cp && errors.domicilio?.cp}
                  />
                  {/* Número de piso */}
                  <TextField
                    placeholder="Numero de piso"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="domicilio.piso"
                    value={values.domicilio.piso}
                    onChange={handleChange}
                    error={
                      touched.domicilio?.piso && Boolean(errors.domicilio?.piso)
                    }
                    helperText={
                      touched.domicilio?.piso && errors.domicilio?.piso
                    }
                  />
                  {/* Número de departamento */}
                  <TextField
                    placeholder="Numero departamento"
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={stylesTextField}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                    name="domicilio.nroDpto"
                    value={values.domicilio.nroDpto}
                    onChange={handleChange}
                    error={
                      touched.domicilio?.nroDpto &&
                      Boolean(errors.domicilio?.nroDpto)
                    }
                    helperText={
                      touched.domicilio?.nroDpto && errors.domicilio?.nroDpto
                    }
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "50%",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <TextField
                  placeholder="Ingrese una imagen"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={stylesTextField}
                  InputProps={{
                    style: {
                      backgroundColor: "rgba(217, 217, 217, 0.35)",
                      color: "#FFFFFF",
                      height: "50px",
                      fontSize: "14px",
                    },
                  }}
                  name="logo"
                  value={values.logo}
                  onChange={handleChange}
                  error={touched.logo && Boolean(errors.logo)}
                  helperText={touched.logo && errors.logo}
                />
                <ImageIcon sx={{ fontSize: "50px", color: "#FFFFFF" }} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  marginTop: "8px",
                }}
              >
                <CheckButton isCompany={false} />
                <CloseButton isCompany={true} onclick={onClose} />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
