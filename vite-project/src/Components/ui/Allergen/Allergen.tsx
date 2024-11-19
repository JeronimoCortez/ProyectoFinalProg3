import { Box, IconButton, Paper, Typography } from "@mui/material";
import { InfoButton } from "../InfoButton/InfoButton";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { IAlergenos } from "../../../types/dtos/alergenos/IAlergenos";
import { FC } from "react";
import useModal from "../../../hooks/useModal";
import InfoAllergen from "../InfoAllergen/InfoAllergen";
import { AlergenoService } from "../../../services/AlergenoService";
import Swal from "sweetalert2";
import { CardCreateAllergens } from "../CardCreateAllergens/CardCreateAllergens";

interface IPropsAllergen {
  allergen: IAlergenos;
}
const API_URL = import.meta.env.VITE_BASE_URL;
const Allergen: FC<IPropsAllergen> = ({ allergen }) => {
  const { isModalOpen, activeModal, closeModal, openModal } = useModal();
  const serviceAllergen = new AlergenoService(`${API_URL}/alergenos`);

  const deleteAllergen = async (idAllergen: number) => {
    const result = await Swal.fire({
      title: "¿Deseas eliminar el alergeno?",
      text: "¡Los cambios son irreversibles!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    });

    if (result.isConfirmed) {
      await serviceAllergen.delete(idAllergen);
      Swal.fire({
        title: "¡Alergeno eliminado con éxito!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          marginBottom: 2,
          width: "80vw",
          height: "65px",
          border: "1px solid black",
          borderRadius: "3rem",
          backgroundColor: "rgba(217, 217, 217, 0.2)",
          color: "#fff", // Color del texto en blanco
        }}
      >
        <Typography sx={{ marginLeft: "20vh" }} variant="body1">
          {allergen.denominacion}
        </Typography>
        <Box>
          <IconButton color="inherit" sx={{ marginRight: 1 }}>
            <InfoButton
              isCompany={false}
              onInfoClick={() => openModal("info")}
            />
          </IconButton>
          <IconButton color="inherit">
            {
              <EditButton
                onEditClick={() => openModal("editAllergen")}
                isCompany={false}
              />
            }
          </IconButton>
          <IconButton sx={{ paddingLeft: "1rem" }}>
            <DeleteButton
              isCompany={false}
              onDeleteClick={() => deleteAllergen(allergen.id)}
            />
          </IconButton>
        </Box>
      </Paper>
      {isModalOpen && activeModal === "info" && (
        <InfoAllergen allergen={allergen} onClose={closeModal} />
      )}
      {isModalOpen && activeModal === "editAllergen" && (
        <CardCreateAllergens allergen={allergen} onClose={closeModal} />
      )}
    </>
  );
};

export default Allergen;
