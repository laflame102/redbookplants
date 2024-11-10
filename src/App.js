import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import Plants from "./pages/Plants";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
