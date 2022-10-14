import logo from "./logo.jpg";

function Footer(){
    return(
        <div className="copyright">
            <img src={logo} alt="" height={"40px"} width={"40px"}/>
            <span>© Developed and designed by Jacob Elbaz. 2022</span>
        </div>
    )
}

export default Footer;