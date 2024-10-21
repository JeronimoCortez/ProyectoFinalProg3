import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FC } from "react";
import styles from "./AddButton.module.css";

interface AddCircleIconProps {
  typeAdd: String;
  isCompany: boolean;
}

export const AddButton: FC<AddCircleIconProps> = ({ typeAdd, isCompany }) => {
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
      <div
        className={`${styles.containerAddIcon} ${
          isCompany ? styles.company : ""
        }`}
      >
        <AddCircleIcon
          className={`${styles.addIcon} ${isCompany ? styles.company : ""}`}
          onClick={handleEdit}
        />
      </div>
    </>
  );
};
