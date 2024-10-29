import * as React from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { AddButton } from "../AddButton/AddButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { CheckButton } from "../CheckButton/CheckButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Definir el tema con la fuente Prompt
const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

// Estilos del modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 285,
  bgcolor: "#8DA9C4",
  border: "4px solid #134074",
  borderRadius: "0.4rem",
  boxShadow: 12,
  p: 4,
};

export const CardCreateAllergens = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={handleOpen}>
          <AddButton typeAdd={"Allergens"} isCompany={false} />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-title"
              fontSize={"20px"}
              sx={{ color: "#0B2545", textAlign: "center", mb: 2 }}
            >
              Crear un alérgeno
            </Typography>
            <TextField
              fullWidth
              label="Ingrese una denominación"
              variant="outlined"
              size="small"
              inputProps={{ style: { border: "none" } }}
              InputLabelProps={{
                style: {
                  color: "#134074",
                  fontSize: "16px",
                },
              }}
              sx={{
                mb: 2,
                backgroundColor: "rgba(217,217,217,.12)",
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                label="Elige una imagen"
                variant="outlined"
                inputProps={{ style: { border: "none" } }}
                InputLabelProps={{
                  style: {
                    color: "#134074",
                    fontSize: "18px",
                  },
                }}
                sx={{ backgroundColor: "rgba(217,217,217,.12)" }}
              />
              <img
                src="../../public/assets/BranchImg.png"
                alt=""
                width="60px"
                height="46px"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <CheckButton typeCheck="Allergens" isCompany={false} />
              <CloseButton typeClose="Allergens" isCompany={false} />
            </Box>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
