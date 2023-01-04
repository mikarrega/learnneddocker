import dockerwhale from './dockerwhale.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dockerwhale} className="App-logo" alt="logo" />
        <p>
          Aprendi usar docker 😍
        </p>
        <p>Consulte minha imagem no 
        <a
          className="App-link"
          href="https://hub.docker.com/r/mikarrega/learneddocker"
          target="_blank"
          rel="noopener noreferrer"
        > dockerhub
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
