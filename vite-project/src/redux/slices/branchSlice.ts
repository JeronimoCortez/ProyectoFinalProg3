import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISucursal } from "../../types/dtos/sucursal/ISucursal";
import { ICreateSucursal } from "../../types/dtos/sucursal/ICreateSucursal";

interface PayloadSetElement {
  element: ICreateSucursal | ISucursal
}

interface IInitialState{
  branches: ISucursal[],
  elementActive: null | ICreateSucursal | ISucursal,
}

const initialState: IInitialState = {
  branches: [],
  elementActive: null
}

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    setBranches(state, action){
      state.branches = action.payload;
    },
    setElementActive(state, action: PayloadAction<PayloadSetElement>) {
      state.elementActive = action.payload.element;
    },
    removeElementActive(state){
      state.elementActive = null;
    }
  }
});

export const { setBranches, setElementActive, removeElementActive } = branchSlice.actions;
export default branchSlice.reducer