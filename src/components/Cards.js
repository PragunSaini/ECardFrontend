import React from 'react'

import EmperorJPG from '../assets/emperor.jpg'
import CitizenJPG from '../assets/citizen.jpg'
import SlaveJPG from '../assets/slave.jpg'

export const Emperor = ({ width, height }) => (
    <div>
        <img src={EmperorJPG} alt='emperor card' style={{ width, height }} />
    </div>
)

export const Citizen = ({ width, height }) => (
    <div>
        <img src={CitizenJPG} alt='citizen card' style={{ width, height }} />
    </div>
)

export const Slave = ({ width, height }) => (
    <div>
        <img src={SlaveJPG} alt='slave card' style={{ width, height }} />
    </div>
)

// export default { Emperor, Citizen, Slave }
