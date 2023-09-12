import React from 'react'

import './BasicContainer.css'

const ShopifyContainer = () => (
  <div className="basic-container">
    <h1>Shopify</h1>
    <h5>FOR SMALL BUSINESSES</h5>
    <p className="text-1">
      Level up your business with professional reporting and more staff accounts
    </p>
    <div>
      <p className="amout-text">
        <span>&#x20B9;</span>7,447
        <span className="amount-text-span"> INR/Mo</span>
      </p>
    </div>

    <div className="offer-container">
      <p>Get your first 3 months for &#x20B9; 20/mo</p>
    </div>

    <div>
      <b>What's included on Basic</b>
      <ul className="tick-list">
        <li className="tick-list li:before">Professional Reports</li>
        <li className="tick-list li:before">Upto 1,000 inventory locations</li>
        <li className="tick-list li:before">5 staff accounts</li>
      </ul>
    </div>
    <button className="try-button">Try for Free</button>
  </div>
)

export default ShopifyContainer