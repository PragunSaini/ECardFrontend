import React from 'react'
import { connect } from 'react-redux'

import Notify from '../styledcomponents/Notify'

const Notification = ({ notification }) => {
    const visibility = () => {
        if (notification) {
            return 'visible'
        }
        return 'hidden'
    }

    return <Notify.Notify visibility={visibility()}>{notification}</Notify.Notify>
}

const mapStateToProps = state => {
    return {
        notification: state.notification
    }
}

export default connect(mapStateToProps)(Notification)
