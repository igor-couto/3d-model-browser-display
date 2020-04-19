import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DropZone from './components/DropZone/DropZone';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <label htmlFor="input-model">Select a <code>3d model</code> file</label>
            <input className="InputModelUpload" id="input-model" type="file" multiple></input>
        </p>
        <p>
            Select a <code>Texture</code> file
            <input className="InputTextureUpload" type="file" multiple></input>
        </p>

      </header>
      <Header/>
      <DropZone onFilesAdded={console.log}/>
      <Footer/>
    </div>
  );
}

export default App;
