import { Box, Card, CardContent, Typography } from "@mui/material";

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
      </CardContent>
    </Card>
  </>;
};
