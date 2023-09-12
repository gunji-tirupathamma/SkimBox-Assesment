import React,{useState} from 'react'
import './NavbarContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 



const NavbarContainer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }


return(
  <div className="container">
    <img
      src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
      className="logo "
    />
    <h1 className="heading">Shopify</h1>

    <div className="items-container">
      <select className="section-container">
        <option className="option-text ">Solutions</option>
      </select>
      <p className="text">Pricing</p>
      <select className="section-container">
        <option className="option-text ">Resources</option>
      </select>
    </div>

    <div className="buttons-container">
      <button className="login-button">LogIn</button>
      <button className="start-button">Start free trail</button>
    </div>
    <div className="dropdown-container">
        <div className="bars-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {showDropdown && (
          <select className="dropdown-menu">
            <option>Solutions</option>
            <option>Pricing</option>
            <option>Resources</option>
          </select>
        )}
      </div>
  </div>
)
        }
export default NavbarContainer
