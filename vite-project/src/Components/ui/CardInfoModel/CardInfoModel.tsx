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
    <>
      {isCompany(type) ? (
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
              width: "300px",
              minHeight: "450px",
              backgroundColor: "#EE964B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "16px",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontFamily: "Prompt, sans-serif",
            }}
            key={type.id}
          >
            <Box
              sx={{
                marginTop: "0px",
                padding: "30px 0",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CancelButton onClick={onClose} />
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                textAlign: "center",
                color: "#134074",
                marginBottom: "48px",
                fontWeight: "bold",
              }}
            >
              {type.nombre}
            </Typography>
            <Box
              sx={{
                width: "100%",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              <Box sx={{ marginBottom: "32px" }}>
                <Typography
                  sx={{
                    marginBottom: "8px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  <strong>Nombre: </strong>
                  {type.nombre}
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "8px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  <strong>Razon Social: </strong>
                  {type.razonSocial}
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "16px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  <strong>CUIT: </strong>
                  {type.cuit}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "14px",
                  marginBottom: "16px",
                  fontWeight: "bold",
                }}
              >
                <Typography sx={{ marginRight: "8px", fontSize: "20px" }}>
                  <strong>Logo:</strong>
                </Typography>
                {type.logo ? (
                  <img src={type.logo} alt="logo" height={"100px"} />
                ) : (
                  <p>No tiene</p>
                )}
              </Box>
            </Box>

            {/* <Typography>País: {type.pais}</Typography> */}
          </Box>
        </Box>
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
              Casa matriz: {type.esCasaMatriz ? "true" : "false"}
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
              {type.logo ? (
                <img src={type.logo} alt="logo" height={"120px"} />
              ) : (
                <img
                  src="https://i.postimg.cc/FRKsWfmM/Branch-Img.png"
                  alt="logo"
                  height={"120px"}
                />
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
