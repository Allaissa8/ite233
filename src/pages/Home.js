import { Col, Row, Image, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <section>
      <Container className="d-flex align-items-center justify-content-center">
        <Row className="hero d-flex align-items-center justify-content-center">
          <Col>
            <Image src="/profile.jpg" alt="profile" width={450} style={{minWidth:300}} fluid roundedCircle/>
          </Col>
          <Col className="w-100">
            <h5>Hi there 👋</h5>
            <h1 className="display-3 fw-bold">I'm Allaisa Soriano</h1>
            <h3 className="display-5">Future Web Developer</h3>
            <hr/>
            <p className="border border-2 bg-light rounded p-1">
              I am a 19-year-old student studying BS Information Technology at the PHINMA University of Pangasinan 🌐💻☕ </p>
            
            <div className="d-flex  align-items-center gap-3">
              <Link to="/work">
              <Button size="lg" variant="outline-dark">View Work</Button>
              </Link>
              <span style={{width:1, height:40}} className="bg-dark "></span>   
              <div className="d-flex  align-items-center gap-2">
                <SocialLinks/>
               </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center text-center my-5">
        <h1 className="display-2 fw-bold">About Me</h1>
        <p className="about">I am a 19-year-old student studying BS Information Technology at the University of Pangasinan.
         I can't wait to know more about web development. I tend to enjoy designing websites even if it is hard and sometimes
          confusing, yet I am here to learn and do my very best at anything.</p>
      </Container>
      <Container className="border border-2 rounded bg-light mt-5 p-2">
        <h1 className="display-2 fw-bold">Recent Projects</h1>
        <hr/>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 py-2">
          <Project/>
        </div>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 fw-bold">Contact Me</h1>
            <p>Feel free to contact me at my socials below</p>
            <div className="d-flex  align-items-center gap-2">
              <div className="d-flex  align-items-center gap-2">
                <SocialLinks/>
               </div>
               |
               <Link to="mailto:llca.soriano.up@phinamed.com " className="text-decoration-none text-dark">llca.soriano.up@phinamed.com</Link>
            </div>
          </Col>
          <Col>
            <ContactForm/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home