import { FC } from "react";
import BranchDataIcon from "@mui/icons-material/ApartmentRounded";
import styles from "./BranchDataButton.module.css";

interface IBrachDataButtonProps {
  onClick: () => void;
}

export const BranchDataButton: FC<IBrachDataButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.containerBranchDataIcon}>
      <BranchDataIcon className={styles.branchDataIcon} onClick={onClick} />
    </div>
  );
};
