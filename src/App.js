import './App.css';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';
import Estudios from './components/Estudios';
import Contacto from './components/Contacto';
import './index.css';


function App() {
  
  return (
    <div className="App scroll-smooth">
     <Header />
     <SobreMi />
     <Estudios />
     <Experiencia />
     <Contacto />
    </div>
  );
}

export default App;
