import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import WatchIcon from "@mui/icons-material/WatchLater";
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
import { ICreateSucursal } from "../../../types/dtos/sucursal/ICreateSucursal";
import { useAppSelector } from "../../../hooks/redux";
import { Form, Formik } from "formik";

interface IPropsCreateBranch {
  onClose: () => void;
  branch?: ISucursal;
  idCompany: number;
}

const API_URL = import.meta.env.VITE_BASE_URL;

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
  logo: Yup.string().url("Debe ser una url valida"),
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

  // Manejador del evento cuando el usuario marca/desmarca el checkbox
  const handleCheckedChange = (event: any) => {
    setChecked(event.target.checked);
  };
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
          padding: "1rem",
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
                    value={values.nombre}
                    name="nombre"
                    placeholder="Ingrese un nombre"
                    variant="outlined"
                    onChange={handleChange}
                    error={touched.nombre && Boolean(errors.nombre)}
                    helperText={touched && errors.nombre}
                    sx={{
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
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  />
                  <TextField
                    value={values.horarioApertura}
                    name="horarioApertura"
                    placeholder="Horario apertura"
                    variant="outlined"
                    onChange={handleChange}
                    error={
                      touched.horarioApertura && Boolean(errors.horarioApertura)
                    }
                    helperText={touched && errors.horarioApertura}
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
                      },
                    }}
                    sx={{
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
                    }}
                  />
                  <TextField
                    value={values.horarioCierre}
                    name="horarioCierre"
                    placeholder="Horario cierre"
                    onChange={handleChange}
                    error={
                      touched.horarioCierre && Boolean(errors.horarioCierre)
                    }
                    helperText={touched && errors.horarioCierre}
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
                      },
                    }}
                    sx={{
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
                    }}
                  />
                  <FormControlLabel
                    value={values.esCasaMatriz}
                    name="esCasaMatriz"
                    checked={checked}
                    onChange={handleCheckedChange}
                    // error={touched.esCasaMatriz && Boolean(errors.esCasaMatriz)}
                    // helperText={touched && errors.esCasaMatriz}
                    sx={{
                      color: "#FFFFFF",
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
                  />
                </Box>

                {/* Columna 2 */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <select
                    className={styles.selectContainer}
                    onChange={(e) => onPaisHandleChange(Number(e.target.value))}
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

                  {/* Longitud */}

                  <TextField
                    value={values.longitud}
                    name="longitud"
                    placeholder="Longitud"
                    variant="outlined"
                    onChange={handleChange}
                    error={touched.longitud && Boolean(errors.longitud)}
                    helperText={touched && errors.longitud}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          color: "#FFFFFF",
                          borderColor: "rgba(217, 217, 217, 0.35)",
                        },
                        "&:hover fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  ></TextField>

                  {/* Latitud */}

                  <TextField
                    value={values.latitud}
                    name="latitud"
                    placeholder="Latitud"
                    variant="outlined"
                    onChange={handleChange}
                    error={touched.latitud && Boolean(errors.latitud)}
                    helperText={touched && errors.latitud}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          color: "#FFFFFF",
                          borderColor: "rgba(217, 217, 217, 0.35)",
                        },
                        "&:hover fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  ></TextField>
                </Box>

                {/* Columna 3 */}

                {/* Nombre de la calle */}

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <TextField
                    value={values.domicilio.calle}
                    name="domicilio.calle"
                    placeholder="Nombre de la calle"
                    variant="outlined"
                    onChange={handleChange}
                    error={
                      touched.domicilio?.calle &&
                      Boolean(errors.domicilio?.calle)
                    }
                    helperText={touched && errors.domicilio?.calle}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          color: "#FFFFFF",
                          borderColor: "rgba(217, 217, 217, 0.35)",
                        },
                        "&:hover fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  ></TextField>

                  {/* Número de la calle */}

                  <TextField
                    value={values.domicilio.numero}
                    name="domicilio.numero"
                    placeholder="Número de la calle"
                    variant="outlined"
                    onChange={handleChange}
                    error={
                      touched.domicilio?.numero &&
                      Boolean(errors.domicilio?.numero)
                    }
                    helperText={touched && errors.domicilio?.numero}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          color: "#FFFFFF",
                          borderColor: "rgba(217, 217, 217, 0.35)",
                        },
                        "&:hover fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  ></TextField>

                  {/* Código postal */}

                  <TextField
                    value={values.domicilio.cp}
                    name="domicilio.cp"
                    placeholder="Código postal"
                    variant="outlined"
                    onChange={handleChange}
                    error={
                      touched.domicilio?.cp && Boolean(errors.domicilio?.cp)
                    }
                    helperText={touched && errors.domicilio?.cp}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          color: "#FFFFFF",
                          borderColor: "rgba(217, 217, 217, 0.35)",
                        },
                        "&:hover fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  ></TextField>

                  {/* Número de piso */}

                  <TextField
                    value={values.domicilio.piso}
                    name="domicilio.piso"
                    placeholder="Número de piso"
                    variant="outlined"
                    onChange={handleChange}
                    error={
                      touched.domicilio?.piso && Boolean(errors.domicilio?.piso)
                    }
                    helperText={touched && errors.domicilio?.piso}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          color: "#FFFFFF",
                          borderColor: "rgba(217, 217, 217, 0.35)",
                        },
                        "&:hover fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  ></TextField>

                  {/* Número de departamento */}

                  <TextField
                    value={values.domicilio.nroDpto}
                    name="domicilio.nroDpto"
                    placeholder="Número de departamento"
                    variant="outlined"
                    onChange={handleChange}
                    error={
                      touched.domicilio?.nroDpto &&
                      Boolean(errors.domicilio?.nroDpto)
                    }
                    helperText={touched && errors.domicilio?.nroDpto}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          color: "#FFFFFF",
                          borderColor: "rgba(217, 217, 217, 0.35)",
                        },
                        "&:hover fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          color: "#FFFFFF",
                          borderColor: "#FFFFFF",
                        },
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(217, 217, 217, 0.35)",
                        color: "#FFFFFF",
                        height: "50px",
                        fontSize: "14px",
                      },
                    }}
                  ></TextField>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "16vh",
                  width: "400px",
                  height: "55px",
                  backgroundColor: "rgba(217, 217, 217, 0.35)",
                  borderRadius: "4px",
                  border: "2px solid transparent", // Borde inicial transparente
                  "&:hover": {
                    border: "2px solid white", // Borde blanco al hacer hover
                  },
                  cursor: "pointer",
                  marginLeft: "32vh",
                }}
              >
                <TextField
                  value={values.logo}
                  name="logo"
                  placeholder="Elige una imagen"
                  variant="outlined"
                  onChange={handleChange}
                  error={touched.logo && Boolean(errors.logo)}
                  helperText={touched && errors.logo}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        color: "#FFFFFF",
                        borderColor: "rgba(217, 217, 217, 0.35)",
                      },
                      "&:hover fieldset": {
                        color: "#FFFFFF",
                        borderColor: "#FFFFFF",
                      },
                      "&.Mui-focused fieldset": {
                        color: "#FFFFFF",
                        borderColor: "#FFFFFF",
                      },
                    },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: "rgba(217, 217, 217, 0.35)",
                      color: "#FFFFFF",
                      height: "50px",
                      fontSize: "14px",
                    },
                  }}
                ></TextField>
                <ImageIcon sx={{ color: "#FFF", fontSize: "32px" }}></ImageIcon>
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
