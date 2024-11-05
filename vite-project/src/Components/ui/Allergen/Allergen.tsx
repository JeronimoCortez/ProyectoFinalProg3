import { Box, IconButton, Paper, Typography } from "@mui/material";
import { InfoButton } from "../InfoButton/InfoButton";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { IAlergenos } from "../../../types/dtos/alergenos/IAlergenos";
import { FC } from "react";

interface IPropsAllergen {
  allergen: IAlergenos;
}

const Allergen: FC<IPropsAllergen> = ({ allergen }) => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          marginBottom: 2,
          width: "80vw",
          height: "65px",
          border: "1px solid black",
          borderRadius: "3rem",
          backgroundColor: "rgba(217, 217, 217, 0.2)",
          color: "#fff", // Color del texto en blanco
        }}
      >
        <Typography sx={{ marginLeft: "20vh" }} variant="body1">
          {allergen.denominacion}
        </Typography>
        <Box>
          <IconButton color="inherit" sx={{ marginRight: 1 }}>
            <InfoButton isCompany={false} onInfoClick={() => {}} />
          </IconButton>
          <IconButton color="inherit">
            {<EditButton onEditClick={() => {}} isCompany={false} />}
          </IconButton>
          <IconButton sx={{ paddingLeft: "1rem" }}>
            <DeleteButton
              typeDelete="deleteAllergen"
              isCompany={false}
              onDeleteClick={() => {}}
            />
          </IconButton>
        </Box>
      </Paper>
    </>
  );
};

export default Allergen;
