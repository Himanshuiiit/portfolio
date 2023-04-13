import "./App.css";
import NavBar from "./componets/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./componets/Banner";
import { Skills } from "./componets/Skills";
import { Portfolio } from "./componets/Portfolio";
import { Contact } from "./componets/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Portfolio />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
