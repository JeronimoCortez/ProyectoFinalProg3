import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmpresa } from "../../types/dtos/empresa/IEmpresa";

interface PayloadSetElement {
  element: IEmpresa 
}

interface IInitialState {
  companies: IEmpresa[],
  elementActive: null | IEmpresa,
}

const initialState: IInitialState = {
  companies: [],
  elementActive: null
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanies(state, action) {
      state.companies = action.payload;
    },
    setElementActive(state, action: PayloadAction<PayloadSetElement>) {
      state.elementActive = action.payload.element;
    },
    removeElementActive(state){
      state.elementActive = null;
    }
  }
});

export const { setCompanies, setElementActive, removeElementActive } = companySlice.actions;
export default companySlice.reducer;
