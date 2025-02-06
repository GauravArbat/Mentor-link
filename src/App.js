import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/interface.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AuthSection from './components/AuthSection';
import ApproachSection from './components/ApproachSection';
import MentorsSection from './components/MentorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <MainSection />
              <AuthSection />
              <ApproachSection />
              <MentorsSection />
              <ContactSection />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
