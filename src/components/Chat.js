import React, { useState } from 'react'
import { connect } from 'react-redux'

import { sendChat } from '../reducers/chatReducer'

import LoginStyles from '../styledcomponents/LoginStyles'
import Buttons from '../styledcomponents/Buttons'

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
            <LoginStyles.Form style={{ color: 'black', background: 'grey' }}>
                <LoginStyles.Label htmlFor='chat'>
                    Enter chat here:
                    <LoginStyles.Input
                        name='chat'
                        id='chat'
                        value={chat}
                        onChange={e => setChat(e.target.value)}
                    />
                </LoginStyles.Label>
                <Buttons.StyledButton type='submit' onClick={sendChatMessage}>
                    Send chat
                </Buttons.StyledButton>
            </LoginStyles.Form>
            <div>
                <ul
                    style={{
                        color: 'black'
                    }}
                >
                    <li>Chats here</li>
                    {returnChats()}
                </ul>
            </div>
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
