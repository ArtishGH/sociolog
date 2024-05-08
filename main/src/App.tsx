import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Statistics } from "./pages/Statistics/Statistics.tsx";
import { LandingPage } from "./pages/Landing/Landing.tsx";
import { FormPage } from "./pages/Form/Form.tsx";
import { Chat } from "./pages/Chat/Chat.tsx";
import { LandingViewParents } from "./components/landingParents/LandingViewParents/index.tsx";
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
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                  <Link to="/parents">Parents</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/parents" element={<LandingViewParents />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
