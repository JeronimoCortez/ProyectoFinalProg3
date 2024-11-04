import { Box, TextField } from "@mui/material";
import { FC } from "react";
import ImageIcon from "@mui/icons-material/Image";

interface IPropsInputTextField {
  placeholder: string;
  value: any;
  name: string;
  onChange: any;
  errors: any;
  helperText: any;
}

export const InputTextField: FC<IPropsInputTextField> = ({
  placeholder,
  value,
  name,
  onChange,
  errors,
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
          onChange={onChange}
          error={errors}
          name={name}
          value={value}
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
        {value === "logo" && (
          <ImageIcon sx={{ color: "#FFF", fontSize: "50px" }}></ImageIcon>
        )}
      </Box>
    </>
  );
};
