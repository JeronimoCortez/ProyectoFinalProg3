import { Box } from "@mui/material";
import CustomHeaderWithDrawer from "../../ui/Drawer/Drawer";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import CreateProduct from "../../ui/CreateProduct/CreateProduct";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SucursalService } from "../../../services/SucursalService";
import { ICreateSucursal } from "../../../types/dtos/sucursal/ICreateSucursal";
import { Products } from "../Products/Products";
import { Allergens } from "../Allergen/Allergens";
import { AddButton } from "../../ui/AddButton/AddButton";

const API_URL = import.meta.env.VITE_BASE_URL;

const Branch = () => {
  const branchService = new SucursalService(`${API_URL}/sucursales`);
  const { idEmpresa, idSucursal, section } = useParams();
  const [branchActive, setBranchActive] = useState<ISucursal>();

  const getSucursalByEmpresaId = () => {
    branchService.getSucursalByEmpresaId(Number(idEmpresa)).then((data) => {
      setBranchActive(
        data.find((sucursal) => sucursal.id === Number(idSucursal))
      );
    });
  };

  useEffect(() => {
    getSucursalByEmpresaId();
  }, [idSucursal]);

  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh", background: "#0B2545" }}>
        <CustomHeaderWithDrawer branch={branchActive} />
        {section === "products" && <Products idBranch={branchActive?.id} />}
        {section === "allergens" && <Allergens />}
      </Box>
    </>
  );
};

export default Branch;
