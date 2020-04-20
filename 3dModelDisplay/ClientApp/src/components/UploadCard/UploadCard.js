import React, {Component} from 'react';
import DropZone from '../DropZone/DropZone';
import styles from './UploadCard.module.css';

export default class UploadCard extends Component {

    constructor(props){
        super(props);
    }

    UploadModel = () => {

    }

    render() {
        if(this.props.isNewModelCardOpen){
            return(
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <DropZone onFilesAdded={console.log}/>
                        <input className={styles.textInput} placeholder="Model Name ..."/>
                        <button className={styles.button} onClick={this.UploadModel}>Upload</button>
    
                    </div>
                    
                </div>
            );
        }else {
            return(<div hidden></div>);
        }

    }
}