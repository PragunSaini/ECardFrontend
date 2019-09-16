import React from 'react'

import Logo from './Logo'
import NavLinks from './NavLinks'

import Layout from '../styledcomponents/Layout'
import NavBar from '../styledcomponents/NavBar'
import HeaderHeading from '../styledcomponents/HeaderHeading'
import HeaderMain from '../styledcomponents/HeaderMain'
import Buttons from '../styledcomponents/Buttons'

const HomeHeader = () => (
    <Layout.Header>
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
        <HeaderHeading>E-Card : A Real Time Strategy Multiplayer Game</HeaderHeading>
        <HeaderMain.HeaderMain>
            <HeaderMain.MainBox>
                <HeaderMain.MainHeader>Choose what to do</HeaderMain.MainHeader>
                <HeaderMain.SubHeader>
                    You can start a game now or go for some real time chatting with other players
                </HeaderMain.SubHeader>
                <form type='get'>
                    <Buttons.StyledButton color='#845ec2' width='180px'>
                        Start a Game
                    </Buttons.StyledButton>
                    <Buttons.StyledButton color='#00c9b7' width='180px'>
                        Join Chat
                    </Buttons.StyledButton>
                </form>
            </HeaderMain.MainBox>
        </HeaderMain.HeaderMain>
    </Layout.Header>
)

export default HomeHeader
