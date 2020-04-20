import React from 'react';
import styles from './Main.module.css';
import ModelDisplay from '../ModelDisplay/ModelDisplay';
import ModelList from '../ModelList/ModelList';

function Main(){
    return(
        <div className={styles.Main}>
            <ModelList/>
            <ModelDisplay/>
        </div>
    );
}

export default Main;