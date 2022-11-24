import React from 'react';
import {Dialogs} from './Dialogs/Dialogs';
import {addNewDialogsMessageActionCreator, updateDialogsMessageActionCreator} from '../../redux/dialogs-Reducer';
import {Message} from './Dialogs/MessageItem/MessageItem';
import {DialogItem} from './Dialogs/DialogsItem/DialogsItem';
import {StoreContext} from '../../Context';


// type DialogsContainerPropsType = {  //  if use without Context
//     dialogsData: MessageItemType[]
//     messagesData: MessageType[]
//     newDialogMessageText: string
//     dispatch: (action: ActionType) => void
// }


export const DialogsContainer: React.FC = () => {

    return (<StoreContext.Consumer>

            {(store) => {
                let state = store.getState();
                const {dialogsPage: {newDialogMessageText, dialogsData, messagesData}} = state;

                const dialogsElements = dialogsData.map(item => <DialogItem id={item.id} name={item.name}
                                                                            imgAddress={item.imgAddress}/>);

                const messageElements = messagesData.map(item => <Message message={item.message}/>);

                const addMessage = (newMessageText: string) => {
                    newMessageText ? store.dispatch(addNewDialogsMessageActionCreator(newMessageText)) : alert(`Введи хоть что-нибудь, умник...`);
                };

                const onChangeMessageValue = (changeNewMessageText: string) => {
                    changeNewMessageText && store.dispatch(updateDialogsMessageActionCreator(changeNewMessageText));
                };
                return <Dialogs messageElements={messageElements} newDialogMessageText={newDialogMessageText}
                                dialogsElements={dialogsElements} addMessage={addMessage}
                                onChangeMessageValue={onChangeMessageValue}/>;
            }}

        </StoreContext.Consumer>
    );
};




