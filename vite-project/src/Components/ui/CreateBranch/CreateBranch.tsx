import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import WatchIcon from "@mui/icons-material/WatchLater";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { InputTextField } from "../InputTextField/InputTextField";
import InputSelect from "../InputSelect/InputSelect";
import { IPais } from "../../../types/IPais";
import { IProvincia } from "../../../types/IProvincia";
import { ILocalidad } from "../../../types/ILocalidad";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";

interface IPropsCreateBranch {
  onClose: () => void;
  branch: ISucursal;
  idCompany: number;
}

export const CreateBranch: FC<IPropsCreateBranch> = ({ onClose }) => {
  const [checked, setChecked] = useState(false);

  // Manejador del evento cuando el usuario marca/desmarca el checkbox
  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const countries: IPais[] = [
    { id: 0, nombre: "Argentina" },
    { id: 1, nombre: "Brasil" },
  ];

  const provinces: IProvincia[] = [
    { id: 0, nombre: "Mendoza", pais: { id: 0, nombre: "Argentina" } },
    { id: 1, nombre: "Rio negro", pais: { id: 0, nombre: "Argentina" } },
  ];

  const localidades: ILocalidad[] = [
    { id: 0, nombre: "Mendoza", provincia: provinces[0] },
    { id: 1, nombre: "Guaymallen", provincia: provinces[0] },
  ];

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
          <Typography
            variant="h2"
            component="h6"
            sx={{
              fontFamily: "Prompt, sans-serif",
              fontSize: "32px",
              color: "#FFF",
            }}
          >
            Crear sucursal
          </Typography>
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
            <Box
              sx={{
                width: "100%",
              }}
            >
              <InputTextField placeholder="Ingrese su nombre" name="nombre" />
              <TextField
                placeholder="Horario apertura"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "#FFFFFF" }}>
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
                placeholder="Horario cierre"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "#FFFFFF" }}>
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
              />
            </Box>

            {/* Columna 2 */}
            <Box>
              <InputSelect
                options={countries}
                placeholder="Seleccione un pais"
                name="pais"
              />
              <InputSelect
                options={provinces}
                placeholder="Seleccione una provincia"
                name="provincia"
              />

              <InputSelect
                options={localidades}
                placeholder="Seleccione una localidad"
                name="localidad"
              />

              <InputTextField placeholder="Longitud" name="Longitud" />
              <InputTextField placeholder="Latitud" name="Latitud" />
            </Box>
            {/* Columna 3 */}
            <Box>
              <InputTextField
                placeholder="Nombre de calle"
                name="domicilio.calle"
              />
              <InputTextField
                placeholder="Numero de calle"
                name="domicilio.numero"
              />
              <InputTextField placeholder="Codigo postal" name="domicilio.cp" />
              <InputTextField
                placeholder="Numero de piso"
                name="domicilio.piso"
              />
              <InputTextField
                placeholder="Numero de departamento"
                name="domicilio.nroDpto"
              />
            </Box>
          </Box>
          <Box>
            <InputTextField placeholder="Ingrese una imagen" name="logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <CheckButton isCompany={false} />
            <CloseButton isCompany={false} onclick={onClose} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
