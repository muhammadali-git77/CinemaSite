import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Retrive from "./pages/retrive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" index element={<Retrive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
