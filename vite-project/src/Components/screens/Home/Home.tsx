import { Box, Button } from "@mui/material";
import { CardBranch } from "../../ui/CardBranch/CardBranch";
import { CardCompany } from "../../ui/CardCompany/CardCompany";
import styles from "./Home.module.css";
import { AddButton } from "../../ui/AddButton/AddButton";
import { CardInfoModel } from "../../ui/CardInfoModel/CardInfoModel";
export const Home = () => {
  return (
    <>
      <CardInfoModel
        type={{
          id: 1,
          nombre: "sucursal",
          empresa: {
            id: 12,
            nombre: "Nombre empresa",
            razonSocial: "Razón Social de la Empresa", // Asegúrate de proporcionar un valor
            cuit: 2222222,
            logo: "../public/assets/BranchImg.png",
            pais: { nombre: "Argentina", id: 12 },
            sucursales: [],
          },
          domicilio: {
            id: 12,
            calle: "calle",
            numero: 123,
            cp: 5500,
            piso: 12,
            nroDpto: 12,
            localidad: {
              id: 12,
              nombre: "mendoza",
              provincia: {
                nombre: "Mendoza",
                pais: {
                  nombre: "Argentina",
                  id: 12,
                },
                id: 12,
              },
            },
          },
          calle: "Calle",
          latitud: 123,
          longitud: 123,
          categorias: [],
          esCasaMatriz: true,
          horarioApertura: "1212",
          eliminado: false,
          horarioCierre: "123",
          logo: "../public/assets/BranchImg.png",
        }}
      />
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundColor: "#8DA9C4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "20vh",
          position: "relative",
        }}
      >
        <Box
          className={styles.containerCardCompany}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            maxWidth: "1100px",
            margin: "5px auto",
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
        >
          <CardCompany />
          <CardCompany />
          <CardCompany />
          <CardCompany />
          <CardCompany />
        </Box>
        <AddButton typeAdd="Company" isCompany={true} />
      </Box>
      <Box
        className="branchInfoContainer"
        sx={{ backgroundColor: "#0B2545", minHeight: "80vh" }}
      >
        <Box
          sx={{
            color: "#FFFDFD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "Prompt, sans-serif",
          }}
        >
          <h1>SUCURSALES: NOMBRE DE EMPRESA</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#EE964B",
              color: "black",
              width: "120px",
              height: "55px",
              margin: "1rem",
              fontSize: "1.2rem",
              fontFamily: "Prompt, sans-serif",
            }}
          >
            Agregar
          </Button>
        </Box>
        <Box
          className="cardBranchesContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardBranch />
          <CardBranch />
          <CardBranch />
          <CardBranch />
        </Box>
      </Box>
    </>
  );
};
