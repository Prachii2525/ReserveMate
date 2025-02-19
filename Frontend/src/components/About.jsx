import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At ReserveMate, we make dining reservations effortless and hassle-free. Whether it’s a romantic date, 
              a family dinner, or a quick bite with friends, 
              we connect you with top restaurants in just a few clicks.
              With real-time availability, instant confirmations, and personalized recommendations,
              your perfect table is always ready. Say goodbye to long waits and 
              last-minute chaos—ReserveMate ensures every dining experience is smooth and enjoyable. Book. Dine. Enjoy!


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;