// External Dependencies
import 'tailwindcss/tailwind.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

// Relative Dependencies
import icon from '../../assets/icon.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import { Button } from './components/ui/button';

function Hello() {
  const onClick = async () => {
    try {
      const programs = window.electron.ipcRenderer.invoke(
        'get-running-programs',
      );
      console.log(programs);
    } catch (error) {
      console.log('there was an error');
    }
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="text-3xl">electron-react-boilerplate</h1>
      <Button onClick={onClick}>Test</Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
