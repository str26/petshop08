import { Route, Routes } from "react-router-dom";
import { Authentication } from "../../screens/Auth/Authentication";
import { Home } from "../../screens/Home/Home";

export const Rutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<Home/>} /> */}

      <Route path="/Ingresar" element={<Authentication />} />
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};
