import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>Last updated: 2024</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              ToothRanker ("we", "our", or "us") operates the ToothRanker website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
                <ul className="list-disc pl-6 mt-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Practice name and location</li>
                  <li>Cookies and usage data</li>
                </ul>
              </li>
              <li><strong>Usage Data:</strong> We may also collect information on how the service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address, browser type, browser version, pages visited, and the time and date of your visit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of Data</h2>
            <p>ToothRanker uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              <strong>ToothRanker</strong><br />
              Email: info@werankdentist.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
