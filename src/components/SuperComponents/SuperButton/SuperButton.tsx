import React from 'react';
import styles from './SuperButtot.module.css';

type SuperButtonPropsType = {
    callBack: () => void
    title: string
    type: 'Goodness' | 'Evil'
}


export const SuperButton: React.FC<SuperButtonPropsType> = ({callBack, title, type}) => {

    let ButtonClassName = type === 'Evil' ? styles.deleteSuperButton : styles.addSuperButton;

    return (
        <>
            <button
                className={ButtonClassName}
                onClick={callBack}>
                {title}
            </button>
        </>
    );
};

export default SuperButton;