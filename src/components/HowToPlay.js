import React from 'react'

import Layout from '../styledcomponents/Layout'
import BodyStyles from '../styledcomponents/BodyStyles'

const HowToPlay = () => (
    <Layout.Section>
        <Layout.Wrapper>
            <BodyStyles.Heading>How To Play</BodyStyles.Heading>
            <BodyStyles.Para>
                This is a two-player card game. It is played using 10 cards which are Emperor,
                Citizen and the Slave
            </BodyStyles.Para>
            <BodyStyles.StyledHR />
            <BodyStyles.Para>
                The Citizen card represents the common man, and cannot defeat the Emperor who sits
                at the top. It can, however, defeat the Slave, who resides at the very bottom of the
                system. Two citizen against each other results in a tie.
            </BodyStyles.Para>
            <BodyStyles.Para>
                The Emperor represents the one at the top of society. This card can defeat the
                citizen, but will lose to the Slave.
            </BodyStyles.Para>
            <BodyStyles.Para>
                The Slave is presented as the one at the very bottom of society. Seeing as how it
                has nothing to lose, it can overthrow the Emperor in one last attempt at revenge.
                This card will lose to a Citizen, but will win against the Emperor card.{' '}
            </BodyStyles.Para>
            <BodyStyles.StyledHR />
            <BodyStyles.Para>
                The game consists of 4 rounds of three turns each. At the start of each round, the
                player will get 5 cards each, with 4 Citizens each, one player with the Emperor, and
                one with the Slave. Both players place one card each again and again till a Emperor
                or Slave is played from either side. The player with the Emperor has 4/5 chances to
                win and gets 1 points per win, but the player with the slave has only 1/5 chance of
                winning and gets 5 points per win.
            </BodyStyles.Para>
            <BodyStyles.Para>
                Each player gets to play the emperor in alternate round that is two times each.
            </BodyStyles.Para>
        </Layout.Wrapper>
    </Layout.Section>
)

export default HowToPlay
