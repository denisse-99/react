import "./Navbar.css";
import { Link } from "react-router-dom";
import RocketIcon from "@mui/icons-material/Rocket";

function Navbar({ header, links }) {
    /* const header
    const links = props.links; */
    /*console.log(props.links);
    console.log(props);*/

    /* const iconStyles = {
        padding: "5px",
        color: "white",
        backgroundColor: "#ED9455", */

    return (
        <nav>
            <div>
                <RocketIcon />
                <h2>{header}</h2>
            </div>
            <div>
                {links.map((link) => (
                    <Link className="link" to={link.link} key={link.id}>
                    {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;