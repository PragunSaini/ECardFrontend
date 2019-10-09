import React from 'react'
import { connect } from 'react-redux'

import { ready } from '../reducers/gameReducer'

const Game = ({ game, user, ready }) => {
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

    return (
        <div
            style={{
                color: 'black'
            }}
        >
            <div>Connected - {connected()}</div>
            <button type='button' onClick={readyToPlay}>
                Ready
            </button>
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
    ready
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)
