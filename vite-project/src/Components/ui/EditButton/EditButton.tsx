import EditIcon from "@mui/icons-material/Edit";
import { FC } from "react";
import styles from "./EditButton.module.css";

interface IEditButtonProps {
  isCompany: boolean;
  onEditClick: () => void;
}

export const EditButton: FC<IEditButtonProps> = ({
  isCompany,
  onEditClick,
}) => {
  return (
    <>
      <div
        className={`${styles.containerEditIcon} 
        ${isCompany ? styles.company : ""}`}
        onClick={onEditClick}
      >
        <EditIcon className={styles.editIcon} />
      </div>
    </>
  );
};
