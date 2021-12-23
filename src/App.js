import {BrowserRouter, Routes, Route} from  "react-router-dom"
import './App.css';
import { Header } from "./Components/Header";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
