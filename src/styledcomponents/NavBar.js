import styled from 'styled-components'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    height: 130px;
    padding: 30px 8%;
`

const SubNav = styled.nav`
    text-transform: uppercase;
    font-size: 0.85em;
`

const StyledUL = styled.ul`
    list-style: none;
`

export default {
    NavBar,
    SubNav,
    StyledUL
}
