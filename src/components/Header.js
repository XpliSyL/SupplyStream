import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Supply Stream</h1>
        <p>"To provide a sustainable level of service that meets the expectations of our Clients"</p>
    </header>
)

export default Header
