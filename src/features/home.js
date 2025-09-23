import "../styles/tcg-guides.css";
import "../styles/home.css";
import { Link } from "react-router-dom";

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
              <a href="https://x.com/eeegbeeg" target="_blank" rel="noreferrer">
                eeegbeeg
              </a>
            </p>
            <p style={{ textAlign: "justify" }}>
              My Limitless:{" "}
              <a
                href="https://limitlesstcg.com/players/8693"
                target="_blank"
                rel="noreferrer"
              >
                Simran Sahota
              </a>
            </p>
            <p style={{ textAlign: "justify" }}>
              My CardMarkt:{" "}
              <a
                href="https://www.cardmarket.com/en/Pokemon/Users/GIbleguy"
                target="_blank"
                rel="noreferrer"
              >
                GibleGuy
              </a>
            </p>
            <p className="belowpad">
              My Youtube:{" "}
              <a
                href="https://www.youtube.com/@SharpedoBluff"
                target="_blank"
                rel="noreferrer"
              >
                Simran TCG
              </a>
            </p>
            <div style={{ height: "200px" }} />
            <p style={{ textAlign: "justify" }}>
              Site made using React Native, bear with random resolution mobiles
              :p
            </p>
          </div>
        </div>
        <div className="icon-section">
          <img src={require(`../images/homepage/icon.jpg`)} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
