import logo from "./logo.jpg";

function Footer(){
    return(
        <div className="copyright">
            <img src={logo} alt="" height={"50px"} width={"50px"}/>
            <span>© Developed and designed by Jacob Elbaz . 2021</span>
        </div>
    )
}

export default Footer;