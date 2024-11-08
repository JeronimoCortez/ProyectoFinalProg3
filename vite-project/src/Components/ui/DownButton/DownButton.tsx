import DownIcon from "@mui/icons-material/ArrowDownward";
import styles from "./DownButton.module.css";

export const DownButton = () => {
  return (
    <div className={`${styles.downButtonContainer}`}>
      <DownIcon className={`${styles.downIcon}`} />
    </div>
  );
};
