import logo from './logo.svg';
import './App.css';

function App() {

    fetch('https://tdx-app-api.herokuapp.com:80')
  /* .then((response) => response.json())
  .then((data) => console.log(data)); */
    
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hey there!
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
      </header>
    </div>
  );
}

export default App;
