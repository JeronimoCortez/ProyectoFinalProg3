import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import WatchIcon from "@mui/icons-material/WatchLater";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { InputTextField } from "../InputTextField/InputTextField";
import { IPais } from "../../../types/IPais";
import { IProvincia } from "../../../types/IProvincia";
import { ILocalidad } from "../../../types/ILocalidad";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import { PaisService } from "../../../services/PaisService";
import { ProvinciaService } from "../../../services/ProvinciaService";
import styles from "./CreateBranch.module.css";
import * as Yup from "yup";
import { LocalidadService } from "../../../services/LocalidadService";
import { useAppSelector } from "../../../hooks/redux";
import { ICreateSucursal } from "../../../types/dtos/sucursal/ICreateSucursal";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { SucursalService } from "../../../services/SucursalService";

const API_URL = import.meta.env.VITE_BASE_URL;

interface IPropsCreateBranch {
  onClose: () => void;
  branch?: ISucursal;
  idCompany: number;
}

const validationSchema = Yup.object({
  nombre: Yup.string().required("Ingrese un nombre"),
  horarioApertura: Yup.string().required("Ingrese horario de apertura"),
  horarioCierre: Yup.string().required("Ingrese horario de cierre"),
  esCasaMatriz: Yup.boolean(),
  latitud: Yup.number()
    .typeError("Debe ingresar un numero")
    .positive("Debe ingresar un numero positivo")
    .integer("Debe ingresar un numero entero")
    .required("Ingrese latitud"),
  longitud: Yup.number()
    .typeError("Debe ingresar un numero")
    .positive("Debe ingresar un numero positivo")
    .integer("Debe ingresar un numero entero")
    .required("Ingrese longitud"),
  calle: Yup.string().required("Ingrese una calle"),
  numero: Yup.number()
    .typeError("Debe ingresar un numero")
    .positive("Debe ingresar un numero positivo")
    .integer("Debe ingresar un numero entero")
    .required("Ingrese un numero"),
  cp: Yup.number()
    .typeError("Debe ingresar un numero")
    .positive("Debe ingresar un numero positivo")
    .integer("Debe ingresar un numero entero")
    .required("Ingrese un codigo postal"),
  logo: Yup.string(),
});

