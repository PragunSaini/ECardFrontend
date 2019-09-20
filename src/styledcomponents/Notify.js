import styled from 'styled-components'

const Notify = styled.div`
    position: absolute;
    top: 95vh;
    right: 10px;
    height: 30px;
    font-size: 0.9em;
    padding: 0 50px;
    visibility: ${props => props.visibility};
    opacity: ${props => (props.visibility === 'visible' ? '1' : '0')};
    background: rgba(255, 255, 255, 0.5);
    color: #3d438b;
    line-height: 30px;
    text-align: center;
    transition: all 0.2s;
`

export default {
    Notify
}
