import { Box, Typography, Select, MenuItem } from "@mui/material";
import { AddButton } from "../../ui/AddButton/AddButton";
import useModal from "../../../hooks/useModal";
import Product from "../../ui/Product/Product";
import { ProductoService } from "../../../services/ProductoService";
import { FC, useEffect, useState } from "react";
import { IProductos } from "../../../types/dtos/productos/IProductos";
import CreateProduct from "../../ui/CreateProduct/CreateProduct";

const API_URL = import.meta.env.VITE_BASE_URL;

interface IPropsProducts {
  idBranch?: number;
}

export const Products: FC<IPropsProducts> = ({ idBranch }) => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();
  const [products, setProducts] = useState<IProductos[]>();

  const productService = new ProductoService(`${API_URL}/articulos`);

  const getArticulosBySucursalId = () => {
    if (idBranch) {
      productService.getProductosBySucursalId(idBranch).then((data) => {
        setProducts(data);
      });
    }
  };

  useEffect(() => {
    getArticulosBySucursalId();
  });

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
          onAddClick={() => openModal("createProduct")}
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

      {products?.map((product) => (
        <Product product={product} />
      ))}
      {isModalOpen && activeModal === "createProduct" && (
        <CreateProduct onClose={closeModal} />
      )}
    </Box>
  );
};