export const CreateBranch: FC<IPropsCreateBranch> = ({
  onClose,
  branch,
  idCompany,
}) => {
  let elementActive = useAppSelector((state) => state.branch.elementActive);
  if (branch) {
    elementActive = branch;
  }
  // VALORES INICIALES
  const initialValues: ICreateSucursal | ISucursal = branch ||
    elementActive || {
      nombre: "",
      horarioApertura: "",
      horarioCierre: "",
      esCasaMatriz: false,
      latitud: 0,
      longitud: 0,
      domicilio: {
        calle: "",
        numero: 0,
        cp: 0,
        piso: 0,
        nroDpto: 0,
        idLocalidad: 0,
      },
      idEmpresa: idCompany ?? 0,
      logo: null,
    };

  //INSTANCIAMOS SERVICIOS
  const serviceCountries = new PaisService(`${API_URL}/paises`);
  const serviceProvinces = new ProvinciaService(`${API_URL}/provincias`);
  const servicesLocalities = new LocalidadService(`${API_URL}/localidades`);
  const serviceBranches = new SucursalService(`${API_URL}/sucursales`);

  // Declaramos estados
  const [checked, setChecked] = useState(false);
  const [countries, setCountries] = useState<IPais[]>();
  const [countryId, setCountryId] = useState<number>();
  const [provinces, setProvinces] = useState<IProvincia[]>();
  const [provinceId, setPronvinceId] = useState<number>();
  const [localities, setLocalities] = useState<ILocalidad[]>();
  const [localityId, setLocalityId] = useState<number>();

  const getPaises = async () => {
    await serviceCountries.getAll().then((data) => {
      setCountries(data);
    });
  };

  const onPaisHandleChange = (idPais: number) => {
    setCountryId(idPais);
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
    setPronvinceId(idProvincia);
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
  // Manejador del evento cuando el usuario marca/desmarca el checkbox
  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const commonStyles = {
    sx: {
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
    },
  };

  return (
    <>
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
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "800px",
            minHeight: "500px",
            alignItems: "center",
            backgroundColor: "#2E64A1",
            borderRadius: ".4rem",
          }}
        >
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values) => {
              if (branch) {
                serviceBranches.put(branch.id, values);
              } else {
                serviceBranches.post(values);
              }
            }}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form>
                <Box sx={{ mb: 2 }}>
                  {elementActive ? (
                    <h3>Editar sucursal</h3>
                  ) : (
                    <h3>Crear una sucursal</h3>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  {/* Columna 1 */}
                  <Box sx={{ width: "100%" }}>
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
                    <TextField
                      name="horarioApertura"
                      placeholder="Horario apertura"
                      value={values.horarioApertura}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ color: "#FFFFFF" }}
                          >
                            <WatchIcon />
                          </InputAdornment>
                        ),
                        style: {
                          backgroundColor: "rgba(217, 217, 217, 0.35)",
                          color: "#FFFFFF",
                          height: "50px",
                          fontSize: "14px",
                          margin: "4px 0",
                        },
                      }}
                      {...commonStyles}
                    />
                    <TextField
                      name="horarioCierre"
                      value={values.horarioCierre}
                      placeholder="Horario cierre"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ color: "#FFFFFF" }}
                          >
                            <WatchIcon />
                          </InputAdornment>
                        ),
                        style: {
                          backgroundColor: "rgba(217, 217, 217, 0.35)",
                          color: "#FFFFFF",
                          height: "50px",
                          fontSize: "14px",
                          margin: "4px 0",
                        },
                      }}
                      {...commonStyles}
                    />
                    <FormControlLabel
                      sx={{
                        color: "#FFFFFF",
                        margin: "0 auto",
                      }}
                      control={
                        <Checkbox
                          sx={{
                            color: "#FFFFFF",
                            "&.Mui-checked": {
                              color: "#4CE415",
                            },
                          }}
                          checked={checked}
                          onChange={handleChange}
                        />
                      }
                      label="Habilitado"
                      value={values.esCasaMatriz}
                      name="esCasaMatriz"
                    />
                  </Box>

                  {/* Columna 2 */}
                  <Box>
                    <select
                      className={styles.selectContainer}
                      onChange={(e) =>
                        onPaisHandleChange(Number(e.target.value))
                      }
                      value={countryId || ""}
                      name="pais"
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
                      onChange={(e) =>
                        onProvinciaHandleChange(Number(e.target.value))
                      }
                      value={provinceId || ""}
                      name="provincia"
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
                      onChange={(e) => setLocalityId(Number(e.target.value))}
                      value={localityId || ""}
                      name="localidad"
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

                    <InputTextField
                      name="longitud"
                      placeholder="Longitud"
                      value={values.longitud}
                    />
                    <InputTextField
                      name="latitud"
                      placeholder="Latitud"
                      value={values.latitud}
                    />
                  </Box>

                  {/* Columna 3 */}
                  <Box>
                    <InputTextField
                      name="nombreCalle"
                      placeholder="Nombre de calle"
                      value={values.domicilio.calle}
                    />
                    <InputTextField
                      name="numeroCalle"
                      placeholder="Número de calle"
                      value={values.domicilio.numero}
                    />
                    <InputTextField
                      name="cp"
                      placeholder="Código postal"
                      value={values.domicilio.cp}
                    />
                    <InputTextField
                      name="piso"
                      placeholder="Número de piso"
                      value={values.domicilio.piso}
                    />
                    <InputTextField
                      name="dpto"
                      placeholder="Número de departamento"
                      value={values.domicilio.nroDpto}
                    />
                  </Box>
                </Box>
                <Box>
                  <InputTextField
                    name="logo"
                    placeholder="Ingrese una imagen"
                    value={values.logo}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
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
    </>
  );
};
