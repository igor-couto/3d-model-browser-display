import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import UploadCard from './components/UploadCard/UploadCard';

export default class App extends Component  {
  
  constructor(props){
    super(props);
    
    this.state = {
      isNewModelCardOpen: false
    }

    this.openNewModelCard = this.openNewModelCard.bind(this);
  }


  openNewModelCard (shouldOpen) {
    this.setState({isNewModelCardOpen : shouldOpen});
  } 

  
  render(){
    return (
      <div className="App">
        <UploadCard 
          isNewModelCardOpen={this.state.isNewModelCardOpen} 
          openNewModelCard={this.openNewModelCard}
        />
        <Header/>
        <Main openNewModelCard={this.openNewModelCard}/>
        <Footer/>
      </div>
    );
  };
}
