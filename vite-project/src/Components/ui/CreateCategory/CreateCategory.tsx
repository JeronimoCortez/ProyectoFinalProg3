import {
  Box,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CheckButton } from "../CheckButton/CheckButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { FC } from "react";

interface IPropsCreateCategory {
  onClose: () => void;
}

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export const CreateCategory: FC<IPropsCreateCategory> = ({ onClose }) => {
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
          width: "42vw",
          height: "52vh",
          backgroundColor: "#8DA9C4",
          border: "6px solid #134074",
          borderRadius: "4px",
        }}
      >
        <ThemeProvider theme={theme}></ThemeProvider>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{
            display: "flex",
            color: "#134074",
            justifyContent: "center",
            marginTop: "4vh",
            marginBottom: "4vh",
          }}
        >
          Crear una categoría padre
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Ingrese una denominación"
          InputProps={{
            style: {
              width: "34vw",
              color: "#134074", // Color del texto
            },
          }}
          InputLabelProps={{
            style: {
              color: "#FFFFFF", // Color del label
              fontSize: "1.5rem", // Cambia el tamaño del label
            },
          }}
          sx={{
            display: "flex",
            margin: "3.1rem",
            borderRadius: "2px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(217, 217, 217, 0.7)",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#D9D9D9", // Color del borde
              },
              "&:hover fieldset": {
                borderColor: "#FFFFFF", // Color del borde al hacer hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFFFFF", // Color del borde cuando está enfocado
              },
            },
          }}
        ></TextField>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            marginTop: "2vh",
            gap: "20vw",
          }}
        >
          <CheckButton isCompany={false} />
          <CloseButton isCompany={false} onclick={onClose} />
        </Box>
      </Box>
    </Box>
  );
};
