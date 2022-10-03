import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {state} from './redux/State';




//
// const dialogsData=[
//     {id:'1', name:'Vasiliska'},
//     {id:'2', name:'Ivan'},
//     {id:'3', name:'Vadim'},
//     {id:'4', name:'Andrey'},
//     {id:'5', name:'Valera'},
//
// ]
//
// const messagesData = [
//     {message: 'Hello!!!'},
//     {message: 'How are you???'},
//     {message: 'Privett'},
//     {message: 'Yoo'},
//     {message: 'Yoo'}
// ];
//
// const postsData = [
//     {
//         id:1,
//         message:'Hello, my friends',
//         likeCount:1,
//         imgAddress:"https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
//     },
//     {
//         id:2,
//         message:'My brotherrr',
//         likeCount:17,
//         imgAddress:"https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
//     },
//     {
//         id:3,
//         message:'My Valeria',
//         likeCount:175,
//         imgAddress:'https://sun9-east.userapi.com/sun9-57/s/v1/if1/ui9oE3EzH6YEB2J10w21pACDlkm7bnoct0OdnZbPi6gmSyBwCN8PASYgycQHAOZl-lG8A0vd.jpg?size=2449x1633&quality=96&type=album'
//     }
// ]

ReactDOM.render(
    <BrowserRouter>
        <App
            state={state}
            // postsData={postsData}
            //  dialogsData={dialogsData}
            // messagesData={messagesData}
        />
    </BrowserRouter>,
    document.getElementById('root')
);