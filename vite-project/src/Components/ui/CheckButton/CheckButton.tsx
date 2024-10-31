import CheckIcon from "@mui/icons-material/Check";
import { FC } from "react";
import styles from "./CheckButton.module.css";
import { Button } from "@mui/material";

interface ICheckButtonProps {
  typeCheck: string;
  isCompany: boolean;
}

export const CheckButton: FC<ICheckButtonProps> = ({
  typeCheck,
  isCompany,
}) => {
  return (
    <>
      <button
        type="submit"
        className={`${styles.containerCheckIcon} 
        ${isCompany ? styles.company : ""}`}
      >
        <CheckIcon className={styles.checkIcon} />
      </button>
    </>
  );
};
