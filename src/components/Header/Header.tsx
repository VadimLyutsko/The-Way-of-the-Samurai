import React from 'react';
import style from './Header.module.css'


export const Header: React.FC = () => {
    return (
        <header className={style.header}><img
            src="https://ysm-res.cloudinary.com/image/upload/c_limit,f_auto,h_630,q_auto,w_1200/v1/websites4/live-prod/ysph/public-health-research-and-practice/interdepartmental-foci/data-science/modeling/cennet-crop_248674_52825_v2.jpg"
            alt=""/></header>
    )
}