import { Card, CardContent, Typography } from "@mui/material";
import { EditButton } from "../EditButton/EditButton";
import { InfoButton } from "../InfoButton/InfoButton";

export const CardCompany = () => {
  return (
    <>
      <Card
        sx={{
          minWidth: 250,
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EE964B",
          margin: "1rem",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              color: "#FFFFFF",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            Nombre de la Empresa
          </Typography>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1.4rem" }}
          >
            <EditButton typeEdit="Company" isCompany={true} />
            <InfoButton typeEdit="Company" isCompany={true} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
