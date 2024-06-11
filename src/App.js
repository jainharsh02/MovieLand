import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
// import { Routes, Route, BrowserRouter} from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Register from "./components/Register"

function App() {
  return (
    <>
      <ToastContainer stacked={true} />
      <>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Register />} />
          <Route path="/gigs" element={<Home />} />
        </Routes>
      </>
      {/* <Home /> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
