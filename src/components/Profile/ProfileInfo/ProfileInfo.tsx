import React from 'react';
import styles from './ProfileInfo.module.css';

export const ProfileInfo: React.FC = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.wallpaperflare.com/static/555/605/138/mountain-range-panorama-landscape-nature-wallpaper-preview.jpg"
                    alt=""/>
            </div>
            <div className={styles.description}>ava + description
            </div>
        </div>
    );
};