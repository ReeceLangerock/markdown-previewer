import React from "react";

export class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="footer__container">
          <div>
            © {currentYear}{" "}
            <a href="http://reecelangerock.com" rel="noopener noreferrer" target="_blank">
              Reece Langerock
            </a>
          </div>
          <div className="toTop" onClick={this.scrollToTop}>
            <i className="fa fa-arrow-up" aria-hidden="false" />
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
