import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                <div className="container">
                    <a className="navbar-brand" href="/">{props.branding}</a>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/"><i className="fa fa-home"></i>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contact/add"><i className="fa fa-plus"></i>Add <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about"><i className="fa fa-question"/>About <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;