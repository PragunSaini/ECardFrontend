import React, { useState } from 'react'
import { connect } from 'react-redux'

import { sendChat } from '../reducers/chatReducer'

import Logo from './Logo'
import NavLinks from './NavLinks'
import LoginStyles from '../styledcomponents/LoginStyles'
// import Buttons from '../styledcomponents/Buttons'
import Layout from '../styledcomponents/Layout'
import NavBar from '../styledcomponents/NavBar'
import ChatStyles from '../styledcomponents/ChatStyles'

const { BackGround1 } = Layout
const { LoginSection, NavBox } = LoginStyles
const {
    ChatBox,
    Chats,
    ChatForm,
    ChatHeadBlock,
    ChatHeadBox,
    ChatHead,
    ChatDesc,
    OnlineCount,
    Messages,
    Message
} = ChatStyles

const Chat = ({ chats, sendChat }) => {
    const [chat, setChat] = useState('')

    const returnChats = () => {
        return chats.map(chat => <li key={new Date().getTime()}>{chat}</li>)
    }

    const sendChatMessage = e => {
        e.preventDefault()
        const msg = chat.trim()
        if (msg.length > 0) {
            sendChat(msg)
            setChat('')
        }
    }

    return (
        <>
            <BackGround1 />
            <LoginSection>
                <NavBox
                    style={{
                        height: '80px'
                    }}
                >
                    <NavBar.NavBar
                        style={{
                            height: '80px'
                        }}
                    >
                        <Logo logowidth='30px' />
                        <NavBar.StyledUL>
                            <NavLinks.HowToPlay />
                            <NavLinks.User />
                        </NavBar.StyledUL>
                    </NavBar.NavBar>
                </NavBox>

                <ChatBox>
                    <Chats>
                        <ChatHeadBlock>
                            <ChatHeadBox>
                                <ChatHead>Global Chat</ChatHead>
                                <ChatDesc>Chat with players currently online</ChatDesc>
                            </ChatHeadBox>
                            <OnlineCount>Currently Online : {0}</OnlineCount>
                        </ChatHeadBlock>
                        <Messages>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>Pragun: Asshole</Message>
                            <Message>
                                <span style={{ fontWeight: 800 }}>Pragun : </span> Asshole
                            </Message>
                            <Message>
                                Pragun: Asshole you really think you are worhtless you peivce
                                agijdsigndskngiodsnkammk sdjnfjdsafjdjfn dsjknfjdsnjgn dsjgnjds
                                ngjdsnjgd sjgljdsnglkdsnglkds nsnjfnjdsnfjndsjfnjsd askfdske
                                dsighidsgdgnsigdsij
                            </Message>
                        </Messages>
                    </Chats>
                    <ChatForm />
                </ChatBox>
            </LoginSection>
        </>
    )
}

const mapStateToProps = state => {
    return {
        chats: state.chat
    }
}

const mapDispatchToProps = {
    sendChat
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
