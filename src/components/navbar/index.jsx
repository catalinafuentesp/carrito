import React from "react";
import CartWidget from "CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="./">
                    </a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="/categoria/films">
                        </a>
                    </li>
                    <li>
                        <a className="nav__link" href="/categoria/series">
                        </a>
                    </li>
                    <li>
                        <a className="nav__link" href="cart">
                            <CartWidget />
                        </a>
                    </li>
                </ul>

                </nav>
		</div>
	);
};
export default NavBar;