import { ICreateSucursal } from "../types/dtos/sucursal/ICreateSucursal";
import { ISucursal } from "../types/dtos/sucursal/ISucursal";
import { IUpdateSucursal } from "../types/dtos/sucursal/IUpdateSucursal";
import { BackendClient } from "./BackendClient";

export class SucursalService extends BackendClient<ISucursal | ICreateSucursal | IUpdateSucursal>{
  async getSucursalByEmpresaId(idEmpresa: number): Promise<ISucursal[] | null> {
    const response = await fetch(`${this.baseUrl}/porEmpresa/${idEmpresa}`);
    const data = await response.json();
    const sucursales: ISucursal[] = [];
    data.map((el: ISucursal) => {
      if(el.empresa.id === idEmpresa){
        sucursales.push(el);
      }
    })
    if(sucursales.length > 0){
      return sucursales;
    } else {
      return null
    }
  }
}