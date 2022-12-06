import React from 'react';
import style from './MyPosts.module.css';
import SuperButton from '../../../SuperComponents/SuperButton/SuperButton';

type MyPostType = {
    updatePostText: (newPostElement: string) => void
    addNewPost: (text: string) => void
    postsElements: JSX.Element[]
    deletePost: () => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostType> = (props
) => {

    const {postsElements, newPostText, addNewPost, deletePost, updatePostText} = props;   // Destructuring for convenience


    const addMyPost = () => {
        newPostElement.current?.value ? addNewPost(newPostText) : alert('Введите хоть что-нибудь...');
    };

    const deleteMyPost = () => {
        deletePost();
    };

    const onMyPostChange = () => {
        newPostElement.current?.value && updatePostText(newPostElement.current?.value);
    };

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div className={style.postsBlock}>
            <h3> My posts</h3>
            <div>
                < >
                    <textarea
                        className={style.myPostsTextArea}
                        placeholder="Type some text"
                        onChange={onMyPostChange}
                        ref={newPostElement}
                        value={newPostText}
                    />
                </>
                <div className={style.myPostsButtonContainer}>
                    <SuperButton
                        callBack={addMyPost}
                        title={'Add post'}
                        type={'Goodness'}
                    />

                    <SuperButton
                        callBack={deleteMyPost}
                        title={'Delete post'}
                        type={'Evil'}
                    />

                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    );
};