import React from 'react'

import NavBar from '../styledcomponents/NavBar'

const { StyledLI, StyledLink } = NavBar

const Chat = () => (
    <StyledLI>
        <StyledLink to='/chat'>Chat</StyledLink>
    </StyledLI>
)

const HowToPlay = () => (
    <StyledLI>
        <StyledLink to='/howtoplay'>How to play</StyledLink>
    </StyledLI>
)

const Login = () => (
    <StyledLI>
        <StyledLink to='/login'>Login</StyledLink>
    </StyledLI>
)

const Register = () => (
    <StyledLI>
        <StyledLink to='/register'>Register</StyledLink>
    </StyledLI>
)

const User = ({ name }) => (
    <StyledLI>
        <StyledLink to='/user'>{name} 😄</StyledLink>
    </StyledLI>
)

export default {
    Chat,
    HowToPlay,
    Login,
    Register,
    User
}
