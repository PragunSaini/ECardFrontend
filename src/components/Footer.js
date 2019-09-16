import React from 'react'

import FooterStyles from '../styledcomponents/FooterStyles'
import Logo from './Logo'

const Footer = () => (
    <FooterStyles.Footer>
        <Logo logowidth='15%' />
        <FooterStyles.Group>
            <FooterStyles.MadeBy>Made By Pragun Saini</FooterStyles.MadeBy>
            <a href='https://github.com/PragunSaini' target='_blank'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30px'
                    height='30px'
                    viewBox='0 0 1792 1792'
                >
                    <path
                        fill='#fff'
                        d='M896 128q209 0 385.5 103T1561 510.5 1664 896q0 251-146.5 451.5T1139 1625q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 493 446q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T128 896q0-209 103-385.5T510.5 231 896 128zM419 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z'
                    />
                </svg>
            </a>
        </FooterStyles.Group>
    </FooterStyles.Footer>
)

export default Footer
