import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { ThumbUpButton } from "../ThumbUpButton/ThumbUpButton";
import { InfoButton } from "../InfoButton/InfoButton";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import useModal from "../../../hooks/useModal";

const Product = () => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();
  return (
    <>
      <Paper
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
          <ThumbUpButton enabled={false} active={true} />
        </Box>

        <Box display="flex" alignItems="center" gap={1.5}>
          <InfoButton isCompany={false} onInfoClick={() => openModal} />
          <EditButton isCompany={false} onEditClick={() => openModal} />
          <DeleteButton isCompany={false} onDeleteClick={() => openModal} />
        </Box>
      </Paper>
    </>
  );
};

export default Product;
