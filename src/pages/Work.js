import { Container } from "react-bootstrap"
import Project from "../components/Project"

const Work = () => {
  return (
    <>
      <Container className="w-100 mt-5">
        <h1 className="display-1 fw-bold">My Projects</h1>
        <p>Hello there! Here are my recent projects that I've done over these past few years</p>
        <hr/>
        <div className="w-100 d-flex flex-wrap justify-content-between align-items-center gap-2">
          <Project/>
        </div>
      </Container>
    </>
  )
}

export default Work