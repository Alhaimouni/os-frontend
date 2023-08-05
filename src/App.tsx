import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import MainPage from "./pages/Main/MainPage";
import FavoritePage from "./pages/Favorite/FavoritePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorate" element={<FavoritePage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
