import React from 'react'

import './BasicContainer.css'

const BasicContainer = () => (
  <div className="basic-container">
    <div className="most-popular">
      <p>Most Popular</p>
    </div>
    <h1>Basic</h1>
    <h5>FOR INDIVIDUAL & SMALL BUSINESSES</h5>
    <p className="text-1">
      Everything you need to create your store, ship products, and process
      payments
    </p>
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

export default BasicContainer