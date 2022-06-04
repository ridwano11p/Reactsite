import Logo from "./logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logocontainer">
        <img className="imglogo" src={Logo} alt="red circle" />
      </div>
 <div className="hcon">
     <h1 className="headtext">Training Site</h1>
     </div>
     

    </nav>
  );
};

export default Navbar;
