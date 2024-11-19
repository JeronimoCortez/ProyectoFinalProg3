import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import styles from "./ThumbUpButton.module.css";

export const ThumbUpButton = () => {
  return (
    <div className={`${styles.containerThumbUpIcon} ${styles.enabled}`}>
      <ThumbUpIcon className={styles.thumbUpIcon} />
    </div>
  );
};
