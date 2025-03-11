import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const UpiPayment = () => {
  const upiLink =
    "intent://pay?pa=7439395585@ptsbi&pn=Sahil%20Sajar&am=1&cu=INR&tn=Payment%20for%20services";

  const handlePayNow = () => {
    window.location.href = upiLink;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Scan or Click to Pay</h1>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <QRCodeCanvas value={upiLink} size={200} />
      </div>

      <p className="mt-2 text-gray-600">Scan this QR code using any UPI app.</p>

      <button
        onClick={handlePayNow}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Pay Now
      </button>
    </div>
  );
};

export default UpiPayment;
