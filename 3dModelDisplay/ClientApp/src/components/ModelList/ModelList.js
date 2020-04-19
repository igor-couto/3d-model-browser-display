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
            <div className="ModelList">
                <ul>
                    {this.state.models.map( model => (
                        <li key={model.Name}>{model.Name}</li>
                    ))}
                </ul>
                <button className={styles.button}>New Model</button>
            </div>
        );
    };
}
