import './App.css'
import { NavBar } from './components/Nav/NavBar';
import { Home } from './pages/Home/Home';
import { InfoComponent } from './components/Home/InfoComponent';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { StayWithMe } from './pages/ProjectsInfo/StayWithMe/StayWithMe';
import { KaiTechAuto } from './pages/ProjectsInfo/KaiTechAuto/KaiTechAuto';
import { useEffect } from 'react';
import { LoginPage } from './pages/Login/LoginPage';
import { ProfilePage } from './pages/Profile/ProfilePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoComponent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projects-info/staywithme" element={<StayWithMe />} />
          <Route path="/projects-info/kaitechauto" element={<KaiTechAuto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <ProfilePage />

    <footer className="text-center text-blue-200 text-xs py-8 opacity-60">
      &copy; {new Date().getFullYear()} Roman Loboda. All rights reserved.
    </footer>
    </div>
  );
}

export default App;