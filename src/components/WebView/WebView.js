import React from 'react'

import './WebView.css'
import BasicContainer from '../BasicContainer/BasicContainer'
import ShopifyContainer from '../BasicContainer/ShopifyContainer'
import AdvancedContainer from '../BasicContainer/AdvancedContainer'

const WebView = () => (
  <div className="web-container">
    <div className="payment-container">
      <p className="monthly-pay">Pay Monthly</p>
      <p className="year-pay">Pay yearly(Save 25%)</p>
    </div>

    <div className="items-container">
      <BasicContainer />
      <ShopifyContainer />
      <AdvancedContainer />
    </div>
  </div>
)

export default WebView