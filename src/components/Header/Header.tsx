import React from "react";

function Header() {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand">Storytime</div>
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
