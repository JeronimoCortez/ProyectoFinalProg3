import { Box } from "@mui/material";
import CustomHeaderWithDrawer from "../../ui/Drawer/Drawer";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";

const Branch = (branch: ISucursal) => {
  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh", background: "#0B2545" }}>
        <CustomHeaderWithDrawer />
      </Box>
    </>
  );
};

export default Branch;
