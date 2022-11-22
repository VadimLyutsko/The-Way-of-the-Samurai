import {v1} from 'uuid';
import {StoreType} from '../index';


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
                    message: 'My brotherrr',
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
                    name: 'Vasiliska',
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
                {message: 'Privett'},
                {message: 'Yoo'},
                {message: 'Yoo'}
            ]
        }
    },

    _renderEntireThree() {
        console.log('rerender');
    },

    addNewPost(mewPostMessage) {
        let newPost = {
            id: v1(),
            message: mewPostMessage,
            likeCount: 0,
            imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
        };
        this._state.messagePage.postsData.unshift(newPost);
        this.updateNewPostText('');
        this._renderEntireThree(this._state);
    },

    deleteLastPost() {
        this._state.messagePage.postsData.shift();
        this._renderEntireThree(this._state);
    },

    updateNewPostText(mewPostText) {
        this._state.messagePage.newPostText = mewPostText;
        this._renderEntireThree(this._state);
    },

    subscribe(observer) {
        this._renderEntireThree = observer;
    },

    getState() {
        return this._state;
    }
};

// window.store = store;