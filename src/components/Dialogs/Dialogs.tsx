import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemProps ={
    name:string
    id:string
}

type MessageProps ={
    message:string
}

export const DialogItem:React.FC<DialogItemProps> = (props)=>{
return(
    <div className={styles.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
)}

export const Message:React.FC<MessageProps>=(props)=>{
return(
    <div className={styles.message}> {props.message}</div>
)}

export const Dialog: React.FC = () => {
    return (
        <div className={styles.dialogsItem}>
            <DialogItem id={'1'} name={'Vasilisa'}/>
            <DialogItem id={'2'} name={'Ivan'}/>
            <DialogItem id={'3'} name={'Vadim'}/>
            <DialogItem id={'4'} name={'Andrey'}/>
            <DialogItem id={'5'} name={'Valera'}/>
        </div>
    );
};

export const Messages: React.FC = () => {
    return (
        <div className={styles.messagesItem}>
            <Message message={'Hello!!!'}/>
            <Message message={'How are you???'}/>
            <Message message={'Privett'}/>
            <Message message={'Yoo'}/>
            <Message message={'Yoo'}/>
        </div>
    );
};

export const Dialogs: React.FC = () => {

    return (
        <div className={styles.dialogs}>
            <Dialog/>
            <Messages/>
        </div>
    );
};