import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import styles from "./CloseButton.module.css";

interface ICloseButtonProps {
  typeClose: String;
  isCompany: boolean;
}

export const CloseButton: FC<ICloseButtonProps> = ({
  typeClose,
  isCompany,
}) => {
  const handleEdit = () => {
    switch (typeClose) {
      case "Company":
        console.log("Empresa");
        break;
      case "Allergens":
        console.log("Alergenos");
        break;
      case "Categories":
        console.log("Categoria");
        break;
      case "Product":
        console.log("Producto");
        break;
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
