import store from './redux-store';

export type ActionType =
    AddNewPostAT
    | UpdateNewPostTextAT
    | DeletePostTextAT
    | AddNewDialogMessageAT
    | UpdateDialogsMessageAT
    | UnFollowUserAT
    | FollowUserAT
    | SetUserAT

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

// AT for Users

export type FollowUserAT = {
    type: 'FOLLOW-USER'
    userId: string
}

export type UnFollowUserAT = {
    type: 'UNFOLLOW-USER'
    userId: string
}

export type SetUserAT = {
    type: 'SET-USER'
    users:UserType[]
}


//Store

export type StoreType = typeof store


//UsersDataType

export type InitialUsersReducerType = {
    UsersData: UserType[]
}

export type UserType = {
    id: string
    name: string
    location: UserLocationType
    follow: boolean
    userPhoto: string
}

type UserLocationType = {
    country: string
    city: string
}


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
