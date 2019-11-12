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
    height: 40vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
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
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    color: black;
`

const CardsDisplay = styled.div`
    width: 100vw;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-bottom: 5px solid black;
`

const CardHeader = styled.h3`
    padding: 2em 0;
`

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
`

const ScoreDisplay = styled.div`
    width: 100vw;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

const ScoreDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-start;
    align-items: center;
    border-right: 1px solid black;
`

const ChatDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const ScoreHeader = styled.h4`
    padding: 1em 0;
`

const ScoreTable = styled.table`
    padding: 2em 0;
    width: 45%;
    font-weight: 500;
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
    padding: 2em 0;
`

const CardBox = styled.div`
    cursor: pointer;
    box-shadow: none;

    :hover {
        box-shadow: 1px 1px 10px 10px grey;
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
    CardsContainer,
    ScoreDiv,
    ChatDiv,
    ScoreHeader,
    ScoreTable,
    ScoreTD,
    CardBox,
    ScoreBox
}
