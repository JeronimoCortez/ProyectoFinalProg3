import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { DownButton } from "../DownButton/DownButton";
import { EditButton } from "../EditButton/EditButton";
import { AddButtonLabel } from "../AddButtonLabel/AddButtonLabel";

export const CategoryLabel = () => {
  return (
    <Accordion
      sx={{
        borderRadius: "3rem",
        border: "1px solid black",
        margin: "0.5rem 0",
        backgroundColor: "rgba(217, 217, 217, 0.2)",
        color: "#fff",
        marginBottom: 2,
      }}
    >
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<DownButton />}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
          minHeight: "65px",
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
          borderRadius: "3rem 3rem 0 0",
        }}
      >
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "left",
            marginLeft: "12vh",
            marginTop: 2,
            color: "#fff",
            fontWeight: "bold",
            paddingLeft: "1rem",
          }}
          variant="body1"
        >
          SERVICIO AL CLIENTE
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <IconButton>
            <EditButton isCompany={false} onEditClick={() => {}} />
          </IconButton>
          <IconButton>
            <AddButtonLabel />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderRadius: "0 0 3rem 3rem",
          padding: "1rem",
        }}
      >
        <List sx={{ marginLeft: "18vh", marginTop: "-3vw" }}>
          <ListItem sx={{ color: "#fff" }}>Atención al cliente</ListItem>
          <ListItem sx={{ color: "#fff" }}>Soporte técnico</ListItem>
          <ListItem sx={{ color: "#fff" }}>
            Gestión de quejas y reclamaciones
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
