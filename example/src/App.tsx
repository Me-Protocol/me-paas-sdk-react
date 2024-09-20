import React from 'react'

import { payWithMePaas } from 'me-paas-sdk-react'

const App = () => {
  const handlePaymentClick = () => {
    payWithMePaas({
      apiKey: 'your-api-key',
      amount: '5000',
      email: 'test@example.com',
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
