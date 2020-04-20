import React from 'react';
import styles from './Header.module.css';

function Header(){
    return(
    <div className={styles.Header}>
        <div>User</div>
        <div>3D Library Display</div>
    </div>
    
    );
}

export default Header;