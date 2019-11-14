import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { sendChat } from '../reducers/chatReducer'

import Logo from './Logo'
import NavLinks from './NavLinks'
import LoginStyles from '../styledcomponents/LoginStyles'
import Layout from '../styledcomponents/Layout'
import NavBar from '../styledcomponents/NavBar'
import ChatStyles from '../styledcomponents/ChatStyles'
import Buttons from '../styledcomponents/Buttons'

const { BackGround1 } = Layout
const { LoginSection, NavBox } = LoginStyles
const { SendButton } = Buttons
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
    Message,
    Label,
    Input
} = ChatStyles

const Chat = ({ user, chats, count, sendChat }) => {
    const [chat, setChat] = useState('')

    const returnChats = () => {
        return chats.map(chat => (
            <Message>
                <span style={{ fontWeight: 800 }}>{chat.displayName} : </span> {chat.msg}
            </Message>
        ))
    }

    const sendChatMessage = e => {
        e.preventDefault()
        const msg = chat.trim()
        if (msg.length > 0) {
            sendChat({ msg, displayName: user.displayName })
            setChat('')
        }
    }

    return (
        <div>
            <BackGround1 />
            <LoginSection>
                <Helmet>
                    <title>E-Card | Global Chat </title>
                </Helmet>
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
                            <NavLinks.User name={user.displayName} />
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
                            <OnlineCount>Currently Online : {count}</OnlineCount>
                        </ChatHeadBlock>
                        <Messages>{returnChats()}</Messages>
                    </Chats>
                    <ChatForm>
                        <Label htmlFor='chat'>
                            <Input
                                type='text'
                                id='chat'
                                name='chat'
                                value={chat}
                                onChange={e => setChat(e.target.value)}
                                placeholder='Please type your message here'
                            />
                        </Label>
                        <SendButton onClick={sendChatMessage} type='submit'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='50'
                                height='50'
                                x='0'
                                y='0'
                                enableBackground='new 0 0 459 459'
                                version='1.1'
                                viewBox='0 0 459 459'
                                xmlSpace='preserve'
                            >
                                <path d='M459 216.75L280.5 38.25v102c-178.5 25.5-255 153-280.5 280.5C63.75 331.5 153 290.7 280.5 290.7v104.55L459 216.75z' />
                            </svg>
                        </SendButton>
                    </ChatForm>
                </ChatBox>
            </LoginSection>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chats: state.chat,
        user: state.user,
        count: state.count
    }
}

const mapDispatchToProps = {
    sendChat
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
