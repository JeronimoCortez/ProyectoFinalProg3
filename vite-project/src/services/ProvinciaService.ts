import { IProvincia } from "../types/IProvincia";
import { BackendClient } from "./BackendClient";

export class ProvinciaService extends BackendClient<IProvincia> {
  async getAllProvinciaByPais(idPais: number): Promise<IProvincia[]>{
    const response = await fetch(`${this.baseUrl}/findByPais/${idPais}`);
    const data = await response.json();
    return data;
  }
}