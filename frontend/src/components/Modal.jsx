import React, { useState } from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; // Return nothing if modal is not open
  const [termAccepted, setTermAccepted] = useState(false);
  const handleChange = (e) => {
    setTermAccepted(!termAccepted);
  };

  return (
    // Modal backdrop
    <div className="fixed top-0 inset-0 bg-opacity-50  flex justify-center items-center ">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 max-h-[100vh] overflow-y-scroll  hidescroll">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-black hover:text-red-500">
            &times; {/* Close icon */}
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4 overflow-y-scroll hidescroll">
          <p>*1. Acceptance
          of Terms* By registering and using the Alumni Association Platform,
          you agree to be bound by these Terms and Conditions. If you do not
          agree to these terms, you should not use this platform.</p> <p>*2.
          Eligibility* To register, you must: - Be at least 18 years old. - Be
          an alumnus, student, or affiliate of a recognized educational
          institution.</p> <p>*3. User Registration* When registering, you agree to
          provide accurate, current, and complete information. You will be asked
          to verify your identity by submitting valid documents like: - College
          ID Card - Marksheet with College Name - Migration Certificate -
          Bonafide Letter with Stamp Failure to provide accurate information may
          result in termination of your account.</p> <p>*4. Privacy* Your personal
          data, including any uploaded documents, will be securely stored in
          compliance with data protection laws. We may use your data to improve
          the platform and for communication purposes. We will not share your
          information with third parties without your explicit consent, except
          as required by law.</p> <p>*5. Premium Membership* The Premium section allows
          you to access additional features such as connecting with alumni from
          other colleges, networking, and mentorship opportunities. Premium
          features require payment, and once enrolled, access will be granted
          after verification.</p> <p>*6. Payment Terms* For any paid services such as
          premium membership, you agree to the pricing and payment terms. All
          payments are non-refundable except as required by law.</p> <p>*7. Content
          Ownership and Use* - You retain ownership of any content you post,
          such as success stories, job postings, etc. - By posting content, you
          grant us a non-exclusive, royalty-free license to use, display, and
          share your content on the platform. - You agree not to post any
          content that is illegal, offensive, or infringes on intellectual
          property rights.</p> <p>*8. Prohibited Activities* - Misrepresentation of
          identity or credentials. - Uploading malicious software, viruses, or
          any harmful content. - Harassing or abusing other users. -
          Unauthorized access to other accounts or personal data. </p><p>*9.
          Termination* We reserve the right to suspend or terminate your account
          for any breach of these terms, or if your behavior is harmful to the
          community or platform.</p> <p>*10. Limitation of Liability* The platform is
          provided "as is" and without warranties of any kind. We do not
          guarantee the availability, accuracy, or performance of the platform.
          We are not liable for any loss or damages arising from your use of the
          platform.</p> <p>*11. Modifications to Terms* We reserve the right to modify
          these Terms and Conditions at any time. You will be notified of any
          changes, and continued use of the platform constitutes acceptance of
          the revised terms.</p><p> *12. Governing Law* These Terms and Conditions are
          governed by the laws of [Country/State]. Any disputes arising out of
          these terms will be subject to the jurisdiction of the courts in
          [City, Country].</p> <p>*13. Contact Information* If you have any questions
          or concerns regarding these Terms and Conditions, please contact our
          support team at [Email Address]. --- By clicking "I Agree" and
          registering, you confirm that you have read, understood, and agree to
          these Terms and Conditions.</p>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end gap-2 mr-5">
          <p>Accept</p>
          <input type="checkbox" onChange={handleChange} />
        </div>
        <div className="flex justify-end mr-5">
          <button
            onClick={onClose}
            className="bg-red-500 border px-2 py-1 mt-2 rounded disabled:bg-gray-600 disabled:cursor-default cursor-pointer"
            disabled={!termAccepted}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
