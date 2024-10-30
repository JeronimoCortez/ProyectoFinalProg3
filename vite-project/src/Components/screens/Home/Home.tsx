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
import { useEffect, useState } from "react";
import { EmpresaService } from "../../../services/EmpresaService";
import { useAppDispatch } from "../../../hooks/redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { setCompanies } from "../../../redux/slices/companySlice";

// const API_URL = import.meta.env.BASE_URL;
const API_URL = "http://190.221.207.224:8090/empresas";
const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export const Home = () => {
  const companies = useSelector((state: RootState) => state.company.companies);

  //Instanciamos servicio empresa
  const serviceCompany = new EmpresaService(API_URL);
  const dispatch = useAppDispatch();

  // Estado para renderizar las sucursales de la empresa seleccionada
  const [companyActive, setCompanyActive] = useState<IEmpresa>();

  const activateCompany = (company: IEmpresa) => {
    setCompanyActive(company);
  };

  const getEmpresas = async () => {
    await serviceCompany.getAll().then((companyData) => {
      dispatch(setCompanies(companyData));
    });
  };

  useEffect(() => {
    console.log(API_URL);
    getEmpresas();
  }, []);

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
            {companies?.map((e) => (
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
