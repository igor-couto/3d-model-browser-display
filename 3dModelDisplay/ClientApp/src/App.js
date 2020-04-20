import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import UploadCard from './components/UploadCard/UploadCard';


export default class App extends Component  {
  

  state = {
    isNewModelCardOpen: false
  }

   OpenNewModelCard = (shouldOpen) => {
    this.setState({isNewModelCardOpen : shouldOpen});
  };
  
  render(){
    return (
      <div className="App">
        <UploadCard isNewModelCardOpen={this.state.isNewModelCardOpen}/>
        <Header/>
        <Main OpenNewModelCard={this.OpenNewModelCard}/>
        <Footer/>
      </div>
    );
  };


}
