import { useRef, useState } from "react";

import classes from "./Contact.module.css";

const ContactPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [invalidInputs, setInvalidInputs] = useState<string[]>([]);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const company = companyRef.current?.value;
    const title = titleRef.current?.value;
    const message = messageRef.current?.value;

    const validInputs = [];

    // console.log(name);
    // console.log(email);
    // console.log(company);
    // console.log(title);
    // console.log(message);

    // name validations
    if (!name || (name && name.trim().length < 1)) {
      setInvalidInputs((prevState) =>
        !prevState.includes("name") ? prevState.concat("name") : prevState
      );
    } else {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "name")
      );
      validInputs.push("name");
    }

    // email validations
    if (!email || (email && email.trim().length < 1)) {
      setInvalidInputs((prevState) =>
        !prevState.includes("email") ? prevState.concat("email") : prevState
      );
    }
    if (email && email.trim().length > 0) {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "email")
      );
      const isValid = /^\S+@\S+\.\S+$/.test(email);
      if (isValid) {
        setInvalidInputs((prevState) =>
          prevState.filter((item) => item !== "invalid email")
        );
        validInputs.push("email");
      } else {
        setInvalidInputs((prevState) =>
          !prevState.includes("invalid email")
            ? prevState.concat("invalid email")
            : prevState
        );
      }
    } else {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "invalid email")
      );
    }

    // message validations
    if (!message || (message && message.trim().length < 20)) {
      setInvalidInputs((prevState) =>
        !prevState.includes("message") ? prevState.concat("message") : prevState
      );
    } else {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "message")
      );
      validInputs.push("message");
    }

    // console.log(validInputs);

    if (
      validInputs.includes("name") &&
      validInputs.includes("email") &&
      validInputs.includes("message")
    ) {
      alert("message sent");
    } else {
      return;
    }

    // reset inputs if message is sent
    if (name) {
      nameRef.current.value = "";
    }
    if (email) {
      emailRef.current.value = "";
    }
    if (company) {
      companyRef.current.value = "";
    }
    if (title) {
      titleRef.current.value = "";
    }
    if (message) {
      messageRef.current.value = "";
    }
  };

  // console.log(invalidInputs);

  return (
    <>
      <section className={classes.container}>
        <div className={classes.left}>
          <h2>Contact</h2>
          <span>Ask us about</span>
          <div className={classes.topics}>
            <div className={classes.topic}>
              <img src="/assets/icon-person.svg" alt="person icon" />
              <p>The quality of our talent network</p>
            </div>
            <div className={classes.topic}>
              <img src="/assets/icon-cog.svg" alt="cog icon" />
              <p>Usage & implementation of our software</p>
            </div>
            <div className={classes.topic}>
              <img src="/assets/icon-chart.svg" alt="chart icon" />
              <p>How we help drive innovation</p>
            </div>
          </div>
        </div>

        <form className={classes.form} onSubmit={formHandler} noValidate>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            ref={nameRef}
            className={invalidInputs.includes("name") ? classes.error : ""}
            onChange={() =>
              setInvalidInputs((prevState) =>
                prevState.filter((item) => item !== "name")
              )
            }
          />
          {invalidInputs.includes("name") && (
            <span>This field is required</span>
          )}
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            ref={emailRef}
            className={
              invalidInputs.includes("email") ||
              invalidInputs.includes("invalid email")
                ? classes.error
                : ""
            }
            onChange={() =>
              setInvalidInputs((prevState) =>
                prevState.filter(
                  (item) => item !== "email" && item !== "invalid email"
                )
              )
            }
          />
          {invalidInputs.includes("email") && (
            <span>This field is required</span>
          )}
          {invalidInputs.includes("invalid email") && (
            <span>Please use a valid email address</span>
          )}
          <label htmlFor="company-name" className="sr-only">
            Company Name
          </label>
          <input
            type="text"
            name="company-name"
            id="company-name"
            placeholder="Company Name"
            ref={companyRef}
          />
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            ref={titleRef}
          />
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows={3}
            ref={messageRef}
            className={
              invalidInputs.includes("message") ? classes.messageError : ""
            }
            onChange={() =>
              setInvalidInputs((prevState) =>
                prevState.filter((item) => item !== "message")
              )
            }
          ></textarea>
          {invalidInputs.includes("message") && <span>Min. 20 Chars</span>}
          <button type="submit">submit</button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
