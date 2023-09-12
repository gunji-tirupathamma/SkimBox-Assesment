import React from 'react'
import './MobileView.css'

const MobileView = () => (
  <div className="mobile-container">
    <div className="elements-container">
      <button className="element-container-button">Basic</button>
      <button className="element-container-button">Shopify</button>
      <button className="element-container-button">Advanced</button>
    </div>
    <div>
      <p className="amout-text">
        <span>&#x20B9;</span>1,994
        <span className="amount-text-span"> INR/Mo</span>
      </p>
    </div>

    <div className="offer-container">
      <p>Get your first 3 months for &#x20B9; 20/mo</p>
    </div>

    <div>
      <b>What's included on Basic</b>
      <ul className="tick-list">
        <li className="tick-list li:before">Basic Reports</li>
        <li className="tick-list li:before">Upto 1,000 inventory locations</li>
        <li className="tick-list li:before">2 staff accounts</li>
      </ul>
    </div>
    <button className="try-button">Try for Free</button>
  </div>
)

export default MobileView