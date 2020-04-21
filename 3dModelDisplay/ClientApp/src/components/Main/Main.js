import React from 'react';
import styles from './Main.module.css';
import ModelDisplay from '../ModelDisplay/ModelDisplay';
import ModelList from '../ModelList/ModelList';

function Main(props){
    return(
        <div className={styles.Main}>
            <ModelList OpenNewModelCard={props.OpenNewModelCard}/>
            <ModelDisplay/>
        </div>
    );
}

export default Main;