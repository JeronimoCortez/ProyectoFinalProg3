import { Box, Paper, Typography, Select, MenuItem } from "@mui/material";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ThumbUpButton } from "../ThumbUpButton/ThumbUpButton";
import { AddButton } from "../AddButton/AddButton";
import { InfoButton } from "../InfoButton/InfoButton";
import { EditButton } from "../EditButton/EditButton";
import useModal from "../../../hooks/useModal";

export const Product = () => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();

  return (
    <Box sx={{ padding: 4, backgroundColor: "#0B2545", minHeight: "100vh" }}>
      {/* Select category */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Select
          defaultValue=""
          displayEmpty
          sx={{
            width: 400,
            backgroundColor: "#fff",
            color: "black",
            borderRadius: 1.25,
            paddingLeft: 2,
          }}
        >
          <MenuItem value="" disabled>
            SELECCIONE CATEGORIA
          </MenuItem>
          <MenuItem value="Promociones">Promociones</MenuItem>
        </Select>
        <AddButton
          typeAdd="Products"
          isCompany={false}
          onAddClick={() => openModal("productsModal")}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={4.2}
        sx={{
          backgroundColor: "rgba(217, 217, 217, 0.09)",
          borderRadius: 1.5,
          mb: 2,
        }}
      >
        <Typography variant="body1" color="white">
          NOMBRE
        </Typography>
        <Typography variant="body1" color="white">
          PRECIO
        </Typography>
        <Typography variant="body1" color="white">
          DESCRIPCIÓN
        </Typography>
        <Typography variant="body1" color="white">
          CATEGORÍA
        </Typography>
        <Typography variant="body1" color="white">
          HABILITADO
        </Typography>
        <Typography variant="body1" color="white">
          ACCIONES
        </Typography>
      </Box>

      {[1, 2].map((item, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 1.5,
            mb: 2,
            backgroundColor: "rgba(217, 217, 217, 0.2)",
            borderRadius: 10,
          }}
        >
          <Typography variant="body2" color="white">
            PAPAS + GASEOSA
          </Typography>
          <Typography variant="body2" color="white">
            $5000
          </Typography>
          <Typography variant="body2" color="white">
            PROMO ..
          </Typography>
          <Typography variant="body2" color="white">
            PROMOCIONES
          </Typography>

          <Box>
            <ThumbUpButton enabled={false} onClick={() => openModal} />
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <InfoButton isCompany={false} onInfoClick={() => openModal} />
            <EditButton isCompany={false} onEditClick={() => openModal} />
            <DeleteButton isCompany={false} onDeleteClick={() => openModal} />
          </Box>
        </Paper>
      ))}
    </Box>
  );
};
