import React from "react";
import { useEffect, useState, useRef } from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.jpg";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const text = "Namaskar, welcome to Navdal Tirth Sthal!\u0021";

  useEffect(() => {
    let currentIndex = 0;

    const typewriterEffect = () => {
      if (currentIndex === text.length) {
        currentIndex = 0; // Reset the index when reaching the end of the text
      }
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
    };

    const interval = setInterval(typewriterEffect, 200); // Adjust the typing speed as needed

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  const [form, setForm] = useState({});
  const [userCount, setUserCount] = useState(0);
  const emailInputRef = useRef(null);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    console.log(response);
    alert("Thank you for registering to our mailing list!");
    emailInputRef.current.value = "";
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    setUserCount(data.length);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="temple__header section__padding" id="home">
      <div className="temple__header-content">
        <h1 className="gradient__text">{displayText}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          nequeillum voluptatem debitis libero obcaecati, consequatur non
          quibusdamutem optio
        </p>
        <div className="temple__header-content__input">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              onChange={handleForm}
              ref={emailInputRef}
            ></input>
            <button type="submit">Join Mailings</button>
          </form>
        </div>

        <div className="temple__header-content__people">
          <img src={people} alt="people" />
          <p>{userCount} people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="temple__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
