import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CancelButton } from "../CancelButton/CancelButton";
import { ThumbUpButton } from "../ThumbUpButton/ThumbUpButton";
import { IProductos } from "../../../types/dtos/productos/IProductos";

interface IInfoProps {
  producto: IProductos;
  onClose: () => void;
}

export const InfoProduct: FC<IInfoProps> = ({ producto, onClose }) => {
  const stylesTypographyBranch = {
    color: "#FFFFFF",
    fontFamily: "Prompt, sans-serif",
    fontWeight: "bold",
    margin: ".5rem 0",
  };

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
          minWidth: "350px",
          minHeight: "500px",
          background: "#2E64A1",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CancelButton onClick={onClose} />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            margin: "2rem 0",
            color: "#FFFFFF",
            fontWeight: "Bold",
            fontSize: "24px",
          }}
          variant="h6"
          component="h6"
        >
          Denominación: {producto.denominacion}
        </Typography>
        <Typography sx={stylesTypographyBranch} variant="body1" component="p">
          ID: {producto.id}
        </Typography>
        <Typography sx={stylesTypographyBranch} variant="body1" component="p">
          Código: {producto.codigo}
        </Typography>
        <Typography sx={stylesTypographyBranch} variant="body1" component="p">
          Precio de Venta: ${producto.precioVenta}
        </Typography>
        <Typography sx={stylesTypographyBranch} variant="body1" component="p">
          Descripción: {producto.descripcion}
        </Typography>
        <Typography sx={stylesTypographyBranch} variant="body1" component="p">
          Categoría: {producto.categoria.denominacion}
        </Typography>
        <Typography sx={stylesTypographyBranch} variant="body1" component="p">
          Eliminado: {producto.eliminado ? "Sí" : "No"}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={stylesTypographyBranch} variant="body1" component="p">
            Habilitado:
          </Typography>
          {producto.habilitado ? (
            <Typography
              sx={stylesTypographyBranch}
              variant="body1"
              component="p"
            >
              True
            </Typography>
          ) : (
            <Typography
              sx={stylesTypographyBranch}
              variant="body1"
              component="p"
            >
              False
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
