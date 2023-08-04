import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            Header
            <Link to="/about"> About </Link>
            <Link to="/doctor"> Doctor </Link>
            <Link to="/patient"> Patient </Link>
            <Link to="/lab"> Diagnostics Lab </Link>
        </div>
    )
}
