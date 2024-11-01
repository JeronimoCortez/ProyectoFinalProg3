import { TextField } from "@mui/material";
import { FC } from "react";

interface IPropsInputTextField {
  placeholder: string;
  name: string;
}

export const InputTextField: FC<IPropsInputTextField> = ({
  placeholder,
  name,
}) => {
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgba(217, 217, 217, 0.35)",
          },
          "&:hover fieldset": {
            borderColor: "#FFFFFF",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FFFFFF",
          },
        },
      }}
      InputProps={{
        style: {
          backgroundColor: "rgba(217, 217, 217, 0.35)",
          color: "#FFFFFF",
          height: "50px",
          fontSize: "14px",
        },
      }}
      InputLabelProps={{
        style: {
          color: "rgba(217, 217, 217, 0.35)",
        },
      }}
    />
  );
};
