import { ILocalidad } from "../types/ILocalidad";
import { BackendClient } from "./BackendClient";

export class LocalidadService extends BackendClient<ILocalidad> {
  async getAllLocalidadByProvincia(idProvincia: number): Promise<ILocalidad[]>{
    const response = await fetch(`${this.baseUrl}/findByProvincia/${idProvincia}`);
    const data = await response.json();
    return data;
  }
}