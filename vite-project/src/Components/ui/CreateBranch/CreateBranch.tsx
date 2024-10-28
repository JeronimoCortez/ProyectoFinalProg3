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
import { useState } from "react";
import WatchIcon from "@mui/icons-material/WatchLater";
import ImageIcon from "@mui/icons-material/Image";

export const CreateBranch = () => {
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

  return (
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
          <TextField
            placeholder="Ingrese un nombre"
            variant="outlined"
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
              sx={{
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
              }}
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
                <Typography color="rgba(217, 217, 217, 0.35)" fontSize={"14px"}>
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
              sx={{
                backgroundColor: "rgba(217, 217, 217, 0.35)",
                height: "50px",
                color: "#FFFFFF",
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
              }}
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
                <Typography color="rgba(217, 217, 217, 0.35)" fontSize={"14px"}>
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
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <Select
              value={selectedProvince}
              onChange={handleProvinceChange}
              displayEmpty
              sx={{
                backgroundColor: "rgba(217, 217, 217, 0.35)",
                height: "50px",
                color: "#FFFFFF",
                borderRadius: "4px",
                "& .MuiSelect-icon": {
                  color: "rgba(217, 217, 217, 0.35)", // Cambia el color del ícono (triángulo)
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.5)", // Cambia el color del borde
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(217, 217, 217, 0.35)",
                },
              }}
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
                <Typography color="rgba(217, 217, 217, 0.35)" fontSize={"14px"}>
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

          <TextField
            placeholder="Longitud"
            variant="outlined"
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
            placeholder="Latitud"
            variant="outlined"
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

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            placeholder="Nombre de la calle"
            variant="outlined"
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
            placeholder="Número de la calle"
            variant="outlined"
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
            placeholder="Código postal"
            variant="outlined"
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
            placeholder="Número de piso"
            variant="outlined"
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
            placeholder="Número de departamento"
            variant="outlined"
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
    </Box>
  );
};
