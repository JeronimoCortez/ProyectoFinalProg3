import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategorias } from "../../types/dtos/categorias/ICategorias";

interface PayloadSetElement {
  element:  ICategorias
}



interface IInitialState{
  categories: ICategorias[],
  elementActive: null |  ICategorias,
}

const initialState: IInitialState = {
  categories: [],
  elementActive: null
}

const branchSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories(state, action){
      state.categories = action.payload;
    },
    setElementActive(state, action: PayloadAction<PayloadSetElement>) {
      state.elementActive = action.payload.element;
    },
    removeElementActive(state){
      state.elementActive = null;
    }
  }
});

export const { setCategories, setElementActive, removeElementActive } = branchSlice.actions;
export default branchSlice.reducer