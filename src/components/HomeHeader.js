import React from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../reducers/userReducer'

import Logo from './Logo'
import NavLinks from './NavLinks'

import NavBar from '../styledcomponents/NavBar'
import Layout from '../styledcomponents/Layout'
import HeaderHeading from '../styledcomponents/HeaderHeading'
import HeaderMain from '../styledcomponents/HeaderMain'
import Buttons from '../styledcomponents/Buttons'

const HomeHeader = ({ user, logoutUser }) => {
    const onLogout = e => {
        e.preventDefault()
        logoutUser()
    }

    const renderUserOrLogin = () => {
        if (user) {
            console.log(user.displayName)
            return (
                <>
                    <NavLinks.User name={user.displayName} />
                    <NavLinks.Logout onLogout={onLogout} />
                </>
            )
        }
        return (
            <>
                <NavLinks.Login />
                <NavLinks.Register />
            </>
        )
    }

    return (
        <Layout.Header>
            <NavBar.NavBar>
                <Logo logowidth='100%' />
                <NavBar.SubNav>
                    <NavBar.StyledUL>
                        <NavLinks.HowToPlay />
                        <NavLinks.Chat />
                        {renderUserOrLogin()}
                    </NavBar.StyledUL>
                </NavBar.SubNav>
            </NavBar.NavBar>
            <HeaderHeading>E-Card : A Real Time Strategy Multiplayer Game</HeaderHeading>
            <HeaderMain.HeaderMain>
                <HeaderMain.MainBox>
                    <HeaderMain.MainHeader>Choose what to do</HeaderMain.MainHeader>
                    <HeaderMain.SubHeader>
                        You can start a game now or go for some real time chatting with other
                        players
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
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeHeader)
