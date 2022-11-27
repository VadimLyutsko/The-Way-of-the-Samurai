import React from 'react';

import styles from './Preloader.module.css';

type PreloaderType = {
    preloaderImage: string
}
const SuperPreloader: React.FC<PreloaderType> = ({preloaderImage}) => {
    return (
        <div className={styles.preloader}>
            <img src={preloaderImage} alt=""/>
        </div>
    );
};

export default SuperPreloader;