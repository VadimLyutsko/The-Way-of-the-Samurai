import React, {FC} from 'react';
import styles from './SuperButtot.module.css';

type SuperButtonPropsType = {
    callBack: () => void
    title: string
}


export const SuperButton: React.FC<SuperButtonPropsType> = ({callBack, title}) => {

    let ButtonClassName = title === 'Delete post' ? styles.deleteSuperButton :  styles.addSuperButton;

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