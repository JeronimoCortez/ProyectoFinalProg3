import { ICreateSucursal } from "../types/dtos/sucursal/ICreateSucursal";
import { ISucursal } from "../types/dtos/sucursal/ISucursal";
import { IUpdateSucursal } from "../types/dtos/sucursal/IUpdateSucursal";
import { BackendClient } from "./BackendClient";

export class SucursalService extends BackendClient<ISucursal | ICreateSucursal | IUpdateSucursal>{
  async getSucursalByEmpresaId(idEmpresa: number): Promise<ISucursal[]> {
    const response = await fetch(`${this.baseUrl}/porEmpresa/${idEmpresa}`);
    const data = await response.json();
    return data;
  }

  async createSucursalByEmpresa(data: ICreateSucursal): Promise<ISucursal> {
    const response = await fetch(`${this.baseUrl}/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const newData = await response.json();
		return newData;
  }

  async updateSucursalByEmpresa(idSucursal: number, data: IUpdateSucursal): Promise<ISucursal> {
    const response = await fetch(`${this.baseUrl}/update/${idSucursal}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const newData = await response.json();
		return newData as ISucursal;
  }
}