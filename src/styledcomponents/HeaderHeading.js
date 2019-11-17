import styled from 'styled-components'

const HeaderHeading = styled.h1`
    text-align: center;
    line-height: 1.2;
    font-weight: 900;
    width: 70%;
    font-size: 3em;
    margin: 0 auto 30px auto;

    @media screen and (max-width: 950px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5em;
        padding: 0 1em;
    }
`

export default HeaderHeading
