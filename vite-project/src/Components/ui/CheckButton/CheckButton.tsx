import CheckIcon from "@mui/icons-material/Check";
import { FC } from "react";
import styles from "./CheckButton.module.css";

interface ICheckButtonProps {
  typeCheck: string;
  isCompany: boolean;
}

export const CheckButton: FC<ICheckButtonProps> = ({
  typeCheck,
  isCompany,
}) => {
  const handleEdit = () => {
    switch (typeCheck) {
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
    <div
      className={`${styles.containerCheckIcon} 
        ${isCompany ? styles.company : ""}
        ${typeCheck === "Allergens" ? styles.allergens : ""}`}
    >
      <CheckIcon className={styles.checkIcon} onClick={handleEdit} />
    </div>
  );
};
