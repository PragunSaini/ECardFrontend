import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/tarotlogo.png'

const StyledLink = styled(Link)`
    color: '#fff';
    text-decoration: none;
`

const Logo = () => {
    return (
        <StyledLink to='/'>
            <div
                className='logo'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '300px'
                }}
            >
                <img
                    src={logo}
                    alt='logo'
                    style={{
                        width: '100%',
                        maxWidth: '70px',
                        height: 'auto',
                        display: 'inline-block',
                        marginRight: '20px'
                    }}
                />
                <div
                    className='logo-text'
                    style={{
                        display: 'inline-block',
                        fontSize: '1em',
                        fontWeight: 900,
                        color: 'white'
                    }}
                >
                    EmperorCard
                </div>
            </div>
        </StyledLink>
    )
}

export default Logo
