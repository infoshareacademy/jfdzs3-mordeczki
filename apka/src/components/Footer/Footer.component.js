import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.component.css';

const Footer = (props) => (
    <div className="footer_block"> { props.name }
    <Link to="/users/566565/jajko">Marcin Osak</Link>
    </div>
)

export default Footer;