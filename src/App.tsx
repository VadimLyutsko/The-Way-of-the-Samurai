import React from 'react';
import './App.css'


const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'><img
                src="https://avatars.mds.yandex.net/i?id=0ff1366b533e7174e3532a4eae741dc5-5869619-images-thumbs&n=13"
                alt=""/></header>
            <nav className='nav'>
                <div>
                    <a href="#S">Profile</a>
                </div>

                <div>
                    <a href="#S">Messages</a>
                </div>

                <div>
                    <a href="#S">News</a>
                </div>

                <div>
                    <a href="#S">Music</a>
                </div>

                <div>
                    <a href="#S">Settings</a>
                </div>

            </nav>


            <div className='content'>
                <img src="https://st16.stpulscen.ru/images/product/443/107/594_big.jpg" alt=""/>
            </div>
            <div>ava + description

                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

