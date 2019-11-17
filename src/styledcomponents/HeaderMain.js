import styled from 'styled-components'

const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: nowrap;
`

const MainBox = styled.div`
    transition: all 0.5s;
    display: inline-block;
    align-self: flex-start;
    text-align: center;
    position: relative;
    z-index: 2;
    width: 50%;

    @media screen and (max-width: 950px) {
        width: 70%;
    }

    @media screen and (max-width: 500) {
        width: 85%;
    }
`

const MainHeader = styled.h2`
    color: #fff;
    font-size: 2.65em;
    font-weight: 900;
    margin-bottom: 3%;
    letter-spacing: 0.09;
    text-transform: uppercase;

    @media screen and (max-width: 950px) {
        font-size: 2.3em;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5em;
    }
`

const SubHeader = styled.p`
    margin-bottom: 30px;
    font-size: 1.3em;
`

export default {
    HeaderMain,
    MainBox,
    MainHeader,
    SubHeader
}
