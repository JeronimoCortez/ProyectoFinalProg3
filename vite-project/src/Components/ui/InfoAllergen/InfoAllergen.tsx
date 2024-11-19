import { Box, Typography } from "@mui/material";
import { IAlergenos } from "../../../types/dtos/alergenos/IAlergenos";
import { FC } from "react";
import { CancelButton } from "../CancelButton/CancelButton";

interface IPropsInfoAllergen {
  allergen: IAlergenos;
  onClose: () => void;
}

const InfoAllergen: FC<IPropsInfoAllergen> = ({ allergen, onClose }) => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          background: "rgba(64,79,96, 0.62)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        <Box
          sx={{
            minWidth: "400px",
            minHeight: "150px",
            backgroundColor: "#8DA9C4",
            border: "1px solid #134074",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            borderRadius: ".4rem",
          }}
        >
          <Box
            sx={{
              marginTop: "0px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CancelButton onClick={onClose} />
          </Box>
          <Typography
            sx={{
              fontFamily: "Propmt, sans-serif",
              color: "#FFF",
              fontWeight: "600",
              fontSize: "24px",
            }}
          >
            {allergen.denominacion}
          </Typography>
          <img
            src={allergen.imagen?.url}
            alt={allergen.denominacion}
            width={"100px"}
            height={"auto"}
          />
        </Box>
      </Box>
    </>
  );
};

export default InfoAllergen;
