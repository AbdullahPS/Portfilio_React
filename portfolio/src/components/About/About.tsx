import React from "react";
import "./about.css";
import ME2 from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <section id="#about">
      <h5>Get To Know</h5>
      <h1>About me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt=" a picture of me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <h1>1+ Years Working</h1>
          </article>
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <h1>1+ Years Working</h1>
          </article>
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <h1>1+ Years Working</h1>
          </article>
          </div>
         
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus molestias repellendus similique veritatis possimus est facere placeat, voluptas beatae aperiam dolore cumque, hic exercitationem dolor repellat natus incidunt alias.</p>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
