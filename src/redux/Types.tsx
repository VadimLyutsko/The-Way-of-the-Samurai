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
    | UpdateUserProfileDataAT
    | SetAuthDataAT

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

export type UpdateUserProfileDataAT = {
    type: 'UPDATE-NEW-PROFILE',
    profile: UserProfileType
}

export type SetAuthDataAT = {
    type: 'SET-AUTH-DATA',
    data: AuthData
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

//Auth


export type InitialAuthDataType = {
    data: AuthData
    isAuth: boolean
}

export type AuthData = {
    UserId: null | string
    email: null | string
    login: null | string
}


//ProfileType
export type InitialProfileReducerType = {
    profile: UserProfileType
    postsData: PostType[]
    newPostText: string
}

export type UserProfileType = {
    aboutMe: null | string
    contacts: userProfileContactsType,
    lookingForAJob: null | string
    lookingForAJobDescription: null | string
    fullName: string,
    userId: number,
    photos: UserProfilePhotosType
} | null

type UserProfilePhotosType = {
    small: undefined | string
    large: undefined | string
}

type userProfileContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
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
