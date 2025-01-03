import logo from "../imgs/logo.png";
import { Link } from "react-router";
const Header = () => {
    return (
        <header className="header">
            <div className="content">
                <img src={logo} alt="" className="logo" />
                <nav className="menu">
                    <Link to="/">HomePage</Link>
                    <Link to="/add_new">Add new</Link>
                    <a href="#!">Updating...</a>
                    <a href="#!">Updating...</a>
                    <a href="#!">Updating...</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
