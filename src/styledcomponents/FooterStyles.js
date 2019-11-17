import styled from 'styled-components'

const Footer = styled.footer`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    padding: 35px 8%;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    z-index: 10;
    position: relative;
    background-blend-mode: overlay;
    border-top: 0.5px solid rgba(0, 0, 0, 0.5);
    font-size: 0.95em;

    @media screen and (max-width: 500px) {
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding: none;
    }
`

const MadeBy = styled.div`
    color: #fff;
    font-weight: 500;
    margin-right: 30px;

    @media screen and (max-width: 500px) {
        margin-right: 0;
    }
`

const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default {
    Footer,
    MadeBy,
    Group
}
