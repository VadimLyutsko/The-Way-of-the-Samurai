import React from 'react';
import styles from './Dialogs.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';
import {useAppSelector} from '../../../redux/redux-store';
import {Navigate} from 'react-router-dom';


type DialogsPropsType = {
    dialogsElements: JSX.Element[]
    messageElements: JSX.Element[]
    addMessage: (newMessageText: string) => void
    onChangeMessageValue: (changeNewMessageText: string) => void
    newDialogMessageText: string
    isAuth: boolean
}


export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dialogsElements,
                                                        messageElements,
                                                        newDialogMessageText,
                                                        addMessage,
                                                        onChangeMessageValue,
                                                    }) => {

    const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn)


    const onClickButtonHandler = () => {
        newMessageElement.current?.value ? addMessage(newMessageElement.current?.value) : alert('Введи хоть что-нибудь, умник...');
    };

    const onChangeTextAreaValue = () => {
        newMessageElement.current?.value && onChangeMessageValue(newMessageElement.current?.value);
    };

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    if(!isLoggedIn){
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={styles.messagesItem}>
                {messageElements}
                <div className={styles.inpNewMessage}>
                    <textarea
                        placeholder={'Enter your message'}
                        onChange={onChangeTextAreaValue}
                        value={newDialogMessageText}
                        ref={newMessageElement}
                    />
                    <SuperButton
                        callBack={onClickButtonHandler}
                        type={'Evil'}
                        title={'Add'}
                    />
                </div>
            </div>
        </div>
    );
};




