import React from 'react'
import { connect } from 'react-redux'

const Home = props => {
    const { user } = props

    return (
        <>
            <h1>E-Card Home page</h1>
            <p>Username : {user}</p>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
