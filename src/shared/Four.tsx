import { Link } from "react-router-dom";

import classes from "./Four.module.css";

const Four = () => {
  return (
    <section className={classes.container}>
      <h2>Ready to get started?</h2>
      <Link to="/contact">contact us</Link>
    </section>
  );
};

export default Four;
