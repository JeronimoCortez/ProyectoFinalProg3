import { Box, Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import styles from "../EditButton/EditButton.module.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const CardCompany = () => {
  return;
  <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Nombre de la Empresa
        </Typography>
        <EditButton typeEdit="Company" className={styles.company} />
      </CardContent>
    </Card>
  </>;
};
