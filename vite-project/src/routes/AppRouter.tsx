import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/screens/Home/Home";
import { Categories } from "../Components/screens/Categories/Categories";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Categories />}></Route>
      </Routes>
    </>
  );
};
