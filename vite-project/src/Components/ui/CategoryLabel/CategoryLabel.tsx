import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { DownButton } from "../DownButton/DownButton";
import { EditButton } from "../EditButton/EditButton";
import { AddButtonLabel } from "../AddButtonLabel/AddButtonLabel";
import useModal from "../../../hooks/useModal";
import { CreateSubcategory } from "../CreateSubcategory/CreateSubcategory";
import { ICategorias } from "../../../types/dtos/categorias/ICategorias";
import { FC, useEffect, useState } from "react";
import { CategoriaService } from "../../../services/CategoriaService";
import { CreateCategory } from "../CreateCategory/CreateCategory";

interface IPropsCategoryLabel {
  category: ICategorias;
  idBranch?: number;
  idEmpresa: number;
}
const API_URL = import.meta.env.VITE_BASE_URL;
export const CategoryLabel: FC<IPropsCategoryLabel> = ({
  category,
  idBranch,
  idEmpresa,
}) => {
  const { isModalOpen, openModal, closeModal, activeModal } = useModal();
  const [subcategorias, setSubcategorias] = useState<ICategorias[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<ICategorias>();
  const categoryService = new CategoriaService(`${API_URL}/categorias`);

  const getSubcategorias = async () => {
    if (idBranch) {
      await categoryService
        .getSubcategoriasByCategoria(idBranch, category.id)
        .then((data) => {
          setSubcategorias(data);
          console.log(data);
        });
    }
  };
  useEffect(() => {
    console.log("Subcategorias actualizadas:", subcategorias);
  }, [subcategorias]);

  const handleOpenCategoriesList = () => {
    if (subcategorias.length > 0) {
      console.log("Subcategorias eliminado...");
      setSubcategorias([]);
    } else {
      console.log("Subcategorias listando...");
      if (idBranch && subcategorias.length === 0) {
        getSubcategorias();
      }
    }
  };

  return (
    <Accordion
      sx={{
        borderRadius: "3rem",
        border: "1px solid black",
        margin: "0.5rem 0",
        backgroundColor: "rgba(217, 217, 217, 0.2)",
        color: "#fff",
        marginBottom: 2,
        width: "80%",
      }}
    >
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
          minHeight: "65px",
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
          borderRadius: "3rem 3rem 0 0",
        }}
      >
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "left",
            marginLeft: "12vh",
            marginTop: 2,
            color: "#fff",
            fontWeight: "bold",
            paddingLeft: "1rem",
          }}
          variant="body1"
        >
          {category.denominacion}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <IconButton>
            <EditButton
              isCompany={false}
              onEditClick={() => openModal("editCategory")}
            />
          </IconButton>
          <IconButton>
            <AddButtonLabel onClick={() => openModal("addSubcategory")} />
          </IconButton>
          <IconButton onClick={handleOpenCategoriesList}>
            <DownButton />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderRadius: "0 0 3rem 3rem",
          padding: "1rem",
        }}
      >
        {subcategorias && (
          <List sx={{ marginLeft: "18vh", marginTop: "-3vw" }}>
            {subcategorias?.map((el) => (
              <ListItem
                sx={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>{el.denominacion}</Typography>
                <IconButton>
                  <EditButton
                    isCompany={false}
                    onEditClick={() => {
                      setSelectedSubCategory(el);
                      openModal("editSubCategory");
                    }}
                  />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
      </AccordionDetails>
      {isModalOpen && activeModal === "addSubcategory" && (
        <CreateSubcategory
          onClose={closeModal}
          idCategoriaPadre={category.id}
          idEmpresa={idEmpresa}
        />
      )}
      {isModalOpen && activeModal === "editCategory" && (
        <CreateCategory
          onClose={closeModal}
          categoria={category}
          idEmpresa={idEmpresa}
        />
      )}
      {isModalOpen && activeModal === "editSubCategory" && (
        <CreateSubcategory
          subCategory={selectedSubCategory}
          onClose={closeModal}
          idCategoriaPadre={category.id}
          idEmpresa={idEmpresa}
        />
      )}
    </Accordion>
  );
};
