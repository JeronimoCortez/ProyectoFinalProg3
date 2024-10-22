import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import styles from "./CloseButton.module.css";

interface ICloseButtonProps {
  typeClose: boolean;
  isCompany: boolean;
}

export const CloseButton: FC<ICloseButtonProps> = ({
  typeClose,
  isCompany,
}) => {
  const handleEdit = () => {
    if (typeClose === false) {
      console.log("Abierto...");
    } else {
      console.log("Close");
    }
  };
  return (
    <>
      <div
        className={`${styles.containerCloseIcon} 
        ${isCompany ? styles.company : ""}`}
      >
        <CloseIcon className={styles.closeIcon} onClick={handleEdit} />
      </div>
    </>
  );
};
