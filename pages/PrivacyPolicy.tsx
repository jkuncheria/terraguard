import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Privacy Policy</h1>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-500">Last Updated: April 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 prose prose-lg max-w-none text-gray-700">

          <p className="text-xl text-gray-800 mb-8">
            TerraGuard ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services, including our SMS messaging program.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide when you:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Fill out our contact form</li>
            <li>Request a quote or schedule a consultation</li>
            <li>Subscribe to promotional communications</li>
            <li>Contact us via phone, email, or text message</li>
          </ul>
          <p>This information may include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Project details and flooring requirements</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Schedule and confirm consultations and project estimates</li>
            <li>Send appointment reminders and service updates</li>
            <li>Send promotional offers and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. SMS/Text Messaging Privacy</h2>
          <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-100">
            <p className="font-bold text-blue-900 mb-4">
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
            </p>
            <p className="text-gray-700 mb-4">
              Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
            <p className="text-gray-700 mb-4">
              Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the Text Message services.
            </p>
            <p className="text-gray-700 mb-4">
              If you opt in to receive SMS/text messages from us, you agree to receive text messages regarding appointment confirmations and reminders, service updates and notifications, responses to your inquiries, and account and scheduling information.
            </p>
            <p className="text-gray-700 mb-4"><strong>Message Frequency:</strong> Message frequency varies based on your interactions with us and your preferences.</p>
            <p className="text-gray-700 mb-4"><strong>Message and Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier and plan.</p>
            <p className="text-gray-700 mb-4"><strong>Opt-Out:</strong> You may opt out of receiving text messages at any time by replying STOP to any message. After opting out, you will receive a confirmation message and will no longer receive text messages from us unless you opt in again.</p>
            <p className="text-gray-700"><strong>Help:</strong> For help, reply HELP to any message or contact us at <a href="tel:6024151919" className="text-blue-900 hover:underline">(602) 415-1919</a> or <a href="mailto:caleb@terraguardusa.com" className="text-blue-900 hover:underline">caleb@terraguardusa.com</a>.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., payment processors, CRM systems, email services)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Opt out of SMS/text messages by replying STOP</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Children's Privacy</h2>
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4 mb-8 border border-gray-200">
            <p className="font-bold text-gray-900 mb-2">TerraGuard</p>
            <p className="mt-2">
              <strong>Phone:</strong> <a href="tel:6024151919" className="text-blue-900 hover:underline">(602) 415-1919</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:caleb@terraguardusa.com" className="text-blue-900 hover:underline">caleb@terraguardusa.com</a>
            </p>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center text-blue-900 hover:underline font-medium">
            ← Back to Home
          </Link>
          <Link to="/terms-of-service" className="text-blue-900 hover:underline font-semibold">
            View Terms of Service →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
