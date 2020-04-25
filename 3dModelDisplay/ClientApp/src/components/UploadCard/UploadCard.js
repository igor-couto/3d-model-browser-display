import React, {Component} from 'react';
import DropZone from '../DropZone/DropZone';
import styles from './UploadCard.module.css';
import {ReactComponent as CloseIcon} from './close-icon.svg';

export default class UploadCard extends Component {

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
                        <div className={styles.header}>
                            <CloseIcon className={styles.close} onClick={this.CloseCard}/>
                        </div>
                        <div className={styles.body}>
                            <DropZone onFilesAdded={console.log}/>
                            <div className={styles.info}>
                                <input className={styles.textInput} placeholder="Model Name ..."/>
                                <button className={styles.button} onClick={this.UploadModel}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else {
            return(<div hidden></div>);
        }
    }
}