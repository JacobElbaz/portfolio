import { Container } from "react-bootstrap";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

function Home() {
    return(
        <Container id="home">
            <div className="py-5">
            <h1 style={{fontSize: "50px", color: "black"}}>
            Hi, I'm Jacob Elbaz.
            </h1>
            <h2 style={{color: "#7caef3"}}>
            Software Engineering Student
            </h2>
            <h2 style={{color: "#7caef3"}}>
            Front-End Developer
            </h2>
            <div> 
              <a href="https://www.linkedin.com/in/jacob-elbaz/" target="_blank" className='text-decoration-none'><img className="p_links" src={linkedin}/></a>
              <a href="https://github.com/JacobElbaz" target="_blank" className='text-decoration-none mx-3'><img className="p_links" src={github}/></a>
            </div>
            </div>
        </Container>
    )
}

export default Home;