import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { ready, cardPlayed, gameOver } from '../reducers/gameReducer'
import { sendRoomChat } from '../reducers/roomchatReducer'

import { Emperor, Citizen, Slave } from './Cards'

import Layout from '../styledcomponents/Layout'
import GameStyles from '../styledcomponents/Game'
import Buttons from '../styledcomponents/Buttons'

const { BackGround2 } = Layout
const {
    ReadyBox,
    ButtonDiv,
    ReadyMessage,
    GamePage,
    GameDiv,
    CardsDisplay,
    ScoreDisplay,
    CardHeader,
    BigCardHeader,
    CardsContainer,
    ScoreDiv,
    ChatDiv,
    ScoreHeader,
    ScoreTable,
    ScoreTD,
    CardBox,
    ScoreBox,
    ChatHeader,
    ChatBox,
    ChatLI,
    MessageDiv,
    ChatInput
} = GameStyles
const { StyledButton, SendButton } = Buttons

const Game = ({ game, user, roomchat, ready, cardPlayed, sendRoomChat, gameOver, history }) => {
    const [buttoncol, setbuttoncol] = useState('rgba(255, 0, 0, 0.7)')
    const [chatmsg, setChatmsg] = useState('')

    // const connected = () => {
    //     let count = 0
    //     if (game.player1SocketID) {
    //         count = 1
    //     }
    //     if (game.player2SocketID) {
    //         count += 1
    //     }
    //     return count
    // }

    const readyToPlay = () => {
        ready(game.roomid)
    }

    const playCard = (card, id) => {
        console.log(card)
        cardPlayed(card, game.roomid)
        document.querySelector(`#card${id}`).style.boxShadow = '1px 1px 10px 10px grey'
    }

    const colorChanger = () => {
        if (buttoncol == 'rgba(255, 0, 0, 0.7)') {
            setbuttoncol('rgba(0, 255, 100, 0.7)')
            readyToPlay()
        }
    }

    const getChats = () => {
        return roomchat.map(chat => (
            <ChatLI>
                <span style={{ fontWeight: 800 }}>{chat.displayName} : </span> {chat.msg}
            </ChatLI>
        ))
    }

    const sendChat = e => {
        e.preventDefault()
        const msg = chatmsg.trim()
        if (msg.length > 0) {
            sendRoomChat({ msg, displayName: user.displayName })
        }
        setChatmsg('')
    }

    const displayReadyOrNot = () => {
        if (game.player1Ready && game.player2Ready) {
            return (
                <GameDiv>
                    <CardsDisplay>
                        <CardHeader>
                            {game.gameOver ? 'Game Over' : 'Game in Progress...'}
                        </CardHeader>
                        {game.gameOver ? gameIsOver() : gameNotOver()}
                    </CardsDisplay>

                    <ScoreDisplay>
                        <ScoreDiv>
                            <ScoreHeader>Current Score</ScoreHeader>
                            {displayRounds()}
                            <ScoreBox>
                                <div>
                                    <u>Score</u>
                                </div>
                                <div>You -&gt; {game.myscore}</div>
                                <div>Opponent -&gt; {game.oppscore}</div>
                            </ScoreBox>
                        </ScoreDiv>
                        <ChatDiv>
                            <ChatHeader>Chat with your opponent</ChatHeader>
                            <ChatBox>{getChats()}</ChatBox>
                            <MessageDiv>
                                <ChatInput
                                    type='text'
                                    name='roomchat'
                                    id='roomchat'
                                    value={chatmsg}
                                    onChange={e => setChatmsg(e.target.value)}
                                />
                                <SendButton onClick={sendChat} type='submit'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='25'
                                        height='25'
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
                            </MessageDiv>
                        </ChatDiv>
                    </ScoreDisplay>
                </GameDiv>
            )
        }
        return (
            <ReadyBox>
                <ButtonDiv>
                    <ReadyMessage>Waiting for both players to be ready ...</ReadyMessage>
                    <StyledButton
                        color={buttoncol}
                        width='100%'
                        onClick={() => {
                            colorChanger()
                        }}
                    >
                        Ready !
                    </StyledButton>
                </ButtonDiv>
            </ReadyBox>
        )
    }

    const gameNotOver = () => (
        <>
            <CardHeader>Your Hand</CardHeader>
            <CardsContainer>
                {game.cards.map((card, ind) => {
                    return <Card key={ind} card={card} playCard={playCard} id={ind} />
                })}
            </CardsContainer>
        </>
    )

    const gameIsOver = () => {
        let result = ''
        if (game.myscore > game.oppscore) {
            result = 'YOU WON !!'
        } else if (game.myscore < game.oppscore) {
            result = 'YOU LOST'
        } else {
            result = 'IT WAS A DRAW'
        }
        return (
            <>
                <BigCardHeader>{result}</BigCardHeader>
                <BigCardHeader>YOU : {game.myscore}</BigCardHeader>
                <BigCardHeader>Opponent : {game.oppscore}</BigCardHeader>
                <StyledButton
                    onClick={() => {
                        history.push('/')
                        gameOver()
                    }}
                    color='#41448c'
                    width='45%'
                >
                    Return to home page
                </StyledButton>
            </>
        )
    }

    const displayRounds = () => {
        const rounds = game.state.map(round => (
            <tr>
                {round.map(stage =>
                    stage == '' ? (
                        <ScoreTD> - </ScoreTD>
                    ) : stage == user.uid ? (
                        <ScoreTD>WON</ScoreTD>
                    ) : (
                        <ScoreTD>LOST</ScoreTD>
                    )
                )}
            </tr>
        ))
        return <ScoreTable>{rounds}</ScoreTable>
    }

    return (
        <div>
            <BackGround2 />
            <GamePage />
            {displayReadyOrNot()}
        </div>
    )
}

const Card = ({ id, card, playCard }) => {
    return (
        <CardBox id={`card${id}`} onClick={() => playCard(card, id)}>
            {card == 'E' ? (
                <Emperor height='50%' />
            ) : card == 'C' ? (
                <Citizen height='50%' />
            ) : (
                <Slave height='50%' />
            )}
        </CardBox>
    )
}

const mapStateToProps = state => {
    return {
        game: state.game,
        user: state.user,
        roomchat: state.roomchat
    }
}

const mapDispatchToProps = {
    ready,
    cardPlayed,
    sendRoomChat,
    gameOver
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Game)
)
