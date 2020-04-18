import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Select a <code>3d model</code> file and its <code>texture</code> to upload
        </p>

        <input className="InputModelUpload" id="input-model" type="file"></input>
        <input className="InputTextureUpload" type="file"></input>

        <a
          className="App-link"
            href="https://github.com/igor-couto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </header>
    </div>
  );
}

export default App;
