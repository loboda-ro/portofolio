import './App.css'
import { NavBar } from './components/Nav/NavBar';
import { Home } from './components/Home/Home';


function App() {

  return (
    <div>
      <header className="ml-12 mr-12 mt-8">
        <NavBar/>
      </header>
      <main className="ml-12 mr-12">
        <Home/>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}

export default App;
