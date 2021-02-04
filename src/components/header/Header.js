import { Avatar } from '@material-ui/core'
import { ExpandMore, Language, Search } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
        <Link to="/">
        <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt=""/>

        </Link>

            <div className="header-center">
                <input type="text" placeholder="search..." />
                <Search />
            </div>

            <div className="header-left">
                <p>Become a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
