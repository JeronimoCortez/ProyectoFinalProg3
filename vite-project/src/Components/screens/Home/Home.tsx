import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { CardBranch } from "../../ui/CardBranch/CardBranch";
import { CardCompany } from "../../ui/CardCompany/CardCompany";
import styles from "./Home.module.css";
import { AddButton } from "../../ui/AddButton/AddButton";
import { IEmpresa } from "../../../types/dtos/empresa/IEmpresa";
import { FC, useState } from "react";

interface IHomeProps {
  companies: IEmpresa[];
}

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});
export const Home: FC<IHomeProps> = ({ companies }) => {
  const [companyActive, setCompanyActive] = useState<IEmpresa>();

  const activateCompany = (company: IEmpresa) => {
    setCompanyActive(company);
  };

  /* Creamos una lista de objetos empresa, renderizado momentaneo hasta que conectemos con la api */
  const comp: IEmpresa[] = [
    {
      id: 12,
      nombre: "Nombre empresa",
      razonSocial: "Razón Social de la Empresa",
      cuit: 2222222,
      logo: "../../../public/assets/BranchImg.png",
      pais: { nombre: "Argentina", id: 12 },
      sucursales: [
        {
          id: 1,
          nombre: "sucursal",
          empresa: {
            id: 12,
            nombre: "Nombre empresa",
            razonSocial: "Razón Social de la Empresa",
            cuit: 2222222,
            logo: "../../../public/assets/BranchImg.png",
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
        },
      ],
    },
    {
      id: 12,
      nombre: "Nombre empresa",
      razonSocial: "Razón Social de la Empresa",
      cuit: 2222222,
      logo: "",
      pais: { nombre: "Argentina", id: 12 },
      sucursales: [],
    },
  ];

  companies = comp;
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Seccion empresas */}
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            backgroundColor: "#8DA9C4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "20vh",
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
            {companies.map((e) => (
              <CardCompany company={e} onOpen={activateCompany} />
            ))}
          </Box>
          <AddButton typeAdd="Company" isCompany={true} />
        </Box>

        {/* Seccion sucursales */}
        <Box
          className="branchInfoContainer"
          sx={{ backgroundColor: "#0B2545", minHeight: "80vh" }}
        >
          {companyActive && (
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
                <h1>SUCURSALES: {companyActive.nombre}</h1>
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
                  display: "grid",
                  maxWidth: "1200px",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1rem",
                  margin: "0 auto",
                }}
              >
                {companyActive &&
                  companyActive.sucursales?.map((e) => (
                    <CardBranch branch={e} />
                  ))}
              </Box>
            </Box>
          )}
        </Box>
      </ThemeProvider>
    </>
  );
};
