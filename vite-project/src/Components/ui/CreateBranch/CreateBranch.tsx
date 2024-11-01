import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import styles from "./CreateBranch.module.css";
import { InputTextField } from "../InputTextField/InputTextField";
import { InputTime } from "../InputTime/InputTime";

interface IPropsCreateBranch {
  onClose: () => void;
}

export const CreateBranch: FC<IPropsCreateBranch> = ({ onClose }) => {
  const [checked, setChecked] = useState(false);

  // Manejador del evento cuando el usuario marca/desmarca el checkbox
  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = ["Argentina", "México", "España", "Colombia", "Chile"];

  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };

  const [selectedProvince, setSelectedProvince] = useState("");

  const provinces = [
    "Río Negro",
    "Mendoza",
    "Buenos Aires",
    "Córdoba",
    "Misiones",
  ];

  const handleProvinceChange = (event: any) => {
    setSelectedProvince(event.target.value);
  };

  const commonStyles_2 = {
    sx: {
      backgroundColor: "rgba(217, 217, 217, 0.35)",
      height: "50px",
      color: "#FFFFFF",
      fontSize: "15px",
      borderRadius: "4px",
      "& .MuiSelect-icon": {
        color: "#FFFFFF", // Cambia el color del ícono (triángulo)
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.5)", // Cambia el color del borde
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
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
          height: "500px",
          backgroundColor: "#2E64A1",
          fontFamily: "Prompt, sans-serif",
        }}
      >
        <Typography
          sx={{ color: "#FFFFFF", textAlign: "center", paddingTop: "2vh" }}
          variant="h5"
        >
          Crear una Sucursal
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // Tres columnas
            gap: "1rem", // Espaciado entre columnas
            padding: "1.6rem",
          }}
        >
          {/* Columna 1 */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <InputTextField placeholder="Ingrese un nombre" name="nombre" />
            <InputTime placeholder="Horario apertura" name="horarioApertura" />

            <InputTime placeholder="Horario cierre" name="horarioCierre" />
            <FormControlLabel
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <Select
                value={selectedCountry}
                onChange={handleCountryChange}
                displayEmpty
                {...commonStyles_2}
                IconComponent={(props) => (
                  <span
                    {...props}
                    style={{
                      color: "#FFFFFF",
                      fontSize: ".8rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "translateY(-5px)",
                      marginRight: "10px",
                    }}
                  >
                    ▼
                  </span>
                )}
              >
                <MenuItem value="" disabled>
                  <Typography
                    color="rgba(217, 217, 217, 0.35)"
                    fontSize={"14px"}
                  >
                    Seleccione un país
                  </Typography>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Seleccione una Provincia */}

            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <Select
                value={selectedProvince}
                onChange={handleProvinceChange}
                displayEmpty
                {...commonStyles_2}
                IconComponent={(props) => (
                  <span
                    {...props}
                    style={{
                      color: "#FFFFFF",
                      fontSize: ".8rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "translateY(-5px)",
                      marginRight: "10px",
                    }}
                  >
                    ▼
                  </span>
                )}
              >
                <MenuItem value="" disabled>
                  <Typography
                    color="rgba(217, 217, 217, 0.35)"
                    fontSize={"14px"}
                  >
                    Seleccione una provincia
                  </Typography>
                </MenuItem>
                {provinces.map((province) => (
                  <MenuItem key={province} value={province}>
                    {province}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Seleccione una Localidad */}

            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <Select
                value={selectedProvince}
                onChange={handleProvinceChange}
                displayEmpty
                {...commonStyles_2}
                IconComponent={(props) => (
                  <span
                    {...props}
                    style={{
                      color: "#FFFFFF",
                      fontSize: ".8rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "translateY(-5px)",
                      marginRight: "10px",
                    }}
                  >
                    ▼
                  </span>
                )}
              >
                <MenuItem value="" disabled>
                  <Typography
                    color="rgba(217, 217, 217, 0.35)"
                    fontSize={"14px"}
                  >
                    Seleccione una localidad
                  </Typography>
                </MenuItem>
                {provinces.map((province) => (
                  <MenuItem key={province} value={province}>
                    {province}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Longitud */}
            <InputTextField placeholder="Longitud" name="longitud" />

            {/* Latitud */}
            <InputTextField placeholder="Latitud" name="latitud" />
          </Box>

          {/* Columna 3 */}

          {/* Nombre de la calle */}

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <InputTextField
              placeholder="Nombre de la calle"
              name="nombreCalle"
            />

            {/* Número de la calle */}

            <InputTextField
              placeholder="Número de la calle"
              name="numeroCalle"
            />

            {/* Código postal */}

            <InputTextField placeholder="Código postal" name="codigoPostal" />

            {/* Número de piso */}

            <InputTextField placeholder="Número de piso" name="numeroPiso" />

            {/* Número de departamento */}

            <InputTextField
              placeholder="Número de departamento"
              name="numeroDepartamento"
            />
          </Box>
        </Box>

        {/* IMAGEN */}

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
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(217, 217, 217, 0.35)",
              fontSize: "18px",
            }}
          >
            Elige una imagen
          </Typography>
          <Box
            sx={{
              color: "#FFFFFF",
              display: "flex",
              scale: "1.5",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageIcon></ImageIcon>
          </Box>
        </Box>

        {/* Botones Check y Close */}

        <Box className={styles.buttonsBox}>
          <Box className={styles.buttonsContainer}>
            <CheckButton typeCheck="branch" isCompany={false}></CheckButton>
            <CloseButton
              typeClose="branch"
              isCompany={false}
              onclick={onClose}
            ></CloseButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
