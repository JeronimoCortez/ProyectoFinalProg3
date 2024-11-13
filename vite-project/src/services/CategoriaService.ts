import { ICategorias } from "../types/dtos/categorias/ICategorias";
import { ICreateCategoria } from "../types/dtos/categorias/ICreateCategoria";
import { IUpdateCategoria } from "../types/dtos/categorias/IUpdateCategoria";
import { BackendClient } from "./BackendClient";

export class CategoriaService extends BackendClient<ICategorias | ICreateCategoria | IUpdateCategoria>{
  async getCategoriasBySucursal(idSucursal: number): Promise<ICategorias[]> {
    const response = await fetch(`${this.baseUrl}/allCategoriasPorSucursal/${idSucursal}`);
    const data = await response.json();
    return data;
  }

  async getSubcategoriasByCategoria(idSucursal: number, idCategoria: number): Promise<ICategorias[]> {
    const response = await fetch(`${this.baseUrl}/allSubCategoriasPorCategoriaPadre/${idSucursal}/${idCategoria}`);
    const data = await response.json();
    console.log(idSucursal, idCategoria);
    
    return data;
  }

  async crearCategoria(data: ICreateCategoria): Promise<ICategorias> {
    const response = await fetch(`${this.baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as ICategorias;
  }

  async editarCategoria(data: IUpdateCategoria, idCategoria: number): Promise<ICategorias> {
    const response = await fetch(`${this.baseUrl}/update/${idCategoria}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as ICategorias;
  }
} 
