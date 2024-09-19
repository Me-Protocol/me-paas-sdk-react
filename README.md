# protocol-sdk-react

[![NPM](https://img.shields.io/npm/v/protocol-sdk-react.svg)](https://www.npmjs.com/package/protocol-sdk-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save protocol-sdk-react
```

## Usage

```tsx
import React from 'react'

import { payWithMeProtocol } from 'protocol-sdk-react'

const App = () => {
  const handlePaymentClick = () => {
    payWithMeProtocol({
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
```

## License

MIT © [codemobii](https://github.com/codemobii)