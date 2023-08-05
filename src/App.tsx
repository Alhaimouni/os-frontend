import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import MainPage from "./pages/Main/MainPage";
import FavoritePage from "./pages/Favorite/FavoritePage";
import RegisterPage from "./pages/Register/RegisterPage";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  // const {user} = useContext(UserContext);
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
