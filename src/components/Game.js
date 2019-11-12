import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ready, cardPlayed } from '../reducers/gameReducer'

import { Emperor, Citizen, Slave } from './Cards'

import Layout from '../styledcomponents/Layout'
import GameStyles from '../styledcomponents/Game'
import Buttons from '../styledcomponents/Buttons'

const { BackGround1, BackGround2 } = Layout
const {
    ReadyBox,
    ButtonDiv,
    ReadyMessage,
    GamePage,
    GameDiv,
    CardsDisplay,
    ScoreDisplay,
    CardHeader,
    CardsContainer,
    ScoreDiv,
    ChatDiv,
    ScoreHeader,
    ScoreTable,
    ScoreTD,
    CardBox,
    ScoreBox
} = GameStyles
const { StyledButton } = Buttons

const Game = ({ game, user, ready, cardPlayed }) => {
    const [buttoncol, setbuttoncol] = useState('rgba(255, 0, 0, 0.7)')
    const connected = () => {
        let count = 0
        if (game.player1SocketID) {
            count = 1
        }
        if (game.player2SocketID) {
            count += 1
        }
        return count
    }

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

    const displayReadyOrNot = () => {
        if (game.player1Ready && game.player2Ready) {
            return (
                <GameDiv>
                    <CardsDisplay>
                        <CardHeader>Game in Progress...</CardHeader>
                        <CardHeader>Your Hand</CardHeader>
                        <CardsContainer>
                            {game.cards.map(card => {
                                const key = Math.floor(Math.random() * 1000) + 1
                                return <Card key={key} card={card} playCard={playCard} id={key} />
                            })}
                        </CardsContainer>
                    </CardsDisplay>

                    <ScoreDisplay>
                        <ScoreDiv>
                            <ScoreHeader>Current Score</ScoreHeader>
                            {displayRounds()}
                            <ScoreBox>
                                <div>
                                    <u>Score</u>
                                </div>
                                <div>You -> 100</div>
                                <div>Opponent -> 200</div>
                            </ScoreBox>
                        </ScoreDiv>
                        <ChatDiv>CHATTING YO</ChatDiv>
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
        user: state.user
    }
}

const mapDispatchToProps = {
    ready,
    cardPlayed
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)
