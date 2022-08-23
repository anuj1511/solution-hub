import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import image1 from "../images/postajob.jpeg";
import image2 from "../images/freelancer.jpg";
import image3 from "../images/paysafely.jpg";
import image4 from "../images/howcanwehelp.png";
import image5 from "../images/portfolio.jpg";
import image6 from "../images/progress.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out what we offer</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="Its free and easy to post a job.Simply fill in a title,description and budget and competitive bids come within minutes"
              label=""
              path="/services"
            />
            <CardItem
              src={image2}
              text="No job is too big or too small.we have got freelancers for jobs of any size or nbudget,across 1800+ skills.No job is too complex.we can get it done."
              label=""
              path="/services"
            />
            <CardItem
              src={image3}
              text="Only pay for work when it has been completed and you are 100% satisfied with the quality using our milestone payment system"
              label=""
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image4}
              text="Our talented team of recruiters can help you find the best freelancer for the job."
              label=""
              path="/services"
            />
            <CardItem
              src={image5}
              text="Find professionals you can trust by browsing their samples of previous work and reading their profile reviews."
              label=""
              path="/products"
            />
            <CardItem
              src={image6}
              text="Keep up to date and on the go with our time tracker,and mobile app.Always know what freelancers are up to."
              label=""
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
