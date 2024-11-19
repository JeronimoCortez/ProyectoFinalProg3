import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlergenos } from "../../types/dtos/alergenos/IAlergenos";

interface PayloadSetElement {
  element:  IAlergenos 
}

interface IInitialState{
  allergens: IAlergenos[],
  elementActive: null |  IAlergenos ,
}

const initialState: IInitialState = {
  allergens: [],
  elementActive: null
}

const allergenSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    setAllergens(state, action){
      state.allergens = action.payload;
    },
    setElementActive(state, action: PayloadAction<PayloadSetElement>) {
      state.elementActive = action.payload.element;
    },
    removeElementActive(state){
      state.elementActive = null;
    }
  }
});

export const { setAllergens, setElementActive, removeElementActive } = allergenSlice.actions;
export default allergenSlice.reducer