import styled from 'styled-components'

const Main = styled.div`
    @media screen and (max-width: 500px) {
        max-width: 100vw;
        overflow: hidden;
    }
`

const Body = styled.div`
    font-family: 'Montserrat', 'serif';
    color: #fff;
    font-size: 0.875em;
    letter-spacing: 0.063em;
    line-height: 1;
    position: relative;
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
    width: 100vw;
    height: 100vh;
    position: relative;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (max-width: 500px) {
        height: auto;
        max-height: 200vh;
    }
`

const Section = styled.section`
    padding: 30px 0;
    background: #fff;
`

const Wrapper = styled.div`
    width: 70%;
    position: relative;
    margin: 0 auto;
    font-size: 1em;
    color: #000;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`

const LoaderPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #247fb0;
    overflow: hidden;
`

const LoaderBody = styled.div`
    position: absolute;
    top: 50%;
    margin-left: -50px;
    left: 50%;
    animation: speeder 0.4s linear infinite;

    > span {
        height: 5px;
        width: 35px;
        background: #000;
        position: absolute;
        top: -19px;
        left: 60px;
        border-radius: 2px 10px 1px 0;
    }

    > span > span:nth-child(1),
    > span > span:nth-child(2),
    > span > span:nth-child(3),
    > span > span:nth-child(4) {
        width: 30px;
        height: 1px;
        background: #000;
        position: absolute;
        animation: fazer1 0.2s linear infinite;
    }

    > span > span:nth-child(2) {
        top: 3px;
        animation: fazer2 0.4s linear infinite;
    }

    > span > span:nth-child(3) {
        top: 1px;
        animation: fazer3 0.4s linear infinite;
        animation-delay: -1s;
    }

    > span > span:nth-child(4) {
        top: 4px;
        animation: fazer4 1s linear infinite;
        animation-delay: -1s;
    }

    @keyframes fazer1 {
        0% {
            left: 0;
        }
        100% {
            left: -80px;
            opacity: 0;
        }
    }

    @keyframes fazer2 {
        0% {
            left: 0;
        }
        100% {
            left: -100px;
            opacity: 0;
        }
    }

    @keyframes fazer3 {
        0% {
            left: 0;
        }
        100% {
            left: -50px;
            opacity: 0;
        }
    }

    @keyframes fazer4 {
        0% {
            left: 0;
        }
        100% {
            left: -150px;
            opacity: 0;
        }
    }

    @keyframes speeder {
        0% {
            transform: translate(2px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -3px) rotate(-1deg);
        }
        20% {
            transform: translate(-2px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 3px) rotate(-1deg);
        }
        60% {
            transform: translate(-1px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-2px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(2px, 1px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }
`

const LoaderBase = styled.div`
    span {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 100px solid #000;
        border-bottom: 6px solid transparent;

        &:before {
            content: '';
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: #000;
            position: absolute;
            right: -110px;
            top: -16px;
        }

        &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-top: 0 solid transparent;
            border-right: 55px solid #000;
            border-bottom: 16px solid transparent;
            top: -16px;
            right: -98px;
        }
    }
`

const LoaderFace = styled.div`
    position: absolute;
    height: 12px;
    width: 20px;
    background: #000;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -125px;
    top: -15px;

    &:after {
        content: '';
        height: 12px;
        width: 12px;
        background: #000;
        right: 4px;
        top: 7px;
        position: absolute;
        transform: rotate(40deg);
        transform-origin: 50% 50%;
        border-radius: 0 0 0 2px;
    }
`

const LoaderFazer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    span {
        position: absolute;
        height: 2px;
        width: 20%;
        background: #000;

        &:nth-child(1) {
            top: 20%;
            animation: lf 0.6s linear infinite;
            animation-delay: -5s;
        }

        &:nth-child(2) {
            top: 40%;
            animation: lf2 0.8s linear infinite;
            animation-delay: -1s;
        }

        &:nth-child(3) {
            top: 60%;
            animation: lf3 0.6s linear infinite;
        }

        &:nth-child(4) {
            top: 80%;
            animation: lf4 0.5s linear infinite;
            animation-delay: -3s;
        }
    }

    @keyframes lf {
        0% {
            left: 200%;
        }
        100% {
            left: -200%;
            opacity: 0;
        }
    }
    @keyframes lf2 {
        0% {
            left: 200%;
        }
        100% {
            left: -200%;
            opacity: 0;
        }
    }
    @keyframes lf3 {
        0% {
            left: 200%;
        }
        100% {
            left: -100%;
            opacity: 0;
        }
    }
    @keyframes lf4 {
        0% {
            left: 200%;
        }
        100% {
            left: -100%;
            opacity: 0;
        }
    }
`

const LoaderText = styled.h1`
    position: absolute;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    left: 50%;
    top: 58%;
    margin-left: -20px;
    color: black;
`

export default {
    Main,
    Body,
    BackGround2,
    BackGround1,
    Header,
    Section,
    Wrapper,
    LoaderPage,
    LoaderBody,
    LoaderBase,
    LoaderFace,
    LoaderFazer,
    LoaderText
}
