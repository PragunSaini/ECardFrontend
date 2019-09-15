import styled from 'styled-components'

const Body = styled.div`
    font-family: 'Montserrat', 'serif';
    color: #fff;
    font-size: 0.875em;
    letter-spacing: 0.063em;
    line-height: 1;
`
const BackGround2 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    background-image: linear-gradient(
        to right top,
        #38438b,
        #944b94,
        #d75a88,
        #ff7e71,
        #ffb25f,
        #ffeb68
    );
`

const BackGround1 = styled.div`
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    background-image: linear-gradient(to right top, #6d327c, #485da6, #00a1ba, #00bf98, #36c486);
`

const Header = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    position: relative;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export default {
    Body,
    BackGround2,
    BackGround1,
    Header
}
