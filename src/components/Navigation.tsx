import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          <img src="/assets/logo.svg" alt="logo" className={classes.logo} />
          <h1 className="sr-only">myTeam</h1>
          <button className={classes.hamburger} onClick={() => setMenu(true)}>
            <img src="/assets/icon-hamburger.svg" alt="hamburger icon" />
          </button>
          <div className={classes.actions} hidden={!menu ? true : false}>
            <img
              src="/assets/icon-close.svg"
              alt="close icon"
              className={classes.close}
              onClick={() => setMenu(false)}
            />
            <div>
              <Link to="/" onClick={() => setMenu(false)}>
                home
              </Link>
              <Link to="/about" onClick={() => setMenu(false)}>
                about
              </Link>
            </div>
            <Link
              to="/contact"
              className={classes.contact}
              onClick={() => setMenu(false)}
            >
              contact us
            </Link>
            <img
              src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
              alt="pattern"
              className={classes.pattern}
            />
          </div>
        </div>
      </header>
      {menu && (
        <div className={classes.backdrop} onClick={() => setMenu(false)}></div>
      )}
    </>
  );
};

export default Navigation;
