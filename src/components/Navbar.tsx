import React from 'react'


export const Navbar :React.FC = ()=>{
    return(
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
    )
}