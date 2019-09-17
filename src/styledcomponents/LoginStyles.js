import styled from 'styled-components'

const LoginSection = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    flex-direction: column;
`

const NavBox = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-around;
`

const LoginBox = styled.div`
    width: 75%;
    height: 75%;
    background: #f2f2f2;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #222;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: black;
`

const GuestBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const UserBox = styled.div`
    width: 50%;
    border-right: 1px solid #909090;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const Heading = styled.h2`
    font-size: 2em;
    margin: 30px auto 20px;
`

export default {
    LoginSection,
    LoginBox,
    NavBox,
    GuestBox,
    UserBox,
    Heading
}
