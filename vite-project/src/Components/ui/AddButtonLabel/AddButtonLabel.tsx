import AddButtonCategoryIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import styles from "./AddButtonLabel.module.css";

export const AddButtonLabel = () => {
  return (
    <div className={`${styles.AddButtonCategoryContainer}`}>
      <AddButtonCategoryIcon className={`${styles.AddButtonCategory}`} />
    </div>
  );
};
