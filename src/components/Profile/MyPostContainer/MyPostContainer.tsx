import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {
    addNewPostActionCreator,
    deletePostActionCreator,
    updatePostTextActionCreator
} from '../../../redux/profile-Reducer';
import {Post} from './MyPosts/Post/Post';
import {v1} from 'uuid';
import {StoreContext} from '../../../Context';

// type MyPostsContainerType = {
//     postsData: PostType[]
//     dispatch: (action: ActionType) => void
//     newPostText: string
// }

export const MyPostsContainer: React.FC = () => {

    return (<StoreContext.Consumer>

            {(store) => {
                let state = store.getState();
                const {profilePage: {postsData, newPostText}} = state;

                const postsElements = postsData.map(item => <Post imgAddress={item.imgAddress}
                                                                  likeCount={item.likeCount}
                                                                  message={item.message}
                                                                  id={item.id}
                                                                  key={v1()}
                />);

                const addPost = (text: string) => {
                    text ? store.dispatch(addNewPostActionCreator(text)) : alert('Введите хоть что-нибудь...');
                };

                const deletePost = () => {
                    store.dispatch(deletePostActionCreator());
                };

                const onPostChange = (newPostElement: string) => {
                    newPostElement && store.dispatch(updatePostTextActionCreator(newPostElement));
                };

                return <MyPosts addPost={addPost}
                                deletePost={deletePost}
                                onPostChange={onPostChange}
                                postsElements={postsElements}
                                newPostText={newPostText}/>;
            }}
        </StoreContext.Consumer>
    );
};