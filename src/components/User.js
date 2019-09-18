import React from 'react'
import { Link } from 'react-router-dom'

import LoginStyles from '../styledcomponents/LoginStyles'
import Buttons from '../styledcomponents/Buttons'

const { UserBox, RegisterBox, ErrorBox, Heading, Form, Input, Label } = LoginStyles

const User = ({ login, email, password, setValue1, setValue2, returnError }) => {
    return (
        <UserBox>
            <Heading>Already registered? Login here</Heading>
            <Form onSubmit={login}>
                <Label htmlFor='email'>
                    Email :
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        onChange={setValue1}
                        value={email}
                        color='#41448c'
                        required
                    />
                </Label>
                <Label htmlFor='password'>
                    Password :
                    <Input
                        type='password'
                        name='password'
                        id='password'
                        onChange={setValue2}
                        value={password}
                        color='#41448c'
                        required
                    />
                </Label>
                <Buttons.StyledButton
                    width='50%'
                    color='#41448c'
                    style={{
                        marginLeft: 0
                    }}
                >
                    Login
                </Buttons.StyledButton>
                <ErrorBox>{returnError()}</ErrorBox>
            </Form>
            <RegisterBox>
                To register, head over{' '}
                <Link
                    style={{
                        color: '#4e458d',
                        margin: '0 5px'
                    }}
                    to='/register'
                >
                    {' '}
                    here
                </Link>
            </RegisterBox>
        </UserBox>
    )
}

export default User
