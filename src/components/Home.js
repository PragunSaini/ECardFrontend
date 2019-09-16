import React from 'react'
import { connect } from 'react-redux'

import HomeHeader from './HomeHeader'
import HowToPlay from './HowToPlay'

import Layout from '../styledcomponents/Layout'

const Home = props => {
    const { user } = props

    return (
        <>
            <Layout.BackGround2 />
            <Layout.BackGround1 />
            <HomeHeader />
            <HowToPlay />
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
