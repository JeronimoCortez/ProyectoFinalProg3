import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/screens/Home/Home";
import { Allergens } from "../Components/screens/Allergens/Allergens";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<Allergens />}></Route>
      </Routes>
    </>
  );
};
