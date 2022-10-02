import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemProps = {
    name: string
    id: string
}

type MessageProps = {
    message: string
}



export const Dialogs: React.FC = () => {

    return (
        <div className={styles.dialogs}>
            <Dialog />
            <Messages/>
        </div>
    );
};

export const Dialog: React.FC = () => {
    const dialogsData=[
        {id:'1', name:'Vasiliska'},
        {id:'2', name:'Ivan'},
        {id:'3', name:'Vadim'},
        {id:'4', name:'Andrey'},
        {id:'5', name:'Valera'},

    ]


    const dialogsElements = dialogsData.map(item=><DialogItem id={item.id} name={item.name}/>)
    return (
        <div className={styles.dialogsItem}>
            {dialogsElements}
        </div>
    );
};

export const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={styles.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    );
};

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={styles.message}> {props.message}</div>
    );
};



export const Messages: React.FC = () => {

    const messagesData = [
        {message: 'Hello!!!'},
        {message: 'How are you???'},
        {message: 'Privett'},
        {message: 'Yoo'},
        {message: 'Yoo'}
    ];
    const messageElements = messagesData.map(item => <Message message={item.message}/>);
    return (
        <div className={styles.messagesItem}>
            {messageElements}

        </div>
    );
};

