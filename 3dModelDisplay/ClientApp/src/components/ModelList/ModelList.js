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
            this.setState( { selectedListItem: 0 } );
    };

    OpenUploadCard = () => {
        this.props.openNewModelCard(true);
    }

    SelectModel = async (index) => {
        this.setState({selectedListItem: index});
        
        let modelName = this.state.models[index].Name;

        let urlGetModel = `https://localhost:44355/Model/GetModel?modelName=${modelName}`;
        let urlGetTexture = `https://localhost:44355/Model/GetTexture?modelName=${modelName}`;

        let model = await fetch(urlGetModel);
        let texture = await fetch(urlGetTexture);

        let modelBlob = await model.blob();
        let imageBlob = await texture.blob();

        let modelText = await modelBlob.text();
        console.log('SelectModel on modellist');
        console.log(modelName);
        this.props.modelSelectHandler(modelText, imageBlob, modelName);
    }
    
    render(){
        return(
            <div className={styles.leftContainer}>
                <div className={styles.list}>
                    {this.state.models.map( (model, index) => (
                        <span 
                            key={model.Name} 
                            className={`${(index === this.state.selectedListItem)? styles.selectedListItem : styles.listItem}`}
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