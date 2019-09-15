import React from 'react'

const Notification = ({ show, message, error }) => {
    const style = {
        display: show ? 'block' : 'none',
        color: error ? 'red' : 'green',
        fontWeight: 'bold'
    }

    return <p style={style}>{message}</p>
}

export default Notification
