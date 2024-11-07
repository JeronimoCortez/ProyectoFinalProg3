import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { FC } from "react";
import styles from "./ThumbUpButton.module.css";

interface IThumbUpButtonProps {
  enabled: boolean;
  active: boolean;
}

export const ThumbUpButton: FC<IThumbUpButtonProps> = () => {
  return (
    <div className={`${styles.containerThumbUpIcon} ${styles.enabled}`}>
      <ThumbUpIcon className={styles.thumbUpIcon} />
    </div>
  );
};
