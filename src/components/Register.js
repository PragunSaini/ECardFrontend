import React, { useState } from 'react'
import { connect } from 'react-redux'
import registerService from '../services/registerService'
import { notify } from '../reducers/notificationReducer'

import Logo from './Logo'
import NavLinks from './NavLinks'

import NavBar from '../styledcomponents/NavBar'
import Buttons from '../styledcomponents/Buttons'
import Layout from '../styledcomponents/Layout'
import LoginStyles from '../styledcomponents/LoginStyles'

const { LoginSection, RegBox, RegForm, NavBox, Heading, Label, Input, ErrorBox } = LoginStyles

// To register new users
const Register = ({ notify }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useState(() => {
        setName('')
        setEmail('')
        setPassword('')
        setError('')
    }, [])

    const returnError = () => (error !== '' ? `* ${error}` : '')

    const errorHandler = err => {
        switch (err.code) {
            case 'auth/invalid-password':
                setError('The password must be atleast 6 characters')
                break
            case 'auth/email-already-exists':
                setError('The email address is already in use by another account')
                break
            default:
                setError('')
        }
    }

    // Send data to server for registration
    const register = async e => {
        e.preventDefault()
        try {
            const user = await registerService.userRegister(name, email, password)
            notify('Succesfully registered, please login', 3)
            console.log(`NEW USER REGISTERED`, user)
        } catch (err) {
            errorHandler(err.response.data)
        }
    }

    return (
        <>
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
                            <Input
                                type='text'
                                id='display'
                                name='display'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                color='#7d4992'
                                required
                            />
                        </Label>
                        <Label htmlFor='display'>
                            Email ID :
                            <Input
                                type='email'
                                id='display'
                                name='display'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                color='#7d4992'
                                required
                            />
                        </Label>
                        <Label htmlFor='display'>
                            Password :
                            <Input
                                type='password'
                                id='display'
                                name='display'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                color='#7d4992'
                                required
                            />
                        </Label>
                        <ErrorBox
                            style={{
                                marginBottom: '20px'
                            }}
                        >
                            {returnError()}
                        </ErrorBox>
                        <Buttons.StyledButton
                            onClick={register}
                            type='submit'
                            width='50%'
                            color='#7d4992'
                        >
                            Register
                        </Buttons.StyledButton>
                    </RegForm>
                </RegBox>
            </LoginSection>
        </>
    )
}

const mapDispatchToProps = {
    notify
}

export default connect(
    null,
    mapDispatchToProps
)(Register)
