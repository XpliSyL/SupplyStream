import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Terms & Conditions</h2>
            <p>
                Supply Stream regards customer service as an important part of our relationship with our customers. The following policies apply to goods and services provided by Supply Stream to our customers. If you have questions regarding our policies, please contact Supply Stream ABN - 35 143 610 860 customer service at 02 4365 4419
            </p>
            <ul className="actions">
                <li><Link to="/generic" className="button">View All</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>257 Wattle Tree Road &bull; Holgate, NSW 2250 &bull; AU</dd>
                <dt>Phone</dt>
                <dd>+61 (02) 4365 4419</dd>
                <dt>Email</dt>
                <dd><a href="#">sales@supplystream.com.au</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Supply Stream. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
