import EditIcon from "@mui/icons-material/Edit";
import { FC } from "react";
import styles from "./EditButton.module.css";

interface IEditButtonProps {
  typeEdit: string;
  isCompany: boolean;
}

export const EditButton: FC<IEditButtonProps> = ({ typeEdit, isCompany }) => {
  const handleEdit = () => {
    switch (typeEdit) {
      case "Company":
        console.log("Empresa");
        break;
      case "Brunch":
        console.log("Sucursal");
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
        className={`${styles.containerEditIcon} 
        ${isCompany ? styles.company : ""}`}
      >
        <EditIcon className={styles.editIcon} onClick={handleEdit} />
      </div>
    </>
  );
};
