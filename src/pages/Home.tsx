import Four from "../shared/Four";
import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <section className={classes.one}>
        <img
          src="assets/bg-pattern-home-1.svg"
          alt="pattern"
          className={classes.pattern1}
        />
        <h2>
          Find the
          <br />
          best <span className={classes.talent}>talent</span>
        </h2>
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </section>

      <section className={classes.two}>
        <div className={classes.line}></div>
        <h2>Build & manage distributed teams like no one else.</h2>
        <div className={classes.benefits}>
          <div className={classes.benefit}>
            <img src="/assets/icon-person.svg" alt="person icon" />
            <h3>Experienced Individuals</h3>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
          <div className={classes.benefit}>
            <img src="/assets/icon-cog.svg" alt="cog icon" />
            <h3>Easy to Implement</h3>
            <p>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
          <div className={classes.benefit}>
            <img src="/assets/icon-chart.svg" alt="chart icon" />
            <h3>Enhanced Productivity</h3>
            <p>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </div>
        </div>
      </section>

      <section className={classes.three}>
        <h2>
          Delivering real results for top companies. Some of our{" "}
          <span>success stories.</span>
        </h2>
        <div className={classes.quotes}>
          <div className={classes.quote}>
            <img src="/assets/icon-quotes.svg" alt="quotes icon" />
            <p>
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <h3>Kady Baker</h3>
            <span>Product Manager at Bookmark</span>
            <div className={classes.avatar}>
              <img src="/assets/avatar-kady.jpg" alt="kady avatar" />
            </div>
          </div>
          <div className={classes.quote}>
            <img src="/assets/icon-quotes.svg" alt="quotes icon" />
            <p>
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <h3>Aiysha Reese</h3>
            <span>Founder of Manage</span>
            <div className={classes.avatar}>
              <img src="/assets/avatar-aiysha.jpg" alt="aiysha avatar" />
            </div>
          </div>
          <div className={classes.quote}>
            <img src="/assets/icon-quotes.svg" alt="quotes icon" />
            <p>
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <h3>Arthur Clarke</h3>
            <span>Co-founder of MyPhysio</span>
            <div className={classes.avatar}>
              <img src="/assets/avatar-arthur.jpg" alt="arthur avatar" />
            </div>
          </div>
        </div>
      </section>

      <Four />
    </>
  );
};

export default HomePage;
