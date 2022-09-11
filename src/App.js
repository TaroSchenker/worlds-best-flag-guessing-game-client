import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import { Home } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
