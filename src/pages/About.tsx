import { useState } from "react";

import Four from "../shared/Four";
import classes from "./About.module.css";

const directors = [
  {
    id: 1,
    name: "Nikita Marks",
    position: "Founder & CEO",
    quote:
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    id: 2,
    name: "Christian Duncan",
    position: "Co-founder & COO",
    quote:
      "“Distributed teams required unique processes. You need to approach work in a new way.”",
  },
  {
    id: 3,
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    quote:
      "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
  },
  {
    id: 4,
    name: "Drake Heaton",
    position: "Business Development Lead",
    quote:
      "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
  },
  {
    id: 5,
    name: "Griffin Wise",
    position: "Lead Marketing",
    quote:
      "“Unique perspectives shape unique products, which is what you need to survive these days.”",
  },
  {
    id: 6,
    name: "Aden Allan",
    position: "Head of Talent",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
];

const AboutPage = () => {
  const [openedInfo, setOpenedInfo] = useState<number[]>([]);

  const infoHandler = (num: number) => {
    setOpenedInfo((prevState) =>
      prevState.includes(num)
        ? prevState.filter((item) => item !== num)
        : prevState.concat(num)
    );
  };

  console.log(openedInfo);
  return (
    <>
      <section className={classes.one}>
        <div>
          <h2>About</h2>
          <div>
            <div className={classes.desktopLine}></div>
            <p>
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
        </div>
      </section>

      <section className={classes.two}>
        <div>
          <h2>Meet the directors</h2>
          <div className={classes.grid}>
            {directors.map((director) => (
              <div className={classes.director} key={director.id}>
                <div
                  className={classes.infoOne}
                  hidden={!openedInfo.includes(director.id) ? false : true}
                >
                  <div className={classes.avatar}>
                    <img
                      src={`/assets/avatar-${director.name
                        .split(" ")[0]
                        .toLowerCase()}.jpg`}
                      alt={`${director.name} avatar`}
                    />
                  </div>
                  <h3 className={classes.name}>{director.name}</h3>
                  <span className={classes.position}>{director.position}</span>
                </div>
                <div
                  className={classes.infoTwo}
                  hidden={!openedInfo.includes(director.id) ? true : false}
                >
                  <h3 className={classes.name}>{director.name}</h3>
                  <p className={classes.quote}>{director.quote}</p>
                  <div className={classes.socials}>
                    <a href="https://www.linkedin.com/in/brandon-bhangari/">
                      <img src="/assets/icon-twitter.svg" alt="twitter icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/brandon-bhangari/">
                      <img
                        src="/assets/icon-linkedin.svg"
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
                <button
                  className={
                    !openedInfo.includes(director.id)
                      ? classes.cross
                      : classes.close
                  }
                  onClick={infoHandler.bind(null, director.id)}
                >
                  <img
                    src={`/assets/icon-${
                      !openedInfo.includes(director.id) ? "cross" : "close"
                    }.svg`}
                    alt={`${
                      !openedInfo.includes(director.id) ? "cross" : "close"
                    } icon`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={classes.three}>
        <h2>Some of our clients</h2>
        <div className={classes.clients}>
          <img
            src="assets/logo-the-verge.png"
            alt="the verge logo"
            className={classes.client}
          />
          <img
            src="assets/logo-jakarta-post.png"
            alt="jakarta post logo"
            className={classes.client}
          />
          <img
            src="assets/logo-the-guardian.png"
            alt="the guardian logo"
            className={classes.client}
          />
          <img
            src="assets/logo-tech-radar.png"
            alt="tech radar logo"
            className={classes.client}
          />
          <img
            src="assets/logo-gadgets-now.png"
            alt="gadgets now logo"
            className={classes.client}
          />
        </div>
      </section>

      <Four />
    </>
  );
};

export default AboutPage;
