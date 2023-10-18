import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
      Home
      </Link>
      <ul>
        {/* <CustomLink to="/work">Work</CustomLink> */}
        <CustomLink to="/about">About</CustomLink>
        {/* <CustomLink to="/contact">Contact</CustomLink> */}
        {/* <CustomLink to="javascript:void(0)" target="_blank" rel="noopener noreferrer" onClick={() => window.location = 'mailto:marta.marta.k@gmail.com'}>
        Contact
        </CustomLink> */}
        <a href="mailto:marta.marta.k@gmail.com?subject=Fresh from martakolodziejczak.com&body=Hi," target="_blank" rel="noopener noreferrer">Contact</a>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
} 

