import React, { FC, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { createTheme, ThemeProvider, SxProps } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { ISucursal } from "../../../types/dtos/sucursal/ISucursal";
import Branch from "../../screens/Branch/Branch";

interface IPropsDrawer {
  branch?: ISucursal;
}

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
    fontSize: 20,
  },
});

const drawerWidth = 350;

const CustomHeaderWithDrawer: FC<IPropsDrawer> = ({ branch }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleNavigate = (text: string) => {
    if (text === "CATEGORIAS") {
      navigate(`/branch/${branch?.empresa.id}/${branch?.id}/categories`);
    } else if (text === "ALERGENOS") {
      navigate(`/branch/${branch?.empresa.id}/${branch?.id}/allergens`);
    } else if (text === "PRODUCTO") {
      navigate(`/branch/${branch?.empresa.id}/${branch?.id}/products`);
    }
  };

  const drawerStyles: SxProps = {
    width: drawerWidth,
    backgroundColor: "#134074",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };

  const DrawerList = (
    <Box sx={drawerStyles} role="presentation" onClick={toggleDrawer}>
      <List sx={{ marginTop: "3em" }}>
        {["CATEGORIAS", "ALERGENOS", "PRODUCTO"].map((text) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleNavigate(text)}
          >
            <ListItemButton sx={{ "&:hover": { backgroundColor: "#8DA9C4" } }}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: "1.2em",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItem
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          marginBottom: "1.4em",
        }}
      >
        <ListItemButton onClick={() => navigate("/")}>
          <HomeIcon sx={{ color: "white", marginRight: 1 }} />
          <ListItemText
            primary="HOME"
            primaryTypographyProps={{
              fontSize: "0.8em",
              color: "white",
              fontWeight: "500",
              textAlign: "center",
            }}
          />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#8DA9C4",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              onClick={toggleDrawer}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{
                color: "#0B2545",
                fontWeight: "bold",
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              {branch?.nombre}
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Drawer
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              marginTop: "64px",
              height: `calc(100% - 64px)`,
            },
          }}
        >
          {DrawerList}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default CustomHeaderWithDrawer;
