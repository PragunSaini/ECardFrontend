import React from 'react'

import LoginStyles from '../styledcomponents/LoginStyles'
import Buttons from '../styledcomponents/Buttons'

const { GuestBox, Heading, Form, Input, Label } = LoginStyles

const Guest = ({ guest, setValue3, guestLogin }) => {
    return (
        <GuestBox>
            <Heading>Play as Guest</Heading>
            <Form
                onSubmit={guestLogin}
                style={{
                    borderBottom: 'none'
                }}
            >
                <Label htmlFor='guest'>
                    Enter display name :
                    <Input
                        type='text'
                        name='guest'
                        id='guest'
                        value={guest}
                        onChange={setValue3}
                        color='#f37378'
                        required
                    />
                </Label>
                <Buttons.StyledButton
                    width='50%'
                    color='#f37378'
                    style={{
                        marginLeft: 0
                    }}
                >
                    Guest Login
                </Buttons.StyledButton>
            </Form>
        </GuestBox>
    )
}

export default Guest
