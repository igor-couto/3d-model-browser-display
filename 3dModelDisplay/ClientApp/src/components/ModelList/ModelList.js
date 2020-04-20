import React, { Component }  from 'react';
import styles from './ModelList.module.css';

export default class ModelList extends Component {
    
    state = {
        models: []
    }

    componentDidMount(){
        this.loadModels();
    }

    loadModels = async () => {
        const response = await fetch('https://localhost:44355/Model/GetAll', {method: 'GET'});
        console.log(response);
        const responseModels = await response.json();

        console.log(responseModels);

        this.setState({
            models: responseModels
        });

        console.log(this.state);
    };
    
    render(){
        return(
            <div className={styles.leftContainer}>
                <div className={styles.list}>
                    {this.state.models.map( model => (
                        <span key={model.Name} className={styles.listItem}>
                            {model.Name}
                        </span>
                    ))}
                </div>
                <div className={styles.buttonContainer}></div>
                <button className={styles.button}>New Model</button>
            </div>
        );
    };
}
