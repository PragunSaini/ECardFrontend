import React, { useState } from 'react'
import { connect } from 'react-redux'
import { store } from 'react-notifications-component'
import { Helmet } from 'react-helmet'
import registerService from '../services/registerService'

import Logo from './Logo'
import NavLinks from './NavLinks'

import NavBar from '../styledcomponents/NavBar'
import Buttons from '../styledcomponents/Buttons'
import Layout from '../styledcomponents/Layout'
import LoginStyles from '../styledcomponents/LoginStyles'

const { LoginSection, RegBox, RegForm, NavBox, Heading, Label, Input, ErrorBox } = LoginStyles

// To register new users
const Register = () => {
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
            await registerService.userRegister(name, email, password)
            store.addNotification({
                title: 'Succesfully registered',
                message: 'You may now login',
                type: 'success',
                insert: 'bottom',
                container: 'bottom-right',
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 1500
                }
            })
            // console.log(`NEW USER REGISTERED`, user)
        } catch (err) {
            errorHandler(err.response.data)
        }
    }

    return (
        <>
            <Layout.BackGround2 />
            <LoginSection>
                <Helmet>
                    <title>E-Card | Register </title>
                </Helmet>
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

const mapDispatchToProps = {}

export default connect(
    null,
    mapDispatchToProps
)(Register)
