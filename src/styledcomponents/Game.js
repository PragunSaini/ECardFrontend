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

export default {
    ReadyBox,
    ButtonDiv,
    ReadyMessage
}
