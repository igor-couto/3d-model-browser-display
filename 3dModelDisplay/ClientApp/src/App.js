import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import DropZone from './components/DropZone/DropZone';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      {/* <DropZone onFilesAdded={console.log}/> */}
      <Footer/>
    </div>
  );
}

export default App;
