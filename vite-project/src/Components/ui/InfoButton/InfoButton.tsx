import InfoIcon from "@mui/icons-material/InfoOutlined";
import { FC } from "react";
import styles from "./InfoButton.module.css";

interface IInfoButtonProps {
  typeEdit: string;
}

export const InfoButton: FC<IInfoButtonProps> = ({ typeEdit }) => {
  const handleInfo = () => {
    switch (typeEdit) {
      case "Companies":
        console.log("Info Empresas...");
        break;
      case "Brunch":
        console.log("Info Empresas...");
        break;
      case "Allergens":
        console.log("Info Empresas...");
        break;
      case "Categories":
        console.log("Info Empresas...");
        break;
      case "Products":
        console.log("Info Empresas...");
        break;
    }
  };
  return (
    <>
      <div className={styles.containerInfoIcon}>
        <InfoIcon className={styles.infoIcon} onClick={handleInfo} />
      </div>
    </>
  );
};
