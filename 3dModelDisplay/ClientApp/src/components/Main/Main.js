import React from 'react';
import styles from './Main.module.css';
import ModelDisplay from '../ModelDisplay/ModelDisplay';
import ModelList from '../ModelList/ModelList';

function Main(props){
    return(
        <div className={styles.Main}>
            <ModelList openNewModelCard={props.openNewModelCard}/>
            <ModelDisplay/>
        </div>
    );
}

export default Main;