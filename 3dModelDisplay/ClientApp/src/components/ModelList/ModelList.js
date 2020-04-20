import React, { Component }  from 'react';
import styles from './ModelList.module.css';

export default class ModelList extends Component {
    
    constructor(props){
        super(props);
    }

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

        this.setState({
            models: responseModels
        });
    };

    OpenUploadCard = () => {
        this.props.OpenNewModelCard(true);
    }
    
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
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={this.OpenUploadCard}>New Model</button>
                </div>
                
            </div>
        );
    };
}