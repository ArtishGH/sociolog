import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { LandingPage } from "./pages/Landing/Landing.tsx";
import { FormPage } from "./pages/Form/Form.tsx";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="smaller-app">
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/">Statistics</Link>
                </li> 
                <li>
                  <Link to="/chat">Mission</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
