import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Settings from "./pages/Settings";
import ConnectWallet from "./pages/ConnectWallet";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
