import CheckIcon from "@mui/icons-material/Check";
import { FC } from "react";
import styles from "./CheckButton.module.css";

interface ICheckButtonProps {
  isCompany: boolean;
}

export const CheckButton: FC<ICheckButtonProps> = ({ isCompany }) => {
  return (
    <>
      <div
        className={`${styles.containerCheckIcon} 
        ${isCompany ? styles.company : ""}`}
      >
        <CheckIcon className={styles.checkIcon} />
      </div>
    </>
  );
};
