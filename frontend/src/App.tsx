import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Settings from "./pages/Settings";
import ConnectWallet from "./pages/ConnectWallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
