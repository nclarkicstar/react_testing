import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <p>hello world</p>
      <br></br>
      <Link to="/">Helllo</Link>
      <br></br>
      <Link to="/about">World</Link>
      <br></br>
      <Link to="/careers">Helo World</Link>
    </div>
  );
};
export default Navbar;
