import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <p>hello world</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/careers">Careers</Link>
    </div>
  );
};
export default Navbar;
