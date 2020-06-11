import React from "react";
import styled from 'styled-components';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

const StyledLink = styled.a`
  color: white;
  text-transform: lowercase;
  &:hover {
    color: white;
    opacity: 80%;
  }
`;

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Software Development Engineer"
            >
              <StyledLink href="/" className="img-holder">
                <img
                  alt="profile"
                  width="30px"
                  height="30px"
                  className="img-fluid rounded-circle img-thumbnail"
                  src={require("../assets/img/app/avatar.png")}
                /> gerdadecio
              </StyledLink>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <StyledLink href="/" className="img-holder">
                    <img
                      alt="profile"
                      width="30px"
                      height="30px"
                      className="img-fluid rounded-circle img-thumbnail"
                      src={require("../assets/img/app/avatar.png")}
                    /> gerdadecio
                  </StyledLink>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.github.com/gerdadecio"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Checkout"
                >
                  <i className="fab fa-github" />
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="http://ph.linkedin.com/in/gerdadecio"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Connect with me on Linkedin"
                >
                  <i className="fab fa-linkedin" />
                  <p className="d-lg-none d-xl-none">Linkedin</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.twitter.com/gerdadecio"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow me"
                >
                  <i className="fab fa-twitter-square" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/iamgerdadecio"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow me on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://blog.gerdadecio.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>Blog</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainNav;
