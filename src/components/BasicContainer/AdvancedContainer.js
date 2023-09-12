import React from 'react'

import './BasicContainer.css'

const BasicContainer = () => (
  <div className="basic-container">
    <h1>Advanced</h1>
    <h5>FOR MEDIUM TO LARGE BUSINESSES</h5>
    <p className="text-1">
      Get thebest of Shopify with custom reporting and our lowest transaction
      fees
    </p>
    <div>
      <p className="amout-text">
        <span>&#x20B9;</span>30,164
        <span className="amount-text-span"> INR/Mo</span>
      </p>
    </div>

    <div className="offer-container">
      <p>Get your first 3 months for &#x20B9; 20/mo</p>
    </div>

    <div>
      <b>What's included on Basic</b>
      <ul className="tick-list">
        <li className="tick-list li:before">Custom report builder</li>
        <li className="tick-list li:before">Upto 1,000 inventory locations</li>
        <li className="tick-list li:before">15 staff accounts</li>
      </ul>
    </div>
    <button className="try-button">Try for Free</button>
  </div>
)

export default BasicContainer
