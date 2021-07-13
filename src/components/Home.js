import React from "react";
import NavBar from "./NavBar";
import CompanyLogo from "./CompanyLogo";
import Home01 from "../images/pexels-mentatdgt-936575.jpg";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CompanyLogo />
      <main className="home-main">
        <article className="home-main__image">
          <figure>
            <img src={Home01} alt="Virtual Reality" />
            <figcaption className="home-main__image-description">
              Virtual Reality
            </figcaption>
          </figure>
        </article>
        <article className="home-main__description">
          <p>
            <span>Virtual reality (VR)</span>, the use of computer modeling and
            simulation that enables a person to interact with an artificial
            three-dimensional (3-D) visual or other sensory environment. VR
            applications immerse the user in a computer-generated environment
            that simulates reality through the use of interactive devices, which
            send and receive information and are worn as goggles, headsets,
            gloves, or body suits. In a typical VR format, a user wearing a
            helmet with a stereoscopic screen views animated images of a
            simulated environment.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Home;
