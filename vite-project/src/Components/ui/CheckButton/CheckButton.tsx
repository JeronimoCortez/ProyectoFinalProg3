import CheckIcon from "@mui/icons-material/Check";
import { FC } from "react";
import styles from "./CheckButton.module.css";

interface ICheckButtonProps {
  typeCheck: boolean;
  isCompany: boolean;
}

export const CheckButton: FC<ICheckButtonProps> = ({
  typeCheck,
  isCompany,
}) => {
  const handleEdit = () => {
    if (typeCheck === false) {
      console.log("Sin Check...");
    } else {
      console.log("Check");
    }
  };
  return (
    <>
      <div
        className={`${styles.containerCheckIcon} 
        ${isCompany ? styles.company : ""}`}
      >
        <CheckIcon className={styles.checkIcon} onClick={handleEdit} />
      </div>
    </>
  );
};
