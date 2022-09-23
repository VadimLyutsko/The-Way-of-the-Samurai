import React from 'react';
import styles from './ProfileInfo.module.css';

export const ProfileInfo: React.FC = () => {
    return (
        <div>
            <div>
                <img src="https://st16.stpulscen.ru/images/product/443/107/594_big.jpg" alt=""/>
            </div>
            <div className={styles.description}>ava + description
            </div>
        </div>
    );
};