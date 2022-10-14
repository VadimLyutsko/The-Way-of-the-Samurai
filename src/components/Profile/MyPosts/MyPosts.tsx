import React, {useState} from 'react';
import style from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../Profile';


export const MyPosts: React.FC<PostDataType> = ({postsData, addNewPost}) => {


    const postsElements = postsData.map(item => <Post key={item.id} id={item.id} message={item.message}
                                                      likeCount={item.likeCount}
                                                      imgAddress={item.imgAddress}/>);
    const [textAreaValue, seTextAreaValue] = useState<string>('');

    // const onClickButtonHandler = () => {
    //     // addNewPost({
    //     //     id: 1,
    //     //     message: 'Hello, my friends',
    //     //     likeCount: 1,
    //     //     imgAddress: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png'
    //     // });
    // };

    const onClickButtonHandler = () => {
        let text = newPostElement.current?.value;
        text && addNewPost(text);
    };

    // const onChangeTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     seTextAreaValue(event.currentTarget?.value);     //   ? - сетать, если в поле не пусто
    // };

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div className={style.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea
                    ref={newPostElement}
                    // onChange={onChangeTextAreaValue}
                >
                </textarea>
                </div>
                <div>
                    <button
                        onClick={onClickButtonHandler}
                    >Add post
                    </button>
                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    );
};