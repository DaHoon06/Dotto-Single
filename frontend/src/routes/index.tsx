import { Routes, Route, Navigate } from "react-router-dom";
import { MemberRouter } from "./Member";
import { DottoBoardRouter } from "./DottoBoard";
import { MainPage } from "../pages/MainPage";

export const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dotto' />} />
      <Route path='/dotto' element={<MainPage />} />
      <Route path='/dotto-board/*' element={<DottoBoardRouter />} />
      <Route path='/user/*' element={<MemberRouter />} />
    </Routes>
  );
};