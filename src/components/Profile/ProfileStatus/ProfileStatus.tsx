import React, {useState} from 'react';
import styles from './ProfileStatus.module.css'


export const ProfileStatus = () => {

    const [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        setEditMode(true)
        console.log(editMode);
    }

    const offEditMode = () => {
        setEditMode(false)
        console.log(editMode);
    }
    return (
        <div className={styles.status}>
            {
                !editMode ?
                    <div>
                        <span onDoubleClick={onEditMode}>My status</span>
                    </div> :
                    <div>
                        <input autoFocus={true} onBlur={offEditMode} type="text" value={'text from props'}></input>
                    </div>
            }
        </div>
    );
};

export default ProfileStatus;