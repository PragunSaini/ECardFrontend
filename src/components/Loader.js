import React from 'react'
import Layout from '../styledcomponents/Layout'

const { LoaderPage, LoaderBody, LoaderBase, LoaderFace, LoaderFazer, LoaderText } = Layout

const Loader = () => (
    <LoaderPage>
        <LoaderBody>
            <span>
                <span />
                <span />
                <span />
                <span />
                <span />
            </span>
            <LoaderBase>
                <span />
                <LoaderFace />
            </LoaderBase>
        </LoaderBody>
        <LoaderFazer>
            <span />
            <span />
            <span />
            <span />
        </LoaderFazer>
        <LoaderText>Loading..</LoaderText>
    </LoaderPage>
)

export default Loader
