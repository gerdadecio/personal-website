import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
  Badge
} from "reactstrap";

// core components
import MainNav from "../components/MainNav";

const carouselItems = [
  {
    src: require("../assets/img/app/assembly.jpg"),
    altText: "AssemblyPayments",
    caption: "Built features for the API of AssemblyPayments"
  },
  {
    src: require("../assets/img/app/fuzzie.jpeg"),
    altText: "Fuzzie",
    caption: "Worked on the rails backend for Fuzzie, a gifting app."
  },
  {
    src: require("../assets/img/app/talkback.jpg"),
    altText: "Tlkbck",
    caption: "A music recording studio management web app."
  },
  {
    src: require("../assets/img/app/tigerbalm.jpg"),
    altText: "TigerBalm",
    caption: "Dressed up the TigerBalm website."
  }
];

let ps = null;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <MainNav />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("../assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("../assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Gerda Decio</h1>
                  <h5 className="text-on-back">it's me</h5>
                  <p className="profile-description">
                    <p>I'm a Ruby on Rails developer currently based in Sydney, Australia. </p>
                    <p>In the past years I have worked for different companies and startups from different industries.</p>
                    <p>Currently working on <a href="https://yugrel.com" className="warning-link">yugrel.com</a> in my pastime. Building great ideas is my passion, may it be a web app or an awesome mobile niche and also, I ❤️ coffee!!</p>
                    <p>**You can find the source code of this website in <a href="#">Github</a></p>
                  </p>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="8">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="profile"
                        className="img-center img-fluid rounded-circle"
                        src={require("../assets/img/me.jpeg")}
                      />
                      <div className="btn-wrapper profile pt-3 text-center">
                        <Button
                          className="btn-icon btn-sm"
                          color="github"
                          href="http://www.github.com/gerdadecio"
                          id="tooltipgithub"
                          target="_blank"
                        >
                          <i className="fab fa-github" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltipgithub">
                          Checkout
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-sm"
                          color="linkedin"
                          href="http://ph.linkedin.com/in/gerdadecio"
                          id="tooltiplinkedin"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltiplinkedin">
                          Connect with me
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-sm"
                          color="twitter"
                          href="http://www.twitter.com/gerdadecio"
                          id="tooltiptwitter"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltiptwitter">
                          Follow me
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-sm"
                          color="instagram"
                          href="http://www.instagram.com/iamgerdadecio"
                          id="tooltipinsta"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltipinsta">
                          Follow me
                        </UncontrolledTooltip>
                      </div>

                    </CardHeader>
                    <CardBody>
                      <h4 className="text-center">skills & stuff</h4>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#"
                          >
                            Backend
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#"
                          >
                            Frontend
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#"
                          >
                            Others
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Badge color="primary" pill>Ruby & Rails</Badge>
                          <Badge color="info" pill>APIs</Badge>
                          <Badge color="info" pill>Third Party Integrations</Badge>
                          <Badge color="success" pill>Rspec</Badge>
                          <Badge color="default" pill>Capistrano</Badge>
                          <Badge color="primary" pill>CI/CD</Badge>
                          <Badge color="default" pill>Heroku</Badge>
                          <Badge color="warning" pill>AWS</Badge>
                          <Badge color="warning" pill>Microservices</Badge>

                        </TabPane>
                        <TabPane tabId="tab2">
                          <Badge color="warning" pill>Html/JS</Badge>
                          <Badge color="info" pill>ReactJs</Badge>
                          <Badge color="success" pill>Jest</Badge>
                          <Badge color="success" pill>Nodejs</Badge>
                          <Badge color="primary" pill>CSS/SCSS</Badge>
                          <Badge color="default" pill>Photoshop</Badge>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Badge color="default" pill>Coffee</Badge>
                          <Badge color="success" pill>Hikes</Badge>
                          <Badge color="default" pill>Sweets</Badge>
                          <Badge color="danger" pill>Reddit</Badge>
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Latest Ycombinator News</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>The Daily: Nexo to Pay on Stable...</td>
                              </tr>
                              <tr>
                                <td>Venezuela Begins Public of Nation...</td>
                              </tr>
                              <tr>
                                <td>PR: BitCanna – Dutch Blockchain...</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Projects</h1>
                  <h5 className="text-on-back">clients&</h5>
                  <p className="profile-description text-left">
                  It takes knowledge, smart work, and dedication to make great ideas come to life. I have been helping make great ideas happen for almost a decade and am always ready for new challenges and exciting projects.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Send me an email</h1>
                      <h5 className="text-on-back">contact</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input type="email" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="Hello there!" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                        >
                          Send
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give me a ring</h4>
                      <p>
                        Gerda Decio <br />
                        +61 405 211 213 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default App;
