import { Box, Paper, Typography, Select, MenuItem } from "@mui/material";
import { DeleteButton } from "../../ui/DeleteButton/DeleteButton";
import { ThumbUpButton } from "../../ui/ThumbUpButton/ThumbUpButton";
import { AddButton } from "../../ui/AddButton/AddButton";
import { InfoButton } from "../../ui/InfoButton/InfoButton";
import { EditButton } from "../../ui/EditButton/EditButton";
import useModal from "../../../hooks/useModal";
import Product from "../../ui/Product/Product";

export const Products = () => {
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

      {[1, 2].map(() => (
        <Product />
      ))}
    </Box>
  );
};
