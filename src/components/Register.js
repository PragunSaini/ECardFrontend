import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import registerService from '../services/registerService'

import Logo from './Logo'
import NavLinks from './NavLinks'

import NavBar from '../styledcomponents/NavBar'
import Buttons from '../styledcomponents/Buttons'
import Layout from '../styledcomponents/Layout'
import LoginStyles from '../styledcomponents/LoginStyles'

const { LoginSection, RegBox, RegForm, NavBox, Heading, Label, Input, ErrorBox } = LoginStyles

// To register new users
const Register = props => {
    // Send data to server for registration
    const register = async e => {
        e.preventDefault()
        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        try {
            const user = await registerService.userRegister(username, email, password)
            console.log(`NEW USER REGISTERED`, user)
            props.history.push('/login')
        } catch (error) {}
    }

    return (
        <>
            {/* <form onSubmit={register}>
                <label htmlFor='username'>
                    Username :
                    <input type='text' name='username' id='username' />
                </label>
                <label htmlFor='email'>
                    Email :
                    <input type='email' name='email' id='email' />
                </label>
                <label htmlFor='password'>
                    Password :
                    <input type='password' id='password' name='password' />
                </label>
                <button type='submit'>Register</button>
            </form> */}
            <Layout.BackGround2 />
            <LoginSection>
                <NavBox>
                    <NavBar.NavBar>
                        <Logo logowidth='100%' />
                        <NavBar.SubNav>
                            <NavBar.StyledUL>
                                <NavLinks.Login />
                            </NavBar.StyledUL>
                        </NavBar.SubNav>
                    </NavBar.NavBar>
                </NavBox>
                <RegBox>
                    <Heading
                        style={{
                            height: '30px'
                        }}
                    >
                        Register an account
                    </Heading>
                    <RegForm>
                        <Label htmlFor='display'>
                            Display Name :
                            <Input type='text' id='display' name='display' />
                        </Label>
                        <Label htmlFor='display'>
                            Display Name :
                            <Input type='text' id='display' name='display' />
                        </Label>
                        <Label htmlFor='display'>
                            Display Name :
                            <Input type='text' id='display' name='display' />
                        </Label>
                        <ErrorBox
                            style={{
                                marginBottom: '20px'
                            }}
                        >
                            WOWjfsdjkfkdsgfkjdsgdsukOWs
                        </ErrorBox>
                        <Buttons.StyledButton width='50%' color='black'>
                            Ohaio
                        </Buttons.StyledButton>
                    </RegForm>
                </RegBox>
            </LoginSection>
        </>
    )
}

export default withRouter(Register)
