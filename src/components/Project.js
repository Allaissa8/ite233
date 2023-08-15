import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const projectData = [
    {
        projectTitle: "UPCITE",
        projectDescription: "A virtual exhibit on  concurring CITE Department.",
        projectImg:"/upcite.png",
        url: "https://github.com/Allaissa8"
    },
    {
        projectTitle: "TimelessLove Lenswork",
        projectDescription: "The web only focuses on wedding events, it includes various shots from a Pre-nup Photoshoot, Wedding Ceremony Shots, and Reception Photos.",
        projectImg:"/photostudio.png",
        url:"https://github.com/Allaissa8"
    },
    {
        projectTitle: "PEEPS",
        projectDescription: "A virtual exhibit on  concurring CITE Department.",
        projectImg:"/mentalhealth.png",
        url: "https://github.com/Allaissa8"
    }
]
const Project = () => {
  return (
    <>
        {projectData.map((project, index) => (
                <Card key={index} style={{ minWidth: '18rem', maxWidth: '25rem', height: '300px' }} className="w-100 h-100">
                    <Card.Img src={project.projectImg} style={{objectFit:"cover", minWidth: '18rem', maxWidth: '25rem', height: '300px' }}  />
                    <Card.ImgOverlay  className="card-background text-light">
                        <Card.Title className="fw-bold">{project.projectTitle}</Card.Title>
                        <Card.Text>
                            {project.projectDescription}
                        </Card.Text>
                        <Link to={project.url}>
                            <Button variant="outline-light">View Github</Button>
                        </Link>
                    </Card.ImgOverlay>
                </Card>
            ))}
    </>
  )
}

export default Project