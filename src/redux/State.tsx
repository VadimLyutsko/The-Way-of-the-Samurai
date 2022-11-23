import {StoreType} from '../index';
import DialogsReducer from './dialogs-Reducer';
import ProfileReducer from './profile-Reducer';

export let store: StoreType = {

    _state: {
        messagePage: {
            postsData: [
                {
                    id: '1',
                    message: 'Hello, my friends',
                    likeCount: 1,
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                },
                {
                    id: '2',
                    message: 'My brother',
                    likeCount: 17,
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                },
                {
                    id: '3',
                    message: 'My Valeria',
                    likeCount: 175,
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                }
            ],
            newPostText: '',
        },
        profilePage: {
            dialogsData: [
                {
                    id: '1',
                    name: 'Vadim',
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                },
                {
                    id: '2',
                    name: 'Ivan',
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                },
                {
                    id: '3',
                    name: 'Vadim',
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                },
                {
                    id: '4',
                    name: 'Andrey',
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                },
                {
                    id: '5',
                    name: 'Valera',
                    imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
                },

            ],
            messagesData: [
                {message: 'Hello!!!'},
                {message: 'How are you???'},
                {message: 'Privet'},
                {message: 'Yoo'},
                {message: 'Yoo'}
            ],
            newDialogMessageText: '',
        }
    },

    _renderEntireThree() {
        console.log('rerender');
    },

    subscribe(observer) {
        this._renderEntireThree = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = DialogsReducer(this._state.profilePage, action);
        this._state.messagePage = ProfileReducer(this._state.messagePage, action);
        this._renderEntireThree(this._state);
    }
};