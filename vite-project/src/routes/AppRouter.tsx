import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/screens/Home/Home";
import { Allergens } from "../Components/screens/Allergen/Allergens";
import Branch from "../Components/screens/Branch/Branch";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allergen" element={<Allergens />}></Route>
        <Route path="/branch" element={<Branch />}></Route>
      </Routes>
    </>
  );
};
