import { Container } from "react-bootstrap";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

function Home() {
    return(
        <Container>
            <div className="my-5">
            <h1 style={{fontSize: "50px"}}>
            Hi, I'm Jacob Elbaz.
            </h1>
            <h1 style={{color: "aquamarine"}}>
            Software Engineering Student
            </h1>
            <h1 style={{color: "aquamarine"}}>
            Front-End Developer
            </h1>
            <div> 
              <a href="https://www.linkedin.com/in/jacob-elbaz/" target="_blank" className='text-decoration-none text-white'><img src={linkedin}/></a>
              <a href="https://github.com/JacobElbaz" target="_blank" className='text-decoration-none text-white mx-3'><img src={github}/></a>
            </div>
            </div>
        </Container>
    )
}

export default Home;