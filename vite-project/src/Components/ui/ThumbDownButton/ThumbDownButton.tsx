import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import styles from "./ThumbDownButton.module.css";

export const ThumbDownButton = () => {
  return (
    <div className={`${styles.containerThumbDownIcon} ${styles.enabled}`}>
      <ThumbDownIcon className={styles.ThumbDownIcon} />
    </div>
  );
};
