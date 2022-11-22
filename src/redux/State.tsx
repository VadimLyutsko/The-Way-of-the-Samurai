import {v1} from 'uuid';
import {AddNewPostAT, DeletePostTextAT, StoreType, UpdateNewPostTextAT} from '../index';

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const DELETE_LAST_POST = 'DELETE-LAST-POST';

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
            ]
        }
    },

    _renderEntireThree() {
        console.log('rerender');
    },

    _updateNewPostText(mewPostText) {
        this._state.messagePage.newPostText = mewPostText;
        this._renderEntireThree(this._state);
    },

    subscribe(observer) {
        this._renderEntireThree = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_NEW_POST) {
            let newPost = {
                id: v1(),
                message: action.mewPostMessage,
                likeCount: 0,
                imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
            };
            this._state.messagePage.postsData.unshift(newPost);
            this._updateNewPostText('');
            this._renderEntireThree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.messagePage.newPostText = action.mewPostText;
            this._renderEntireThree(this._state);
        } else if (action.type === DELETE_LAST_POST) {
            this._state.messagePage.postsData.shift();
            this._renderEntireThree(this._state);
        }
    },
};

export const addNewPostActionCreator = (mewPostMessage: string): AddNewPostAT => {
    return {
        type: ADD_NEW_POST,
        mewPostMessage
    };
};


export const deletePostActionCreator = (): DeletePostTextAT => {
    return {
        type: DELETE_LAST_POST,
    };
};

export const updatePostTextActionCreator = (mewPostText: string): UpdateNewPostTextAT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        mewPostText
    };
};
