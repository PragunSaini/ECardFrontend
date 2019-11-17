import styled from 'styled-components'

const Heading = styled.h2`
    font-size: 2.6em;
    margin: 30px auto;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.25em;

    @media screen and (max-width: 500px) {
        font-size: 1.5em;
    }
`

const Para = styled.p`
    color: #101010;
    font-size: 1.5em;
    margin: 3% auto;
    line-height: 1.5;
    letter-spacing: 0.01em;

    @media screen and (max-width: 500px) {
        font-size: 1em;
    }
`

const StyledHR = styled.hr`
    width: 100%;
    height: 2px;
    background-image: linear-gradient(
        to right,
        #ffffff,
        #cacaca,
        #979797,
        #676767,
        #3b3b3b,
        #3b3b3b,
        #3b3b3b,
        #3b3b3b,
        #676767,
        #979797,
        #cacaca,
        #ffffff
    );
`

export default {
    Heading,
    Para,
    StyledHR
}
