import React from "react";

function Header() {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand">Storytime</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a
                      href="https://ivan.best/"
                      target="_blank"
                      className="ml-auto"
                      title="Visit my personal portfolio"
                    >ivan.best</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;
