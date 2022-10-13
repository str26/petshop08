import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./app/components/Footer";
import { Header } from "./app/components/Header";
import { Rutes } from "./app/utlilities/routes/Rutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Rutes />

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
