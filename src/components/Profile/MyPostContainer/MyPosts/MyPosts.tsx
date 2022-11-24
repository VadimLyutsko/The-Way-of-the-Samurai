import React from 'react';
import style from './MyPosts.module.css';
import {Post} from './Post/Post';
import {v1} from 'uuid';
import SuperButton from '../../../SuperComponents/SuperButton/SuperButton';
import {PostPropsType} from '../../../../App';

type MyPostType = {
    addPost: (text: string) => void
    deletePost: () => void
    onPostChange: (newPostElement: string) => void
    postsData: Array<PostPropsType>
    newPostText: string
}

export const MyPosts: React.FC<MyPostType> = (props
) => {

    const {postsData, newPostText, addPost, deletePost, onPostChange} = props;   // Destructuring for convenience

    const postsElements = postsData.map(item => <Post key={v1()} id={item.id} message={item.message}
                                                      likeCount={item.likeCount}
                                                      imgAddress={item.imgAddress}/>);

    const addMyPost = () => {
        newPostElement.current?.value ? addPost(newPostText) : alert('Введите хоть что-нибудь...');
    };

    const deleteMyPost = () => {
        deletePost();
    };

    const onMyPostChange = () => {
        newPostElement.current?.value && onPostChange(newPostElement.current?.value);
    };

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div className={style.postsBlock}>
            <h3> My posts</h3>
            <div>
                < ><textarea
                    style={{minWidth: '245px'}}
                    ref={newPostElement}
                    placeholder="Type some text"
                    onChange={onMyPostChange}
                    value={newPostText}
                />
                </>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '250px',
                    margin: '15px 0'
                }}>
                    <SuperButton
                        title={'Add post'}
                        callBack={addMyPost}
                    />

                    <SuperButton
                        title={'Delete post'}
                        callBack={deleteMyPost}
                    />

                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    );
};