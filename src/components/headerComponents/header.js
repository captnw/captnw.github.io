import React from "react";
import { Link } from "react-router-dom";
import logoInactive from "../../Assets/images/logo84.png";
import logoActive from "../../Assets/images/logo84dark.png";

// The large orange bootstrap container at the top of each page.

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      currentImg: logoInactive,
      img1: logoInactive,
      img2: logoActive
    }
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className="first">
              <Link to="/" title="Home page">
                {/* Changes the icon image when hovered over. */}
                <img
                  id="siteLogo"
                  src={this.state.currentImg}
                  alt=""
                  onMouseOver={() => (this.setState({currentImg: this.state.img2}))}
                  onMouseOut={() => (this.setState({currentImg: this.state.img1}))}
                />
              </Link>
            </li>
            <li>
              <Link to="/resume" title="Resume page">
                Resume
              </Link>
            </li>
            <li className="last">
              <Link to="/projects" title="Projects page">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;