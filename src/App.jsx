import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload. Like this?
          <br/>
          Really cool, right?
          {/* Add a table of reasons codespaces is cool */}
          <table className="table">
            <tr>
              <td>1</td>
              <td>It's in the cloud</td>
            </tr>
            <tr>
              <td>2</td>
              <td>It's fast</td>
            </tr>
            <tr>
              <td>3</td>
              <td>It's easy to use</td>
            </tr>
            <tr>
              <td>4</td>
              <td>It's free</td>
            </tr>
          </table>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
