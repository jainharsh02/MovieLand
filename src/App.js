import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
// import Register from "./components/Register"

function App() {
  return (
    <>
      <ToastContainer stacked={true} />
      <Home />
      {/* <Register /> */}
    </>
  );
}

export default App;
