import React from 'react';
import ProfileReducer, {addNewPost, updatePostText} from './profile-Reducer';

let initialState = {
    profile: null,
    postsData: [
        {
            id: '1',
            message: 'Hello, my friends',
            likeCount: 1,
            imgAddress: 'https://r3.mt.ru/r4/photo8EBF/20750698803-0/jpeg/bp.jpeg'
        },
        {
            id: '2',
            message: 'My brother',
            likeCount: 17,
            imgAddress: 'https://yt3.ggpht.com/a/AATXAJyxyzVyRlYVGXRHd157SIfb7B5eK0oIjJHAKRohsw=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: '3',
            message: 'My Valeria',
            likeCount: 175,
            imgAddress: 'https://yt3.ggpht.com/a/AGF-l78SDKUTFWu93u84ILpJMBiA0safKfEX2blQVQ=s900-c-k-c0xffffffff-no-rj-mo'
        }
    ],
    newPostText: '',
    status: '',
};

test('New post should be added', () => {

    // .1 - initialState

    // .2 Action

    let newState = ProfileReducer(initialState, addNewPost('mewPostMessage'))

    // .3 Expect

    expect(initialState.postsData.length).toBe(3)
    expect(newState.postsData?.length).toBe(4)

})

test('The new message of new post should be "Hello everybody!!!"', () => {

    // .1 - initialState

    // .2 Action

    let newState = ProfileReducer(initialState, addNewPost('Hello everybody!!!'))

    // .3 Expect

    expect(newState.postsData?.length).toBe(4)
    expect( newState.postsData?.[0].message).toBe('Hello everybody!!!')

})

test('New text should be correct', () => {

    // .1 - initialState

    // .2 Action

    let newState = ProfileReducer(initialState, updatePostText('New text-TEST'))

    // .3 Expect

    expect(newState.newPostText).toBe('New text-TEST')
})
