import './App.css'
import { useState } from 'react';
import { NavBar } from './components/Nav/NavBar';
import { Home } from './pages/Home/Home';

function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'info'>('work');

  return (
    <div>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="">
        <Home activeTab={activeTab} />
      </main>
      <footer className="">
      </footer>
    </div>
  );
}

export default App;
