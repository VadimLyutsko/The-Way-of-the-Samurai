import React, {useState} from 'react';
import styles from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    updateUserStatus: (status: string) => void
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({status, updateUserStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [userStatus, setUserStatus] = useState(status);

    const onEditMode = () => {
        setEditMode(true);
    };

    const offEditMode = () => {
        setEditMode(false);
        updateUserStatus(userStatus);
    };

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUserStatus(e.currentTarget.value);
    };
    return (
        <div className={styles.status}>
            {
                !editMode ?
                    <div>
                        <span onDoubleClick={onEditMode}>{status}</span>
                    </div> :
                    <div>
                        <input autoFocus={true}
                               onBlur={offEditMode}
                               type="text"
                               value={userStatus}
                               onChange={onStatusChange}
                        ></input>
                    </div>
            }
        </div>
    );
};

export default ProfileStatus;