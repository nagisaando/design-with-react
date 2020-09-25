import { Link } from "gatsby"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshop">Workshop</Link>
      <Link to="/buy">Buy</Link>

    </div>
  </div>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
