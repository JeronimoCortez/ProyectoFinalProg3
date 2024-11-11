import AddButtonCategoryIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import styles from "./AddButtonLabel.module.css";
import { FC } from "react";

interface IPropsAddButtonLabel {
  onClick: () => void;
}

export const AddButtonLabel: FC<IPropsAddButtonLabel> = ({ onClick }) => {
  return (
    <div className={`${styles.AddButtonCategoryContainer}`} onClick={onClick}>
      <AddButtonCategoryIcon className={`${styles.AddButtonCategory}`} />
    </div>
  );
};
