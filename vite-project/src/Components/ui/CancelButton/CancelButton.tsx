import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/ClearOutlined";

export const CancelButton = () => {
  return (
    <Box
      sx={{
        width: "40px",
        heigth: "40px",
        display: "flex",
        borderRadius: "50%",
        border: "3px solid #FFFFFF",
        textAlign: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        cursor: "pointer",
      }}
    >
      <CancelIcon />
    </Box>
  );
};
