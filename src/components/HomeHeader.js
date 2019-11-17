import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { store } from 'react-notifications-component'

import { logoutUser } from '../reducers/userReducer'
import { createNewGameRoom, joinGameRoom } from '../reducers/gameReducer'

import Logo from './Logo'
import NavLinks from './NavLinks'

import NavBar from '../styledcomponents/NavBar'
import Layout from '../styledcomponents/Layout'
import HeaderHeading from '../styledcomponents/HeaderHeading'
import HeaderMain from '../styledcomponents/HeaderMain'
import Buttons from '../styledcomponents/Buttons'
import LoginStyles from '../styledcomponents/LoginStyles'

const HomeHeader = ({ history, user, logoutUser, createNewGameRoom, joinGameRoom }) => {
    const [gameid, setGameid] = useState('')

    const onLogout = e => {
        e.preventDefault()
        store.addNotification({
            title: 'Bye',
            message: 'Succesfully logged out',
            type: 'warning',
            insert: 'bottom',
            container: 'bottom-right',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
                duration: 1500
            }
        })
        logoutUser()
    }

    const renderUserOrLogin = () => {
        if (user) {
            // console.log(user.displayName)
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

    const joinGame = e => {
        e.preventDefault()
        if (!user) {
            history.push('/login')
        } else {
            joinGameRoom(parseInt(gameid, 10))
        }
    }

    const startGame = e => {
        e.preventDefault()
        if (!user) {
            history.push('/login')
        } else {
            createNewGameRoom()
        }
    }

    return (
        <Layout.Header>
            <NavBar.NavBar>
                <Logo logowidth='100%' />
                <NavBar.SubNav>
                    <NavBar.StyledUL>
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
                        <Buttons.StyledButton
                            color='#00c9b7'
                            width='180px'
                            onClick={() => {
                                history.push('/chat')
                            }}
                        >
                            Join Chat
                        </Buttons.StyledButton>

                        <Buttons.StyledButton color='#845ec2' width='180px' onClick={startGame}>
                            Start a Game
                        </Buttons.StyledButton>

                        <LoginStyles.Label
                            htmlFor='joingame'
                            style={{
                                alignItems: 'center',
                                width: '80%'
                            }}
                        >
                            Join a game (enter the game id here)
                            <LoginStyles.Input
                                type='text'
                                name='joingame'
                                id='joingame'
                                value={gameid}
                                onChange={e => {
                                    setGameid(e.target.value)
                                }}
                                style={{
                                    letterSpacing: '0.5em',
                                    textAlign: 'center',
                                    fontSize: '1.2em'
                                }}
                            />
                        </LoginStyles.Label>

                        <Buttons.StyledButton color='#4164a8' width='180px' onClick={joinGame}>
                            Join Game
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
    logoutUser,
    createNewGameRoom,
    joinGameRoom
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomeHeader)
)
