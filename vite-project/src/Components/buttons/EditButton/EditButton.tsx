import EditIcon from "@mui/icons-material/Edit";
import { FC } from "react";

interface IEditButtonProps {
  typeEdit: string;
}

export const EditButton: FC<IEditButtonProps> = ({ typeEdit }) => {
  const handleEdit = () => {
    if (typeEdit === "Empresas") {
      console.log("Editando Empresas...");
    } else if (typeEdit === "Sucursales") {
      console.log("Editando Sucursales...");
    }
  };
  return <EditIcon onClick={handleEdit} />;
};
