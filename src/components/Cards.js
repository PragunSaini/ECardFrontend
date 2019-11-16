import React from 'react'
import styled from 'styled-components'

import EmperorJPG from '../assets/emperor.jpg'
import CitizenJPG from '../assets/citizen.jpg'
import SlaveJPG from '../assets/slave.jpg'

export const Emperor = ({ width, height }) => (
    <div>
        <Wrapper src={EmperorJPG} alt='emperor card' width={width} height={height} />
    </div>
)

export const Citizen = ({ width, height }) => (
    <div>
        <Wrapper src={CitizenJPG} alt='citizen card' width={width} height={height} />
    </div>
)

export const Slave = ({ width, height }) => (
    <div>
        <Wrapper src={SlaveJPG} alt='slave card' width={width} height={height} />
    </div>
)

const Wrapper = styled.img`
    width: ${props => (props.width ? props.width : 'auto')}
    height: ${props => (props.height ? props.height : 'auto')}

    @media screen and (max-width: 1050px) {
        width: 80%;
    }
`
