import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { FC } from "react";
import styles from "./ThumbUpButton.module.css";

interface IThumbUpButtonProps {
  enabled: boolean;
  onClick: () => void;
}

export const ThumbUpButton: FC<IThumbUpButtonProps> = ({
  enabled,
  onClick,
}) => {
  return (
    <div
      className={`${styles.containerThumbUpIcon} ${
        enabled ? styles.enabled : styles.disabled
      }`}
      onClick={onClick}
    >
      <ThumbUpIcon className={styles.thumbUpIcon} />
    </div>
  );
};
