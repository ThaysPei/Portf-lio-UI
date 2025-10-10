import "./style.css";
import facebook from "./logo facebook.png";
import instagram from "./logo instagram.png";
import twitter from "./logo twitter.png";
import linkedin from "./logo linkedin.png";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-content-img">
            <img src={facebook} alt="logo facebook"/>
            <img src={instagram} alt="logo facebook"/>
            <img src={twitter} alt="logo facebook"/>
            <img src={linkedin} alt="logo facebook"/>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </footer>
  );
}
