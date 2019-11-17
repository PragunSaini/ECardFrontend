import styled from 'styled-components'

const ChatBox = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    background: rgba(255, 255, 255, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: start;

    @media screen and (max-width: 500px) {
        height: calc(100vh - 50px);
        margin-top: 50px;
    }
`

const Chats = styled.div`
    width: 100%;
    height: 90%;
    padding: 20px;
    color: black;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: start;

    @media screen and (max-width: 500px) {
        height: 95%;
    }
`
const ChatHeadBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 20px;
`

const ChatHeadBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-end;
`

const ChatHead = styled.h2`
    font-size: 1.2em;
    font-weight: 700;
    margin: 0 10px;
`

const ChatDesc = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    margin: 0 10px;

    @media screen and (max-width: 740px) {
        display: none;
    }
`

const OnlineCount = styled.div`
    font-size: 0.8em;
    font-weight: 500;
    margin: 0 10px;
    justify-self: end;
`

const Messages = styled.ul`
    width: 100%;
    margin: 10px 10px;
    list-style: none;
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: end;
    flex-grow: 1;
    overflow: auto;
`

const Message = styled.li`
    padding: 5px 0;
`

const ChatForm = styled.form`
    background: rgba(255, 255, 255, 1);
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: start;

    @media screen and (max-width: 500px) {
        height: 5%;
    }
`

const Label = styled.label`
    width: 90%;
    height: 100%;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    resize: none;
    padding: 5px;
    font-size: 1.5em;

    @media screen and (max-width: 500px) {
        font-size: 1em;
    }
`

export default {
    ChatBox,
    Chats,
    ChatHeadBlock,
    ChatHeadBox,
    ChatHead,
    ChatDesc,
    OnlineCount,
    Messages,
    Message,
    ChatForm,
    Label,
    Input
}
