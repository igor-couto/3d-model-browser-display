import React, {Component} from 'React';
import DropZone from '../DropZone/DropZone';
import styles from './UploadCard.module.css';

export default class UploadCard extends Component {
    render(){
        return(
            <div className={styles.card}>
                <DropZone onFilesAdded={console.log}/>
            </div>
        );
    }
}