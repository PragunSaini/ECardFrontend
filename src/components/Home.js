import React from 'react'
import { connect } from 'react-redux'

import HomeHeader from './HomeHeader'
import HowToPlay from './HowToPlay'
import Footer from './Footer'

import Layout from '../styledcomponents/Layout'

const Home = () => {
    return (
        <Layout.Main>
            <Layout.BackGround2 />
            <Layout.BackGround1 />
            <HomeHeader />
            <HowToPlay />
            <Footer />
        </Layout.Main>
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
