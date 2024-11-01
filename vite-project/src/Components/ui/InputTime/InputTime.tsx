import { InputAdornment, TextField } from "@mui/material";
import WatchIcon from "@mui/icons-material/WatchLater";
import { FC } from "react";

interface IPropsInputTime {
  placeholder: string;
  name: string;
}

export const InputTime: FC<IPropsInputTime> = ({ placeholder, name }) => {
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ color: "#FFFFFF" }}>
            <WatchIcon />
          </InputAdornment>
        ),
        style: {
          backgroundColor: "rgba(217, 217, 217, 0.35)",
          color: "#FFFFFF",
          height: "50px",
          fontSize: "14px",
        },
      }}
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
    />
  );
};
