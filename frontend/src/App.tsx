import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Settings from "./pages/Settings";
import ConnectWallet from "./pages/ConnectWallet";
import PrivateRoute from "./components/PrivateRoute";
import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/connect-wallet" element={<ConnectWallet />} />

          {/* Private Routes Grouped Together */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
