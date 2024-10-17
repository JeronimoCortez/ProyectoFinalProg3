import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FC } from "react";
import styles from "./PlusButton.module.css";

interface AddCircleIconProps {
  typeAdd: String;
}

export const PlusButton: FC<AddCircleIconProps> = ({ typeAdd }) => {
  const handleEdit = () => {
    switch (typeAdd) {
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
      <div className={styles.containerPlusIcon}>
        <AddCircleIcon className={styles.plusIcon} onClick={handleEdit} />
      </div>
    </>
  );
};
