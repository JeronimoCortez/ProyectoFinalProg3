import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import styles from "./DeleteButton.module.css";

interface IDeleteButtonProps {
  isCompany: boolean;
  onDeleteClick: () => void;
}

export const DeleteButton: FC<IDeleteButtonProps> = ({
  isCompany,
  onDeleteClick,
}) => {
  return (
    <>
      <div
        className={`${styles.containerDeleteIcon}
        ${isCompany ? styles.company : ""}`}
        onClick={onDeleteClick}
      >
        <DeleteIcon
          className={`${styles.deleteIcon} 
        ${isCompany ? styles.company : ""}`}
        />
      </div>
    </>
  );
};
