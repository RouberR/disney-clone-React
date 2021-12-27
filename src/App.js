import {BrowserRouter, Routes, Route} from  "react-router-dom"
import './App.css';
import { Detail } from "./Components/Detail";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
