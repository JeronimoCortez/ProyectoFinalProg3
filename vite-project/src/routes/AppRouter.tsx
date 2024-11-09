import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/screens/Home/Home";
import { Allergens } from "../Components/screens/Allergen/Allergens";
import { Products } from "../Components/screens/Products/Products";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allergen" element={<Allergens />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
};
