import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    height: 130px;
    width: 100%;
    padding: 30px 8%;
`

const SubNav = styled.nav`
    text-transform: uppercase;
    font-size: 0.85em;
`

const StyledUL = styled.ul`
    list-style: none;
`

const StyledLink = styled(Link)`
    letter-spacing: 2px;
    transition: color 0.2s ease;
    padding: 3px 0;
    margin-bottom: 10px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #fff;
    font-size: 1em;
    font-weight: 400;

    ::before,
    ::after {
        content: '';
        position: absolute;
        top: calc(100% + 5px);
        width: 0;
        right: 0;
        height: 3px;
    }

    ::before {
        transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
        background: #845ec2;
    }

    ::after {
        transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: #693680;
    }

    :hover {
        font-weight: 500;
        transform: scale(1.01);

        ::before {
            z-index: 2;
        }
        ::after {
            background: #2fffad;
            width: 100%;
            left: 0;
        }
    }
`

const StyledLI = styled.li`
    margin-left: 20px;
    display: inline-block;
`

export default {
    NavBar,
    SubNav,
    StyledUL,
    StyledLink,
    StyledLI
}
