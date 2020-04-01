import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import MainNav from "../components/MainNav";
import ContactForm from "../components/ContactForm";
import Profile from "../components/Profile";

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
                    <p>I'm a Software Development Engineer currently based in Sydney, Australia. In the past years I have worked for different companies and startups from different industries using the latest tech stack like Ruby/Rails, ReactJs, AWS, and more.</p>
                    <p>Currently working on <a href="https://yugrel.com" className="warning-link">yugrel.com</a> in my pastime. Building great ideas is my passion, may it be a web app or an awesome mobile niche and also, I ❤️ coffee!!</p>
                    <p>**You can find the source code of this website in <a href="https://github.com/gerdadecio/personal-website">Github</a></p>
                  </p>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="8">
                  <Profile
                    mainPhotoUrl={require("../assets/img/me.jpeg")}
                    mainText="skills & stuff"
                    socialIcons={[
                      {url: 'http://www.github.com/gerdadecio', title: 'github', tip: 'Checkout'},
                      {url: 'http://ph.linkedin.com/in/gerdadecio', title: 'linkedin', tip: 'Connect with me'},
                      {url: 'http://www.twitter.com/gerdadecio', title: 'twitter', tip: 'Follow me'},
                      {url: 'http://www.instagram.com/iamgerdadecio', title: 'instagram', tip: 'Follow me'},
                    ]}
                  />
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
                      <h5 className="text-on-back">reach</h5>
                    </CardHeader>
                    <CardBody>
                      <ContactForm />
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
