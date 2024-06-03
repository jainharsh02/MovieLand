// import Home from "./components/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

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
