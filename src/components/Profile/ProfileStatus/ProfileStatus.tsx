import React, {useEffect, useState} from 'react';
import styles from './ProfileStatus.module.css';
import {updateUserStatus} from '../../../redux/profile-Reducer';
import {useAppDispatch, useAppSelector} from '../../../redux/redux-store';

type ProfileStatusPropsType = {
    // updateUserStatus: (status: string) => void
    // status: string
}


// export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
//
//
//     state = {
//         editMode: false,
//         status: this.props.status,
//         // dispatch:useAppDispatch()
//     };
//
//
//     onEditMode = () => {
//         this.setState({
//             editMode: true
//         });
//     };
//
//     offEditMode = () => {
//         this.setState({
//             editMode: false
//         });
//         this.props.updateUserStatus(this.state.status);
//         // this.state.dispatch(updateUserStatus(this.state.status))
//     };
//
//     onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
//         this.setState({
//             status: e.currentTarget.value
//         });
//     };
//
//     componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: any) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.state.status
//             });
//         }
//     }
//
//
//     render() {
//         return (
//             <div className={styles.status}>
//                 {
//                     !this.state.editMode &&
//                     <div>
//                         <span onDoubleClick={this.onEditMode}>{this.props.status || '-----'}</span>
//                     </div>
//                 }
//                 {this.state.editMode &&
//                     <div>
//                         <input autoFocus={true}
//                                onBlur={this.offEditMode}
//                                type="text"
//                                value={this.state.status}
//                                onChange={this.onStatusChange}
//                         ></input>
//                     </div>
//                 }
//             </div>
//         );
//     }
// }


export const ProfileStatus: React.FC<ProfileStatusPropsType> = () => {

    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.profilePage.status)
    // const [localStatus, setLocalStatus] = useState('')
    const [editMode, setEditMode] = useState(false)

    // useEffect(()=>{
    //     if(status!== localStatus){
    //         dispatch(updateUserStatus(localStatus))
    //     }
    // })

    // const [status, setStatus] = useState<void>(status)

    const onEditMode = () => {
        setEditMode(true)
    };

    const offEditMode = () => {
        setEditMode(false)
        updateUserStatus(status);
        // dispatch(updateUserStatus(status))
        // this.state.dispatch(updateUserStatus(this.state.status))
    };

   // const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
   //      // this.setState({
   //      //     status: e.currentTarget.value
   //      // });
   //     setLocalStatus(e.currentTarget.value)
   //  };
    return (
        <div className={styles.status}>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={onEditMode}>{status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={offEditMode}
                           type="text"
                           value={status}
                           // onChange={onStatusChange}
                    ></input>
                </div>
            }
        </div>
    );
};