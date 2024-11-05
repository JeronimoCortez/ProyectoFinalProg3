import { Box, Typography, Modal, TextField } from "@mui/material";
import { AddButton } from "../AddButton/AddButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { CheckButton } from "../CheckButton/CheckButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useModal from "../../../hooks/useModal";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

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
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AddButton
          typeAdd="Allergens"
          isCompany={false}
          onAddClick={() => openModal("allergensModal")}
        />
        <Modal
          open={isModalOpen && activeModal === "allergensModal"}
          onClose={closeModal}
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
              }}
            />
            {/* Selector de imagen */}
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
              <CloseButton
                typeClose="Allergens"
                isCompany={false}
                onclick={closeModal}
              />
            </Box>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
