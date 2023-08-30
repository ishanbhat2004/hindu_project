import React from "react";
import "./support.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving temple technology",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sit quibusdam tempora nostrum est aspernatur illum alias iste, adipisci delectus quas praesentium minus sed optio! Rem numquam praesentium cumque quaerat.",
  },
  {
    title: "Become the revolution",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sit quibusdam tempora nostrum est aspernatur illum alias iste, adipisci delectus quas praesentium minus sed optio! Rem numquam praesentium cumque quaerat.",
  },
  {
    title: "Contact us",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sit quibusdam tempora nostrum est aspernatur illum alias iste, adipisci delectus quas praesentium minus sed optio! Rem numquam praesentium cumque quaerat.",
  },
  {
    title: "Be Yourself",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sit quibusdam tempora nostrum est aspernatur illum alias iste, adipisci delectus quas praesentium minus sed optio! Rem numquam praesentium cumque quaerat.",
  },
];

const Support = () => {
  return (
    <div className="temple__support section__padding" id="contact">
      <div className="temple__support-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realise It. Step into Future
          Today & Make It Happen.
        </h1>
        <a href="#support">
          <p>Make us help it happen today!</p>
        </a>
      </div>
      <div className="temple__support-container">
        {featuresData.map((item, index) => {
          return <Feature title={item.title} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Support;
