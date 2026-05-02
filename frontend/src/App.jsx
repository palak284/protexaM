import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import EmailSentiment from './pages/EmailSentiment.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Header visible on all pages */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/emailsentiment" element={<EmailSentiment />} /> {/* lowercase path */}
        <Route path="*" element={<Landing />} /> {/* fallback */}
      </Routes>
    </BrowserRouter>
  );
}
