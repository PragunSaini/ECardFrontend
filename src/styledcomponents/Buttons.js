import styled from 'styled-components'

const StyledButton = styled.button`
    width: ${props => props.width};
    background-color: ${props => props.color};
    color: #fff;
    height: 50px;
    border-radius: 50px;
    letter-spacing: 0.094em;
    font-size: 0.97em;
    cursor: pointer;
    box-shadow: 10px 10px 14px 1px rgba(00, 00, 00, 0.2);
    text-align: center;
    margin: 0 auto 30px auto;
    transition: all 0.5s;
    text-transform: uppercase;
    position: relative;
    display: block;

    :hover {
        box-shadow: 8px 8px 4px 1px rgba(00, 00, 00, 0.2);
    }
`

const SendButton = styled.button`
    width: 10%;
    height: 100%;
    background-color: #069bb8;
    cursor: pointer;

    :active {
        box-shadow: 10px 10px 14px 1px inset rgba(00, 00, 00, 0.2),
            -10px -10px 14px 1px inset rgba(00, 00, 00, 0.2);
    }
`

export default {
    StyledButton,
    SendButton
}
