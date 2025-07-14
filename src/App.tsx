import './App.css'
import { NavBar } from './components/Nav/NavBar';
import { Home } from './pages/Home/Home';



function App() {

  return (
    <div>
      <header className="bg-linear-[90deg,#000000_0%,#1a1a1a_20%,#242424_50%,#1a1a1a_80%,#000000_100%]">
        <NavBar/>
      </header>
      <main className="">
        <Home/>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}

export default App;
