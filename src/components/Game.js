/* eslint "react-hooks/exhaustive-deps": "off", "eqeqeq": "off" */

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { ready, cardPlayed, gameOver, eraseGameRoom } from '../reducers/gameReducer'
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
    ChatInput,
    NotifyDiv,
    ScoreArrow,
    LastMoves,
    MovesDiv
} = GameStyles
const { StyledButton, SendButton } = Buttons

const Game = ({
    game,
    user,
    roomchat,
    ready,
    cardPlayed,
    sendRoomChat,
    eraseGameRoom,
    gameOver,
    history
}) => {
    const [buttoncol, setbuttoncol] = useState('rgba(255, 0, 0, 0.7)')
    const [chatmsg, setChatmsg] = useState('')
    const [roundDisplay, setRoundDisplay] = useState(true)
    const [high, setHigh] = useState(false)

    useEffect(() => {
        if (!game.gameOver && game.cards && game.cards.length == 5 && !roundDisplay) {
            setRoundDisplay(true)
        } else {
            setRoundDisplay(false)
        }
        setHigh(false)
        if (document.querySelector('.cards-container')) {
            const cards = document.querySelector('.cards-container').children
            for (let i = 0; i < cards.length; i += 1) {
                cards[i].style.boxShadow = 'none'
            }
        }
    }, [game])

    const readyToPlay = () => {
        ready(game.roomid)
    }

    const playCard = (card, id) => {
        console.log(card)
        cardPlayed(card, game.roomid)
        if (!high) {
            document.querySelector(`#card${id}`).style.boxShadow = '1px 1px 10px 10px grey'
            setHigh(true)
        }
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

    const returnCard = move => {
        if (!move) {
            return null
        }
        if (move == 'E') {
            return <Emperor width='30px' />
        }
        if (move == 'C') {
            return <Citizen width='30px' />
        }
        return <Slave width='30px' />
    }

    const displayReadyOrNot = () => {
        if (game.player1Ready && game.player2Ready) {
            return (
                <GameDiv>
                    <LastMoves>
                        <CardHeader style={{ textAlign: 'center', padding: '0 0 0.5em 0' }}>
                            Last Moves:
                        </CardHeader>
                        <MovesDiv>
                            <strong>You :</strong>
                            {returnCard(game.mylastmove)}
                            <strong>-</strong>
                            {returnCard(game.opplastmove)}
                            <strong>: Opponent</strong>
                        </MovesDiv>
                    </LastMoves>
                    {displayDetails()}
                    <CardsDisplay>
                        <CardHeader>
                            {game.gameOver ? 'Game Over' : 'Game in Progress...'}
                        </CardHeader>
                        {game.gameOver ? gameIsOver() : gameNotOver()}
                    </CardsDisplay>

                    <ScoreDisplay>
                        <ScoreDiv>
                            <ScoreHeader>
                                <u>Current Score</u>
                            </ScoreHeader>
                            {displayRounds()}
                            <ScoreBox>
                                <ScoreArrow>
                                    <u>Score</u>
                                </ScoreArrow>
                                <ScoreArrow>You -&gt; {game.myscore}</ScoreArrow>
                                <ScoreArrow>Opponent -&gt; {game.oppscore}</ScoreArrow>
                            </ScoreBox>
                        </ScoreDiv>
                        <ChatDiv>
                            <ChatHeader>
                                <u>Chat with your opponent</u>
                            </ChatHeader>
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
                    <ReadyMessage style={{ textAlign: 'center' }}>
                        Your game room code is {game.roomid}
                    </ReadyMessage>
                    <ReadyMessage style={{ textAlign: 'center' }}>
                        Tell your opponent to enter it in the homepage and Join Game to play with
                        you
                    </ReadyMessage>
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

    const displayDetails = () => {
        if (roundDisplay) {
            setTimeout(() => {
                setRoundDisplay(false)
            }, 2000)
            return (
                <NotifyDiv>
                    {game.lastWon ? (
                        game.lastWon == user.uid ? (
                            <h3>You won the last stage</h3>
                        ) : (
                            <h3>You lost the last stage</h3>
                        )
                    ) : null}
                    <h2>
                        Round {game.round} : Stage {game.stage}
                    </h2>
                    <h4>You play as the {game.emperor == user.uid ? 'Emperor' : 'Slave'}</h4>
                </NotifyDiv>
            )
        }
        return null
    }

    const gameNotOver = () => (
        <>
            <CardHeader>Your Hand</CardHeader>
            <CardsContainer className='cards-container'>
                {game.cards.map((card, ind) => {
                    // eslint-disable-next-line
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
        if (!game.player1UID || !game.player2UID) {
            return (
                <>
                    <BigCardHeader>Your opponent left, you WIN !!</BigCardHeader>
                    <StyledButton
                        onClick={() => {
                            history.push('/')
                            gameOver()
                            eraseGameRoom(game.roomid)
                        }}
                        color='#41448c'
                        width='45%'
                    >
                        Return to home page
                    </StyledButton>
                </>
            )
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
                        eraseGameRoom(game.roomid)
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
    gameOver,
    eraseGameRoom
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Game)
)
