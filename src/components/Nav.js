import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
        <Link to="/stocks"> Home</Link>
         &nbsp; ||  &nbsp; 
         <Link to="/about">About</Link>
    </nav>
  );
}