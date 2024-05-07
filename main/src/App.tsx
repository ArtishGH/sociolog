import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { LandingPage } from './pages/Landing/Landing.tsx';
import { FormPage } from './pages/Form/Form.tsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
