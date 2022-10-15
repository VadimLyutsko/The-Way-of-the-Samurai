import {v1} from 'uuid';

let renderEntireThree = () => {   // Заглушка, чтобы заменить ее коллбэком ниже
    console.log('rerender');
};

export const state = {
    messagePage: {
        postsData: [
            {
                id: 1,
                message: 'Hello, my friends',
                likeCount: 1,
                imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
            },
            {
                id: 2,
                message: 'My brotherrr',
                likeCount: 17,
                imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
            },
            {
                id: 3,
                message: 'My Valeria',
                likeCount: 175,
                imgAddress: 'https://sun9-east.userapi.com/sun9-57/s/v1/if1/ui9oE3EzH6YEB2J10w21pACDlkm7bnoct0OdnZbPi6gmSyBwCN8PASYgycQHAOZl-lG8A0vd.jpg?size=2449x1633&quality=96&type=album'
            }
        ],
        newPostText: '',
    },
    profilePage: {
        dialogsData: [
            {
                id: '1',
                name: 'Vasiliska',
                imgAddress: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png'
            },
            {
                id: '2',
                name: 'Ivan',
                imgAddress: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png'
            },
            {
                id: '3',
                name: 'Vadim',
                imgAddress: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png'
            },
            {
                id: '4',
                name: 'Andrey',
                imgAddress: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png'
            },
            {
                id: '5',
                name: 'Valera',
                imgAddress: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png'
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
};

export const addNewPost = (mewPostMessage) => {
    let newPost = {
        id: v1(),
        message: mewPostMessage,
        likeCount: 0,
        imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
    };
    state.messagePage.postsData.push(newPost);
    updateNewPostText('');
    renderEntireThree(state);
};

export const updateNewPostText = (mewPostText) => {
    state.messagePage.newPostText = mewPostText;
    // console.log(mewPostText);
    renderEntireThree(state);
};

export let subscribe = (observer) => {
    renderEntireThree = observer;
};
