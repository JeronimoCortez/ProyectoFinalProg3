import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FC } from "react";
import styles from "./AddButton.module.css";

interface AddCircleIconProps {
  isCompany: boolean;
  onAddClick: () => void;
}

export const AddButton: FC<AddCircleIconProps> = ({
  isCompany,
  onAddClick,
}) => {
  return (
    <>
      <div
        className={`${styles.containerAddIcon} ${
          isCompany ? styles.company : ""
        }`}
      >
        <AddCircleIcon
          className={`${styles.addIcon} ${isCompany ? styles.company : ""}`}
          onClick={onAddClick}
        />
      </div>
    </>
  );
};
