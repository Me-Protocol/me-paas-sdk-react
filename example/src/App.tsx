import React from 'react'

import { payWithMeProtocol } from 'protocol-sdk-react'

const App = () => {
  const handlePaymentClick = () => {
    payWithMeProtocol({
      apiKey: 'your-api-key',
      amount: '5000',
      email: 'test@example.com',
      link: 'http://localhost:3000',
      onSuccess: (hash) => {
        console.log('Payment Success, Hash:', hash)
      },
      onError: (message) => {
        console.error('Payment Error:', message)
      },
      onClose: () => {
        console.log('Payment modal closed')
      }
    })
  }

  return (
    <div>
      <h1>Test Payment Integration</h1>
      <button onClick={handlePaymentClick}>Pay Now</button>
    </div>
  )
}

export default App
