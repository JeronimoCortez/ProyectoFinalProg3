import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/screens/Home/Home";
import { Allergens } from "../Components/screens/Allergens";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allergen" element={<Allergens />}></Route>
      </Routes>
    </>
  );
};
