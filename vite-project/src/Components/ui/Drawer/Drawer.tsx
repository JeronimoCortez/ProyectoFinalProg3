import React from "react";
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

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
    fontSize: 20,
  },
});

const drawerWidth = 350;

const CustomHeaderWithDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
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
    <Box sx={drawerStyles} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ marginTop: "3em" }}>
        {["CATEGORIAS", "ALERGENOS", "PRODUCTO"].map((text) => (
          <ListItem key={text} disablePadding>
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
        <ListItemButton>
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
              onClick={toggleDrawer(true)}
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
              NOMBRE DE LA EMPRESA - SUCURSAL
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Drawer
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
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
