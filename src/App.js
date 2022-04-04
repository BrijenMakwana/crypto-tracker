import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinGraph from "./screens/CoinGraph";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Coin" element={<CoinGraph />}>
          <Route path=":id" element={<CoinGraph />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
