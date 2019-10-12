import React from 'react'
import { connect } from 'react-redux'

import { ready, cardPlayed } from '../reducers/gameReducer'

const Game = ({ game, user, ready, cardPlayed }) => {
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

    const playCard = card => {
        console.log(card)
        cardPlayed(card, game.roomid)
    }

    const displayReadyOrNot = () => {
        if (game.player1Ready && game.player2Ready) {
            return (
                <div>
                    <p>Rounds status</p>
                    {displayRounds()}
                    <h1>Your hand</h1>
                    {game.cards.map(card => (
                        <h3
                            onClick={() => playCard(card)}
                            style={{
                                width: '10%',
                                border: '1px solid black',
                                margin: '20px'
                            }}
                        >
                            {card}
                        </h3>
                    ))}
                    <p>{game.result ? game.result : ''}</p>
                </div>
            )
        }
        return (
            <button type='button' onClick={readyToPlay}>
                Ready
            </button>
        )
    }

    const displayRounds = () => {
        const rounds = game.state.map(round => (
            <tr>
                {round.map(stage =>
                    stage == '' ? <td>.</td> : stage == user.uid ? <td>WON</td> : <td>LOST</td>
                )}
            </tr>
        ))
        return <table>{rounds}</table>
    }

    return (
        <div
            style={{
                color: 'black'
            }}
        >
            <div>Connected - {connected()}</div>
            {displayReadyOrNot()}
        </div>
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
