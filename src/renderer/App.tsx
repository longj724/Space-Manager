// External Dependencies
import 'tailwindcss/tailwind.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

// Relative Dependencies
import './App.css';
import 'tailwindcss/tailwind.css';
import Main from './Main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
