import React from "react";
import "./mission.css";
import { Feature } from "../../components";

const Mission = () => {
  return (
    <div className="temple__mission section__margin" id="mission">
      <div className="temple__mission-feature">
        <Feature
          title="What is our Mission?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas maxime eligendi quam earum qui consequuntur, reiciendis a, obcaecati autem tenetur dolore doloribus laboriosam voluptates enim adipisci dolores suscipit modi."
        />
      </div>
      <div className="temple__mission-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <a href="#community">
          <p>Meet the Leaders</p>
        </a>
      </div>
      <div className="temple__mission-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default Mission;
