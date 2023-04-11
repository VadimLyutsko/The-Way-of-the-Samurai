import React, {useEffect, useState} from 'react';
import styles from './ProfileStatus.module.css';
import {updateUserStatus} from '../../../redux/profile-Reducer';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-store';

// type ProfileStatusPropsType = {
//     // updateUserStatus: (status: string) => void
//     // status: string
// }


export const ProfileStatus: React.FC = () => {

    const statusFromSelect = useAppSelector(state => state.profilePage.status)
    const dispatch = useAppDispatch()

    const [status, setStatus] = useState(statusFromSelect)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        if (status !== statusFromSelect) {
            setStatus(statusFromSelect)
        }
    }, [statusFromSelect])

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus('status');
        dispatch(updateUserStatus(status))
    };

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };


    return (
        <div className={styles.status}>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {status || 'Click twice and write your status'}
                    </span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        type="text"
                        value={status}
                        onChange={onStatusChange}>
                    </input>
                </div>
            }
        </div>
    );
};