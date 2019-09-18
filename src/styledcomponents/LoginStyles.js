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
    height: 65%;
    background: #f2f2f2;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #222;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: black;
`

const RegBox = styled.div`
    width: 50%;
    height: 65%;
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
    font-size: 1.5em;
    margin: 30px auto 20px;
`

const Form = styled.form`
    margin: 30px auto 20px;
    width: 90%;
    text-align: left;
    padding: 0 20px 40px;
    border-bottom: 1px solid #222;
`

const RegForm = styled.div`
    width: 90%;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const Label = styled.label`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin: 20px auto;
`

const Input = styled.input`
    margin: 10px 0;
    width: 100%;
    height: 50px;
    font-size: 0.8em;
    padding-left: 5px;
    transition: all 0.5s;

    :focus {
        border-bottom: 1px solid ${props => props.color};
    }
`

const ErrorBox = styled.div`
    display: flex;
    font-size: 0.9em;
    color: #f00;
    transition: all 0.5s;
`

const RegisterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.2em;
`

export default {
    LoginSection,
    LoginBox,
    NavBox,
    GuestBox,
    UserBox,
    Heading,
    Form,
    Input,
    Label,
    ErrorBox,
    RegisterBox,
    RegBox,
    RegForm
}
