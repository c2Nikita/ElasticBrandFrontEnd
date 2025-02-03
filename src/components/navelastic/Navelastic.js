import elastic from "./../../img/icons/elastic.jpg";
import "./style.css";
import arrow from "./../../img/icons/angulararrow.svg";

const Navelastic = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="inline-menu">
          <ul className="list-menu">
            <li className="header-li">
              <div className="a-header header-list-menu shop">
                <div className="shop-button">
                  <span>shop</span>
                  <img src={arrow} alt="arrow" className="arrow" />
                </div>
                <ul className="header-ul">
                  <li className="shop-li">
                    <a href="#T-shirt" className="shop-a">
                      shirt
                    </a>
                  </li>
                  <li className="shop-li">
                    <a href="#jeans" className="shop-a">
                      jeans
                    </a>
                  </li>
                  <li className="shop-li">
                    <a href="#shorts" className="shop-a">
                      shorts
                    </a>
                  </li>
                  <li className="shop-li">
                    <a href="#sweater" className="shop-a">
                      sweater
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header-li">
              <a
                className="a-header header-list-menu scarbook"
                href="#scarbook"
              >
                <span>scarbooks</span>
              </a>
            </li>
            <li className="header-li">
              <a
                className="a-header header-list-menu garade-sale"
                href="#garage-sale"
              >
                <span>sale</span>
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="main" href="/">
          <img src={elastic} className="header-icon" alt=" " />
        </h1>
        <div className="header-icons">
          <div className="header-search">
            <a className="a-header search" href="#search">
              <span>search</span>
            </a>
          </div>
          <div className="header-account">
            <a className="a-header account" href="#account">
              <span>account</span>
            </a>
          </div>
          <div className="header-bag">
            <a className="a-header bag" href="#bag">
              <span>bag</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navelastic;
