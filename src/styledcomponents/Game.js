import styled from 'styled-components'

const ReadyBox = styled.div`
    width: 100vw;
    height: 100vh;
    color: black;
    background: rgba(255, 255, 255, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonDiv = styled.div`
    width: 50%;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (max-width: 1050px) {
        width: 80%;
    }
`

const ReadyMessage = styled.div`
    font-size: 2em;
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GamePage = styled.div`
    position: absolute;
    background: rgba(255, 255, 255, 0.85);
    width: 100vw;
    height: 100vh;
    z-index: -1;
`

const GameDiv = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    color: black;

    @media screen and (max-width: 1050px) {
        height: auto;
    }
`

const CardsDisplay = styled.div`
    width: 100vw;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-bottom: 5px solid black;
    background: #fae7ed;

    @media screen and (max-width: 1050px) {
        height: auto;
        padding-bottom: 2em;
    }

    @media screen and (max-width: 768px) {
        align-items: start;
        padding-left: 1em;
    }

    @media screen and (max-width: 500px) {
        padding-top: 100px;
        align-items: center;
    }
`

const CardHeader = styled.h3`
    padding: 2em 0;

    @media screen and (max-width: 1050px) {
        padding: 1.25em 0;
    }
`

const BigCardHeader = styled.h3`
    padding: 1em 0;
    font-size: 1.25em;
    font-weight: bold;
`

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
`

const ScoreDisplay = styled.div`
    width: 100vw;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    @media screen and (max-width: 1050px) {
        flex-direction: column;
        // height: auto;
    }
`

const ScoreDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-start;
    align-items: center;
    border-right: 1px solid black;
    background: #fae7ed;

    @media screen and (max-width: 1050px) {
        width: 100%;
        padding: 0 2.5% 1em 2.5%;
        flex-direction: row;
        justify-content: space-between;
        border-right: none;
        border-bottom: 2px solid black;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
        justify-content: start;
    }
`

const ScoreHeader = styled.h4`
    padding: 1em 0;

    @media screen and (max-width: 1050px) {
        font-size: 1.5em;
    }
`

const ScoreTable = styled.table`
    padding: 2em 0;
    width: 45%;
    font-weight: 500;

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`

const ScoreTD = styled.td`
    border: 1px solid black;
    width: 20%;
    height: 40px;
    text-align: center;
`

const ScoreBox = styled.div`
    font-weight: 2em;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    padding: 1em 0;
`

const CardBox = styled.div`
    cursor: pointer;
    box-shadow: none;

    :hover {
        box-shadow: 1px 1px 10px 10px grey;
    }
`

const ChatDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background: #fae7ed;

    @media screen and (max-width: 1050px) {
        width: 100%;
        height: 40vh;
    }
`

const ChatHeader = styled.h4`
    padding: 1em 0 1em 1em;
    height: 10%;
`

const ChatBox = styled.ul`
    height: 80%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 0 0.5em 1em 0.5em;
    width: 100%;
    overflow: auto;
`

const ChatLI = styled.li`
    font-size: 1em;
    text-align: left;
    padding: 0.3em 0;
`

const MessageDiv = styled.form`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

const ChatInput = styled.input`
    width: 90%;
    font-size: 0.95em;
    padding: 0 0.5em;
    border-top: 0.5px solid black;
`

const NotifyDiv = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    z-index: 15;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadein 0.3s ease-in;
    font-size: 1.5em;
    box-shadow: 2px 2px 20px 2px black, -2px -2px 20px 2px black;

    @keyframes fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`

const ScoreArrow = styled.div`
    font-size: 1.5em;
    padding: 0.5em 0;
    font-weight: bold;
`

const LastMoves = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    padding: 0.5em 0.5em 0 0;

    @media screen and (max-width: 500px) {
        right: 50%;
        transform: translateX(50%);
    }
`

const MovesDiv = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    > {
        margin: 0 0.5em;
    }
`

export default {
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
}
