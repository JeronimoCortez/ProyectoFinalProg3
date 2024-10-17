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
  return (
    <>
      <Card
        sx={{
          width: 250,
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EE964B",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "#FFFFFF", fontSize: 24, textAlign: "center" }}
          >
            Nombre de la Empresa
          </Typography>
          <EditButton typeEdit="Company" className={styles.company} />
        </CardContent>
      </Card>
    </>
  );
};
