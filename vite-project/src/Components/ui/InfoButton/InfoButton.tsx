import InfoIcon from "@mui/icons-material/InfoOutlined";
import { FC } from "react";
import styles from "./InfoButton.module.css";

interface IInfoButtonProps {
  typeEdit: string;
  isCompany: boolean;
  onInfoClick: () => void;
}

export const InfoButton: FC<IInfoButtonProps> = ({
  typeEdit,
  isCompany,
  onInfoClick,
}) => {
  return (
    <>
      <div
        className={`${styles.containerInfoIcon} 
        ${isCompany ? styles.company : ""}`}
        onClick={onInfoClick}
      >
        <InfoIcon
          className={`${styles.infoIcon} 
        ${isCompany ? styles.company : ""}`}
        />
      </div>
    </>
  );
};
