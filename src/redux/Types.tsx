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
    | SetCurrentPageAT
    | SetTotalUserCountAT
    | SetFetchingPreloaderAT

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
    userId: number
}

export type UnFollowUserAT = {
    type: 'UNFOLLOW-USER'
    userId: number
}

export type SetUserAT = {
    type: 'SET-USER'
    users: UserType[]
}

export type SetCurrentPageAT = {
    type: 'SET-USER-CURRENT-PAGE'
    currentPage: number
}
export type SetTotalUserCountAT = {
    type: 'SET-TOTAL-USER-COUNT'
    totalUsersCount: number
}
export type SetFetchingPreloaderAT = {
    type: 'SET-FETCHING-PRELOADER'
    isFetching: boolean
}


//Store

export type StoreType = typeof store


//UsersDataType

export type InitialUsersReducerType = {
    UsersData: UserType[]
    isFetching: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: any
    photos: UserPhotosType
    status: any
    followed: boolean

}

type UserPhotosType = {
    small: string
    large: string
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
