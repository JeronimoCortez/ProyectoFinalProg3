import { FC } from "react";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import { Box, Typography } from "@mui/material";
import { CancelButton } from "../CancelButton/CancelButton";

interface IInfoProps {
  type: IEmpresa | ISucursal;
}

const isCompany = (type: IEmpresa | ISucursal): type is IEmpresa => {
  return (type as IEmpresa).razonSocial !== undefined;
};

export const CardInfoModel: FC<IInfoProps> = ({ type }) => {
  return (
    /* MODIFICAR ESTILOS Y ETIQUETAS CON MATERIAL UI */
    <>
      {isCompany(type) ? (
        <Box
          sx={{
            width: "300px",
            height: "450px",
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
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              border: "2px solid red",
            }}
          >
            <CancelButton />
          </Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: "#134074",
              marginBottom: "48px",
              fontWeight: "bold",
            }}
          >
            Nombre de la Empresa
          </Typography>
          <Box
            sx={{
              width: "100%",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            <Box sx={{ marginBottom: "48px" }}>
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
                marginTop: "16px",
                marginBottom: "16px",
                fontWeight: "bold",
              }}
            >
              <Typography sx={{ marginRight: "8px", fontSize: "20px" }}>
                <strong>Logo:</strong>
              </Typography>
              <img
                src={`type.logo`}
                alt="logo"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </Box>
          </Box>

          {/* <Typography>País: {type.pais}</Typography> */}
        </Box>
      ) : (
        {
          /* MODIFICAR NOMBRES ATRIBUTOS */
        }
        // <div key={type.id}>
        //   <p>Nombre: {type.name}</p>
        //   <p>Empresa: {type.company.companyName}</p>
        //   <p>Domicilio: {type.residence}</p>
        //   <p>Casa matriz: {type.mainResidence}</p>
        //   <p>Horario de apertura: {type.open.getTime()}</p>
        //   <p>Horario de cierre: {type.close.getTime()}</p>
        //   <div>
        //     <p>Logo: </p>
        //     <img src={type.logo} alt="" />
        //   </div>
        // </div>
      )}
    </>
  );
};
