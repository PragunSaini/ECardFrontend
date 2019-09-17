import React from 'react'

import Logo from './Logo'
import NavLinks from './NavLinks'

import NavBar from '../styledcomponents/NavBar'

const Navigation = () => (
    <NavBar.NavBar>
        <Logo logowidth='100%' />
        <NavBar.SubNav>
            <NavBar.StyledUL>
                <NavLinks.HowToPlay />
                <NavLinks.Chat />
                <NavLinks.Login />
                <NavLinks.Register />
            </NavBar.StyledUL>
        </NavBar.SubNav>
    </NavBar.NavBar>
)

export default Navigation
