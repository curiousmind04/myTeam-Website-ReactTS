import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.first}>
            <div>
              <img src="/assets/logo.svg" alt="logo" className={classes.logo} />
              <div className={classes.links}>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
              </div>
            </div>
            <div className={classes.info}>
              <span>987 Hillcrest Lane</span>
              <span>Irvine, CA</span>
              <span>California 92714</span>
              <span>Call Us : 949-833-7432</span>
            </div>
          </div>
          <div className={classes.second}>
            <div className={classes.socials}>
              <a href="https://www.linkedin.com/in/brandon-bhangari/">
                <img src="/assets/icon-facebook.svg" alt="facebook icon" />
              </a>
              <a href="https://www.linkedin.com/in/brandon-bhangari/">
                <img src="/assets/icon-pinterest.svg" alt="pinterest icon" />
              </a>
              <a href="https://www.linkedin.com/in/brandon-bhangari/">
                <img src="/assets/icon-twitter.svg" alt="twitter icon" />
              </a>
            </div>
            <span>Copyright 2020. All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
