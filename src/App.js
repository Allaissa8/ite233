import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Education from "./pages/Education";
import NavComponent from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent/>
          <>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/work" element={<Work/>}/>
              <Route path="/education" element={<Education/>}/>
            </Routes>
          </>
      </BrowserRouter>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <Footer/>
    </div>
  );
}

export default App;
