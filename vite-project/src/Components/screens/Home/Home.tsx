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
import { FC, useEffect, useState } from "react";
import { CreateBranch } from "../../ui/CreateBranch/CreateBranch";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../redux/store/store";
import { EmpresaService } from "../../../services/EmpresaService";
import { SucursalService } from "../../../services/SucursalService";
import { setCompanies } from "../../../redux/slices/companySlice";
import { setBranches } from "../../../redux/slices/branchSlice";
import { CreateSubcategory } from "../../ui/CreateSubcategory/CreateSubcategory";
import { CreateCategory } from "../../ui/CreateCategory/CreateCategory";

const API_URL = import.meta.env.VITE_BASE_URL;
const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export const Home = () => {
  const companies = useAppSelector(
    (state: RootState) => state.company.companies
  );

  const branches = useAppSelector((state: RootState) => state.branch.branches);

  //Instanciamos servicios
  const serviceCompany = new EmpresaService(API_URL + "/empresas");
  const serviceBranch = new SucursalService(API_URL + "/sucursales");
  const dispatch = useAppDispatch();

  // Estado para renderizar las sucursales de la empresa seleccionada
  const [companyActive, setCompanyActive] = useState<IEmpresa>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activateCompany = (company: IEmpresa) => {
    setCompanyActive(company);
    getSucursalesPorEmpresa(company.id);
  };

  const getEmpresas = async () => {
    await serviceCompany.getAll().then((companyData) => {
      dispatch(setCompanies(companyData));
    });
  };

  const getSucursalesPorEmpresa = async (idEmpresa: number) => {
    await serviceBranch.getSucursalByEmpresaId(idEmpresa).then((sucursales) => {
      setBranches(sucursales);
    });
  };

  const openModal = (modalType: string) => {
    if (modalType === "addBranch") {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
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
              <CardCompany
                key={e.id}
                company={e}
                onOpen={() => activateCompany(e)}
              />
            ))}
          </Box>
          <AddButton isCompany={true} onAddClick={() => {}} />
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
                  onClick={() => openModal("addBranch")}
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
                {branches.map((e) => (
                  <CardBranch branch={e} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </ThemeProvider>
      <CreateSubcategory />
      <CreateCategory />
    </>
  );
};
