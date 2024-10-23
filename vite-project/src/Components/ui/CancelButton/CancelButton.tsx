import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/ClearOutlined";
import { FC } from "react";

interface ICancelButonProps {
  onClick: () => void;
}

export const CancelButton: FC<ICancelButonProps> = ({ onClick }) => {
  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        display: "flex",
        borderRadius: "50%",
        border: "3px solid #FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        cursor: "pointer",
        background: "rgba(217,217,217, 0.31)",
      }}
    >
      <CancelIcon onClick={onClick} />
    </Box>
  );
};
