import React from 'react';

const Header = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                <div className="container">
                    <a className="navbar-brand" href="/">{props.branding}</a>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;