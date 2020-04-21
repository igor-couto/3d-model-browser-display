import React, {Component} from 'react';
import DropZone from '../DropZone/DropZone';
import styles from './UploadCard.module.css';
import {ReactComponent as CloseIcon} from './close-icon.svg';

export default class UploadCard extends Component {

    constructor(props){
        super(props);
    }

    UploadModel = () => {

    }

    CloseCard = () => {
        this.props.openNewModelCard(false);
    }

    render() {
        if(this.props.isNewModelCardOpen){
            return(
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <CloseIcon className={styles.close} onClick={this.CloseCard}/>
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