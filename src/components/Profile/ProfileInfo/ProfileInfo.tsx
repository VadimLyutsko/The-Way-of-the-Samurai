import React from 'react';
import styles from './ProfileInfo.module.css';

export const ProfileInfo: React.FC = () => {
    return (
        <div>
            <div>
                <img
                    src="https://pbs.twimg.com/profile_banners/557861893/1497433330/1500x500"
                    alt=""/>
            </div>
            <div className={styles.description}>ava + description
            </div>
        </div>
    );
};