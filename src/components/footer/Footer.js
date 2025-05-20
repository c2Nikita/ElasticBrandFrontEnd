import "./style.css";
import instagram from "./../../img/icons/instagram2.svg";
import telegram from "./../../img/icons/telegram3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-up">
        <div className="footer-social">
          <a href="https://www.instagram.com/elastic.42/" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#telegram">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
      <div className="footer-down"></div>
    </footer>
  );
};

export default Footer;
