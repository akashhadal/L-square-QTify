import './App.css';
import Button from "./components/Button/Button";
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Button children={"Give Feedback"} />
      <SearchBar search={"Search a song of your choice"} />
    </div>
  );
}

export default App;
