// import { Navbar } from "react-bootstrap";
import "./App.css";
// import Footerm from "./Footerm/Footerm";
import MainRoutes from "./Routes/MainRoutes";
import  Navbar  from "./util/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <MainRoutes />  
    </div>
  );
}

export default App;
