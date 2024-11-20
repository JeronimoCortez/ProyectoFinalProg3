import { Box, Paper, Typography } from "@mui/material";
import { ThumbUpButton } from "../ThumbUpButton/ThumbUpButton";
import { ThumbDownButton } from "../ThumbDownButton/ThumbDownButton";
import { InfoButton } from "../InfoButton/InfoButton";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import useModal from "../../../hooks/useModal";
import { IProductos } from "../../../types/dtos/productos/IProductos";
import { FC } from "react";
import CreateProduct from "../CreateProduct/CreateProduct";
import { ProductoService } from "../../../services/ProductoService";
import Swal from "sweetalert2";
import { InfoProduct } from "../InfoProduct/InfoProduct";

interface IPropsProduct {
  product: IProductos;
  idBranch?: number;
}

const API_URL = import.meta.env.VITE_BASE_URL;

const Product: FC<IPropsProduct> = ({ product, idBranch }) => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();
  const productService = new ProductoService(`${API_URL}/articulos`);

  const deleteProduct = async (idProduct: number) => {
    const result = await Swal.fire({
      title: "¿Deseas eliminar el producto?",
      text: "¡Los cambios son irreversibles!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    });

    if (result.isConfirmed) {
      await productService.delete(idProduct);
      Swal.fire({
        title: "¡Producto eliminado con éxito!",
        icon: "success",
      });
    }
  };
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
          {product.denominacion}
        </Typography>
        <Typography variant="body2" color="white">
          {product.precioVenta}
        </Typography>
        <Typography variant="body2" color="white">
          {product.descripcion}
        </Typography>
        <Typography variant="body2" color="white">
          {product.categoria.denominacion}
        </Typography>

        <Box>
          {product.habilitado ? <ThumbUpButton /> : <ThumbDownButton />}
        </Box>

        <Box display="flex" alignItems="center" gap={1.5}>
          <InfoButton
            isCompany={false}
            onInfoClick={() => openModal("infoProduct")}
          />
          <EditButton
            isCompany={false}
            onEditClick={() => openModal("editProduct")}
          />
          <DeleteButton
            isCompany={false}
            onDeleteClick={() => deleteProduct(product.id)}
          />
        </Box>
      </Paper>
      {isModalOpen && activeModal === "editProduct" && (
        <CreateProduct
          onClose={closeModal}
          product={product}
          idBranch={idBranch}
        />
      )}

      {isModalOpen && activeModal === "infoProduct" && (
        <InfoProduct producto={product} onClose={closeModal} />
      )}
    </>
  );
};

export default Product;
