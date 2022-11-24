import store from './redux-store';

export type ActionType =
    AddNewPostAT
    | UpdateNewPostTextAT
    | DeletePostTextAT
    | AddNewDialogMessageAT
    | UpdateDialogsMessageAT

export type AddNewPostAT = {
    type: 'ADD-NEW-POST'
    mewPostMessage: string
}

export type AddNewDialogMessageAT = {
    type: 'ADD-NEW-DIALOG-MESSAGE'
    mewMessage: string
}

export type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    mewPostText: string
}

export type UpdateDialogsMessageAT = {
    type: 'UPDATE-DIALOG-MESSAGE'
    mewMessageText: string
}

export type DeletePostTextAT = {
    type: 'DELETE-LAST-POST'
}


//Store

export type StoreType = typeof store

//PostsDataType
export type InitialProfileReducerType = {
    postsData: PostType[]
    newPostText: string
}

export type PostType = {
    id: string
    message: string
    likeCount: number
    imgAddress: string
}


//DialogsDataType
export type InitialDialogsReducerType = {
    dialogsData: MessageItemType[]
    messagesData: MessageType[]
    newDialogMessageText: string
}

export type MessageItemType = {
    id: string
    name: string
    imgAddress: string
}

export type MessageType = {
    message: string
}
