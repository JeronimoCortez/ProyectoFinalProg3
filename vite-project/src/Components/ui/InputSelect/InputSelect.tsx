import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface IPropsInputSelect {
  selectedOption: string;
  onHandleChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
  title: string;
}

const commonStyles_2 = {
  sx: {
    backgroundColor: "rgba(217, 217, 217, 0.35)",
    height: "50px",
    color: "#FFFFFF",
    fontSize: "15px",
    borderRadius: "4px",
    "& .MuiSelect-icon": {
      color: "#FFFFFF", // Cambia el color del ícono (triángulo)
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.5)", // Cambia el color del borde
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFFFFF",
    },
  },
};
const InputSelect: FC<IPropsInputSelect> = ({
  selectedOption,
  onHandleChange,
  options,
  title,
}) => {
  return (
    <>
      <FormControl variant="outlined" sx={{ minWidth: 200 }}>
        <Select
          value={selectedOption}
          onChange={onHandleChange}
          displayEmpty
          {...commonStyles_2}
          IconComponent={(props) => (
            <span
              {...props}
              style={{
                color: "#FFFFFF",
                fontSize: ".8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translateY(-5px)",
                marginRight: "10px",
              }}
            >
              ▼
            </span>
          )}
        >
          <MenuItem value="" disabled>
            <Typography color="rgba(217, 217, 217, 0.35)" fontSize={"14px"}>
              {title}
            </Typography>
          </MenuItem>
          {options.map((option: string) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default InputSelect;
