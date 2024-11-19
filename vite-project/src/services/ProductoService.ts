import { ICreateProducto } from "../types/dtos/productos/ICreateProducto";
import { IProductos } from "../types/dtos/productos/IProductos";
import { IUpdateProducto } from "../types/dtos/productos/IUpdateProducto";
import { BackendClient } from "./BackendClient";

export class ProductoService extends BackendClient<IProductos> {
  async getProductosBySucursalId(idSucursal: number): Promise<IProductos[]>{
    const response = await fetch(`${this.baseUrl}/porSucursal/${idSucursal}`);
    const data = await response.json();
    return data;
  }

  
  async crearProducto(data: ICreateProducto): Promise<IProductos> {
    const response = await fetch(`${this.baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as IProductos;
  }

  async editarProducto(idProducto: number, data: IUpdateProducto): Promise<IProductos> {
    const response = await fetch(`${this.baseUrl}/update/${idProducto}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as IProductos;
  }
}