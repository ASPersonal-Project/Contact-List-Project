import React from 'react';

const Header = (props) =>{
    return(
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-danger">
                <div class="container">
                    <a className="navbar-brand" href="/">{props.branding}</a>
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;