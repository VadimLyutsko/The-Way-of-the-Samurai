import React, {Dispatch} from 'react';
import {Dialogs} from './Dialogs/Dialogs';
import {addNewDialogsMessageActionCreator, updateDialogsMessageActionCreator} from '../../redux/dialogs-Reducer';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionType} from '../../redux/Types';
import {DialogItem} from './Dialogs/DialogsItem/DialogsItem';
import {Message} from './Dialogs/MessageItem/MessageItem';
import {compose} from 'redux';
import {widthAuthRedirect} from '../Commons/HOC\'s/widthRedirect'


const mapStateToProps = (state: StateType) => {
    return {
        newDialogMessageText: state.dialogsPage.newDialogMessageText,
        dialogsElements: state.dialogsPage.dialogsData.map(item => <DialogItem imgAddress={item.imgAddress}
                                                                               name={item.name} id={item.id}
        />),
        messageElements: state.dialogsPage.messagesData.map(item => <Message message={item.message}/>),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        addMessage: (newMessageText: string) => {
            newMessageText ? dispatch(addNewDialogsMessageActionCreator(newMessageText)) : alert(`Введи хоть что-нибудь, умник...`);
        },
        onChangeMessageValue: (changeNewMessageText: string) => {
            changeNewMessageText && dispatch(updateDialogsMessageActionCreator(changeNewMessageText));
        }
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    widthAuthRedirect
)(Dialogs);


