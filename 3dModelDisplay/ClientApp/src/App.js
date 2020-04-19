import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <label htmlFor="input-model">Select a <code>3d model</code> file</label>
            <input className="InputModelUpload" id="input-model" type="file"></input>
        </p>
        <p>
            Select a <code>Texture</code> file
            <input className="InputTextureUpload" type="file"></input>
        </p>

      </header>
      <Display/>
      <Footer/>
    </div>
  );
}

export default App;
