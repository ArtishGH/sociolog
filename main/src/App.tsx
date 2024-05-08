import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { LandingPage } from "./pages/Landing/Landing.tsx";
import { FormPage } from "./pages/Form/Form.tsx";
import { Chat } from "./pages/Chat/Chat.tsx";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
