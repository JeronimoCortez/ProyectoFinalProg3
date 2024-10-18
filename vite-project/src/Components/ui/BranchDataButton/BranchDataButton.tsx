import { FC } from "react";
import BranchDataIcon from "@mui/icons-material/ApartmentRounded";
import styles from "./BranchDataButton.module.css";

interface IBrachDataButtonProps {
  typeEdit: string;
}

export const BranchDataButton: FC<IBrachDataButtonProps> = ({ typeEdit }) => {
  const handleData = () => {
    if (typeEdit === "Companies") {
      console.log("Companies");
    }
  };
  return (
    <div className={styles.containerBranchDataIcon}>
      <BranchDataIcon className={styles.branchDataIcon} onClick={handleData} />
    </div>
  );
};
