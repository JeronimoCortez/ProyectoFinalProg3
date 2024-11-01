import { Box, TextField } from "@mui/material";
import { FC } from "react";
import ImageIcon from "@mui/icons-material/Image";

interface IPropsInputTextField {
  placeholder: string;
  name: string;
}

export const InputTextField: FC<IPropsInputTextField> = ({
  placeholder,
  name,
}) => {
  return (
    <>
      <Box
        sx={{
          background: "rgba(217,217,217,.35)",
          borderRadius: ".4rem",
          marginY: "4px",
          width: "100%",
          height: "52px",
        }}
      >
        <TextField
          name={name}
          placeholder={placeholder}
          sx={{
            "& input": {
              color: "#FFF",
              borderRadius: ".4rem",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFFFFF",
            },
            "& input:focus": {
              backgroundColor: "rgba(217, 217, 217, 0.35)",
            },
          }}
        />
        {name === "logo" && (
          <ImageIcon sx={{ color: "#FFF", fontSize: "50px" }}></ImageIcon>
        )}
      </Box>
    </>
  );
};
