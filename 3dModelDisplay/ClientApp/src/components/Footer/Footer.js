import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
            <div className={styles.container}>
            <a
                className={styles.link}
                href="https://github.com/igor-couto"
                target="_blank"
                rel="noopener noreferrer"
            >
            Source Code
            </a>
        </div>

    );
};

export default Footer;