import React,  { Component } from 'react';
import styles from './Main.module.css';
import ModelDisplay from '../ModelDisplay/ModelDisplay';
import ModelList from '../ModelList/ModelList';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {} 
        this.modelSelectHandler = this.modelSelectHandler.bind(this);
    }

    modelSelectHandler = (selectedModel, selectedTexture, selectedModelName) => {
        this.setState({
            name: selectedModelName,
            model: selectedModel,
            texture: selectedTexture
        }); 
    }

    render() {
        return(
            <div className={styles.Main}>
                <ModelList openNewModelCard={this.props.openNewModelCard} modelSelectHandler={this.modelSelectHandler}/>
                <ModelDisplay model={this.state.model} texture={this.state.texture} name={this.state.name}/>
            </div>
        );
    }
}
