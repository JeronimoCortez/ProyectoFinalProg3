import InfoIcon from "@mui/icons-material/InfoOutlined";
import { FC } from "react";
import styles from "./InfoButton.module.css";
import { CardInfoModel } from "../CardInfoModel/CardInfoModel";

interface IInfoButtonProps {
  typeEdit: string;
  isCompany: boolean;
}

export const InfoButton: FC<IInfoButtonProps> = ({ typeEdit, isCompany }) => {
  const handleInfo = () => {
    // switch (typeEdit) {
    //   case "Companies":
    //     console.log("Info Empresas...");
    //     break;
    //   case "Brunch":
    //     console.log("Info Empresas...");
    //     break;
    //   case "Allergens":
    //     console.log("Info Empresas...");
    //     break;
    //   case "Categories":
    //     console.log("Info Empresas...");
    //     break;
    //   case "Products":
    //     console.log("Info Empresas...");
    //     break;
    // }
  };
  return (
    <>
      <div
        className={`${styles.containerInfoIcon} 
        ${isCompany ? styles.company : ""}`}
      >
        <InfoIcon
          className={`${styles.containerInfoIcon} 
        ${isCompany ? styles.company : ""}`}
          onClick={handleInfo}
        />
      </div>
    </>
  );
};
