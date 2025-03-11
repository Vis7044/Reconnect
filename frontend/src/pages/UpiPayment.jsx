import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const UpiPayment = () => {
  const upiLink = "upi://pay?pa=7439395585@ptsbi&pn=Sahil%20Sajar&am=1&cu=INR&tn=Payment%20for%20services";
  const intentLink = "intent://pay?pa=7439395585@ptsbi&pn=Sahil%20Sajar&am=1&cu=INR&tn=Payment%20for%20services#Intent;scheme=upi;package=com.phonepe.app;end";

  const handlePayNow = () => {
    // Try intent for Android
    if (navigator.userAgent.toLowerCase().includes("android")) {
      window.location.href = intentLink;
    } else {
      // Fallback to upi:// for other platforms
      const newWindow = window.open(upiLink, "_blank");
      if (!newWindow) {
        alert("If the payment app doesn't open, please scan the QR code to complete the payment.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Scan or Click to Pay</h1>

      {/* QR Code */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <QRCodeCanvas value={upiLink} size={200} />
      </div>

      <p className="mt-2 text-gray-600">Scan this QR code using any UPI app.</p>

      {/* Pay Now Button */}
      <button
        onClick={handlePayNow}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Pay Now
      </button>

      {/* Direct Link as Fallback */}
      <a
        href={upiLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 underline"
      >
        Open Payment in UPI App
      </a>
    </div>
  );
};

export default UpiPayment;
