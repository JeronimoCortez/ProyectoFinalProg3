import { IProductos } from "../types/dtos/productos/IProductos";
import { BackendClient } from "./BackendClient";

export class ProductoService extends BackendClient<IProductos> {
  async getProductosBySucursalId(idSucursal: number): Promise<IProductos[]>{
    const response = await fetch(`${this.baseUrl}/porSucursal/${idSucursal}`);
    const data = await response.json();
    return data;
  }
}