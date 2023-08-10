import { Container } from "react-bootstrap";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

function Home() {
    return (
        <div id="home">
            <div style={{paddingBlock: '100px'}}>
                <p style={{ margin: '0', color: 'black', fontWeight: 'bold' }}>Hi, I'm</p>
                <h1 style={{ fontSize: "70px", color: "black" }} className='tracking-in-contract-bck-bottom'>
                    Jacob Elbaz
                </h1>
                <h2 style={{ color: "black" }}>
                    Software Engineering
                </h2>
                <h2 style={{ color: "black" }}>
                    FullStack Developer
                </h2>
                <div>
                    <a href="https://www.linkedin.com/in/jacob-elbaz/" target="_blank" className='text-decoration-none'><img className="p_links" src={linkedin} /></a>
                    <a href="https://github.com/JacobElbaz" target="_blank" className='text-decoration-none mx-3'><img className="p_links" src={github} /></a>
                </div>
            </div>
        </div>
    )
}

export default Home;