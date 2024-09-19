import React from "react";
import { payWithMeProtocol } from "protocol-sdk-react";
import "./styles.css";

const App: React.FC = () => {
  const handlePaymentClick = () => {
    payWithMeProtocol({
      apiKey: "your-api-key",
      amount: "5000",
      email: "test@example.com",
      link: "https://yourpaymentgateway.com/payment",
      onSuccess: (hash) => {
        console.log("Payment Success, Hash:", hash);
        alert(`Payment successful! Hash: ${hash}`);
      },
      onError: (message) => {
        console.error("Payment Error:", message);
        alert(`Payment error: ${message}`);
      },
      onClose: () => {
        console.log("Payment modal closed");
      },
    });
  };

  return (
    <div className="App">
      <h1>Test Payment Integration</h1>
      <button className="payment-button" onClick={handlePaymentClick}>
        Pay Now
      </button>
    </div>
  );
};

export default App;
