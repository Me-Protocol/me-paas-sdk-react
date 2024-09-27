import React from 'react'

import { payWithMePaas } from 'me-paas-sdk-react'

const App = () => {
  const handlePaymentClick = () => {
    payWithMePaas({
      apiKey: 'ro2a6ajkavja4i0uhui41i',
      amount: '500',
      email: 'test@example.com',
      onSuccess: (taskId) => {
        console.log('Payment Success, transactionId:', taskId)
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
