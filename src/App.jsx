import "./App.css";
import Home from "./components/home/Home";
import SingleImage from "./components/singleimage/SingleImage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState("nature");
  
  return (
    <DataProvider value={{ data, setData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image/:id" element={<SingleImage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
