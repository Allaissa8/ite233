import { ListGroup } from "react-bootstrap"
const Education = () => {
  return (
    <section className="mt-5">
        <h1 className="display-2 fw-bold text-center">My Education</h1>
        <hr/>
        <ListGroup>
            <ListGroup.Item >
                <h3>PHINMA - University of Pangasinan</h3>
                <hr/>
                <h4>BS Information Technology</h4>
                <h6>2020 - present</h6>
                <p>Dagupan City, Pangasinan</p>
            </ListGroup.Item>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span style={{width:20, height:20}} className="bg-dark  rounded-circle"></span>
                <span style={{width:2, height:30}} className="bg-dark "></span>   
            </div>
            <ListGroup.Item >
                <h3>Pangasinan National High School</h3>
                <hr/>
                <h4>Humanities and Social Science</h4>
                <h6>June 2021</h6>
                <p>Lingayen, Pangasinan</p>
            </ListGroup.Item>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span style={{width:20, height:20}} className="bg-dark  rounded-circle"></span>
                <span style={{width:2, height:30}} className="bg-dark "></span>   
            </div>
            <ListGroup.Item >
                <h3>UCCP Binmaley Ecumenical Learning Center Inc</h3>
                <hr/>
                <h6>March 2015 </h6>
                <p>Arellano, Dagupan</p>
            </ListGroup.Item>
        </ListGroup>
    </section>
  )
}

export default Education