import { FC } from "react";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import { Box, Typography } from "@mui/material";
import { CancelButton } from "../CancelButton/CancelButton";

interface IInfoProps {
  type: IEmpresa | ISucursal;
  onClose: () => void;
}

export const CardInfoModel: FC<IInfoProps> = ({ type, onClose }) => {
  const stylesTypographyBranch = {
    color: "#FFFFFF",
    fontFamily: "Prompt, sans-serif",
    fontWeight: "bold",
    margin: ".5rem 0",
  };

  const isCompany = (type: IEmpresa | ISucursal): type is IEmpresa => {
    return (type as IEmpresa).razonSocial !== undefined;
  };

  return (
    /* MODIFICAR ESTILOS Y ETIQUETAS CON MATERIAL UI */
    <>
      {isCompany(type) ? (
        <div key={type.id}>
          <p>Nombre: {type.nombre}</p>
          <p>Razon Social: {type.razonSocial}</p>
          <p>CUIT: {type.cuit}</p>
          <div>
            <p>Logo: </p>
            <img src={`type.logo`} alt="" />
          </div>
          {/* AGREGAR CAMPO PARA PAIS */}
        </div>
      ) : (
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
            key={type.id}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
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
              Nombre: {type.nombre}
            </Typography>
            <Typography
              sx={stylesTypographyBranch}
              variant="body1"
              component="p"
            >
              Empresa: {type.empresa.nombre}
            </Typography>
            <Typography
              sx={stylesTypographyBranch}
              variant="body1"
              component="p"
            >
              Domicilio: {`${type.domicilio.calle} ${type.domicilio.numero}`}
            </Typography>
            <Typography
              sx={stylesTypographyBranch}
              variant="body1"
              component="p"
            >
              Casa matriz: {type.esCasaMatriz}
            </Typography>
            <Typography
              sx={stylesTypographyBranch}
              variant="body1"
              component="p"
            >
              Horario de apertura: {type.horarioApertura}
            </Typography>
            <Typography
              sx={stylesTypographyBranch}
              variant="body1"
              component="p"
            >
              Horario de cierre: {type.horarioCierre}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={stylesTypographyBranch}
                variant="body1"
                component="p"
              >
                Logo:
              </Typography>
              <img src={type.logo} alt="" />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
