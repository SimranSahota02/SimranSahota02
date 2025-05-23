import React from "react";
import "../styles/tcg-guides.css";
import "../styles/home.css";

function Home() {
  return (
    <div className="content dimmer">
      <div className="top-section">
        <div className="blurb">
          <div className="textbox">
            <h1>Hey, I'm Simran!</h1>
            <p className="belowpad">
              Standard gets stale sometimes. So, over the past few years I've
              turned myself towards exploring older pokemon formats, and this
              site is a repository of all the decks I have so far built! You'll
              find deck guides, format rules & links to resources for each
              format. Start by navigating to the hub page of the format you are
              interested in along the navbar at the top of the page.
            </p>
            <h2>Building Formats</h2>
            <p className="belowpad">
              I've personally chosen formats to build arbitrarily, after playing
              a lot of 2010 worlds, I found that I really enjoyed the thematic
              consistency of block formats, and as such have primarily built
              block formats & worlds formats that are close to block.
            </p>
            <h2>Where else to find me!</h2>
            <p style={{ textAlign: "justify" }}>
              My Twitter:{" "}
              <a href="https://x.com/eeegbeeg" target="_blank">
                eeegbeeg
              </a>
            </p>
            <p className="belowpad">
              My Youtube:{" "}
              <a href="https://www.youtube.com/@SharpedoBluff" target="_blank">
                Sharpedo Bluff
              </a>
            </p>
            <p style={{ textAlign: "justify" }}>
              Site made using React Native, bear with random resolution mobiles
              :p
            </p>
          </div>
        </div>

        <div className="icon-section">
          <img src={require(`../images/homepage/icon.jpg`)} />
        </div>
      </div>
      <div className="bottom">
        <div className="image-gallery">
          <div className="image-wrapper">
            <img src={require("../images/homepage/image1.jpg")} />
            <div className="overlay">Playing EUIC 2025</div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image2.jpg")} />
            <div className="overlay">At Utrecht SPE 2025</div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image3.jpg")} />
            <div className="overlay">Birmingham Regionals 2025</div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image4.jpg")} />
            <div className="overlay">Playing EUIC 2024</div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image5.jpg")} />
            <div className="overlay">Sign the slip, mr world champ...</div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image6.jpg")} />
            <div className="overlay">Routing a dead hand in Utrecht Day 2</div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image7.jpg")} />
            <div className="overlay">
              Team exeter at Birmingham Regionals 2025
            </div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image8.jpg")} />
            <div className="overlay">
              Playing my first win&in in Lille 2024 vs Lucian!
            </div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image9.jpg")} />
            <div className="overlay">Suited tf up to play some SUM-LOT</div>
          </div>
          <div className="image-wrapper">
            <img src={require("../images/homepage/image10.jpg")} />
            <div className="overlay">My first two retro decks</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
