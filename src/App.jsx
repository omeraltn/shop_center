import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Pagecontainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/detail";
import Cart from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <Pagecontainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Pagecontainer>
    </BrowserRouter>
  );
}

export default App;
