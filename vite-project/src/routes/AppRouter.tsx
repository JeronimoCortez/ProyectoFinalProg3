import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/screens/Home/Home";
import Branch from "../Components/screens/Branch/Branch";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/branch/:idEmpresa/:idSucursal/:section?"
          element={<Branch />}
        ></Route>
      </Routes>
    </>
  );
};
