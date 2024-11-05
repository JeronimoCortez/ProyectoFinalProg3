import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import styles from "./CloseButton.module.css";

interface ICloseButtonProps {
  isCompany: boolean;
  onclick: () => void;
}

export const CloseButton: FC<ICloseButtonProps> = ({ isCompany, onclick }) => {
  return (
    <>
      <div
        onClick={onclick}
        className={`${styles.containerCloseIcon} 
        ${isCompany ? styles.company : ""}`}
      >
        <CloseIcon className={styles.closeIcon} />
      </div>
    </>
  );
};
