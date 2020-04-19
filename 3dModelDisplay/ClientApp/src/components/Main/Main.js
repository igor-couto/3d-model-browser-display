import React from 'react';
import styles from './Main.module.css';
import ModelList from '../components/ModelList/ModelList';

function Main(){
    return(
        <div>
            <ModelList/>
            <ModelDisplay/>
        </div>
    );
}

export default Main;