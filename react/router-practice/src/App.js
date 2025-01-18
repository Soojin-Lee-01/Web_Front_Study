import Header from "./components/Header";
import StudentPage from "./pages/StudentPage";

import "./style/common.scss";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<StudentPage />} />
      </Routes>
    </>
  );
}

export default App;
