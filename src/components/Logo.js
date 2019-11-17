import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/tarotlogo.png'

const StyledLink = styled(Link)`
    color: '#fff';
    text-decoration: none;

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 100px;
        margin-bottom: 0.5em;
    }
`

const StyledDiv = styled.div`
    width: 300px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 500px) {
        width: 100%;
        justify-content: center;
    }
`

const Logo = ({ logowidth }) => {
    return (
        <StyledLink to='/'>
            <StyledDiv>
                <img
                    src={logo}
                    alt='logo'
                    style={{
                        width: logowidth,
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
            </StyledDiv>
        </StyledLink>
    )
}

export default Logo
