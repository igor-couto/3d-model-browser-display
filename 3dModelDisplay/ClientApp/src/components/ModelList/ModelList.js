import React, { Component }  from 'react';
import styles from './ModelList.module.css';

export default class ModelList extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            models: []
        }
    }

    componentDidMount(){
        this.loadModels();
    }

    loadModels = async () => {
        const response = await fetch('https://localhost:44355/Model/GetAll');
        const responseModels = await response.json();

        this.setState({
            models: responseModels
        });

        if(this.state.models.lenght > 0)
            this.setState( { selectedModelIndex: 0 } );
    };

    OpenUploadCard = () => {
        this.props.openNewModelCard(true);
    }

    SelectModel = async (index) => {
        this.setState({selectedListItem: index});
        
        let urlGetModel = `https://localhost:44355/Model/GetModel?modelName=${this.state.models[index].Name}`;
        const responseModel = await fetch(urlGetModel);

        let urlGetTexture = `https://localhost:44355/Model/GetTexture?modelName=${this.state.models[index].Name}`;
        const responseTexture = await fetch(urlGetTexture);
    }
    
    render(){
        return(
            <div className={styles.leftContainer}>
                <div className={styles.list}>
                    {this.state.models.map( (model, index) => (
                        <span 
                            key={model.Name} 
                            className={ `${styles.listItem} ${(index === this.state.selectedModelIndex)? styles.selectedListItem : ''}`}
                            onClick={   (e) => { this.SelectModel(index) }  }
                        >
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