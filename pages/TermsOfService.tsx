import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Terms of Service</h1>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-500">Last Updated: April 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 prose prose-lg max-w-none text-gray-700">

          <p className="text-xl text-gray-800 mb-8">
            Welcome to TerraGuard. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using the TerraGuard website or any of our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Services</h2>
          <p>TerraGuard provides professional industrial and commercial flooring installation and related services including epoxy flooring, urethane cement, ESD conductive flooring, traffic coatings, polished concrete, and related systems. Service availability, pricing, and scope may vary. We reserve the right to modify our services at any time.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Consultations and Appointments</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Booking:</strong> Appointments can be scheduled by phone, email, or through our website contact form.</li>
            <li><strong>Confirmation:</strong> All appointments are subject to confirmation by our team.</li>
            <li><strong>Cancellation:</strong> We request at least 24 hours notice for cancellations or rescheduling.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Pricing and Payment</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Quotes:</strong> All quotes are estimates based on the information provided. Final pricing may vary based on actual site conditions and measurements.</li>
            <li><strong>Payment:</strong> Payment terms will be specified at the time of the project agreement.</li>
            <li><strong>Methods:</strong> We accept payment methods as specified at the time of service.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. SMS/Text Messaging Program</h2>
          <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Program Description</h3>
            <p className="text-gray-700 mb-4">By opting in to receive SMS/text messages from TerraGuard, you consent to receive text messages related to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li>Appointment confirmations and reminders</li>
              <li>Service updates and notifications</li>
              <li>Promotional offers and special discounts</li>
              <li>Responses to your inquiries</li>
              <li>Important service-related communications</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3">Opt-Out Instructions</h3>
            <p className="text-gray-700 mb-4">
              You can cancel the SMS service at any time. Simply text <strong>"STOP"</strong> to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3">Rejoining the Program</h3>
            <p className="text-gray-700 mb-4">
              To rejoin after opting out, sign up again through our website contact form or by contacting us directly, and we will resume sending SMS messages to you.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3">Help and Support</h3>
            <p className="text-gray-700 mb-4">
              If you experience issues with the messaging program, reply with the keyword <strong>"HELP"</strong> for more assistance, or reach out directly to:
            </p>
            <ul className="list-none text-gray-700 mb-6 space-y-1">
              <li>Phone: <a href="tel:6024151919" className="text-blue-900 hover:underline">(602) 415-1919</a></li>
              <li>Email: <a href="mailto:caleb@terraguardusa.com" className="text-blue-900 hover:underline">caleb@terraguardusa.com</a></li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3">Message and Data Rates</h3>
            <p className="text-gray-700 mb-4">
              Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies. For questions about your text plan or data plan, contact your wireless provider.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3">Carrier Liability Disclaimer</h3>
            <p className="text-gray-700 mb-4">Carriers are not liable for delayed or undelivered messages.</p>

            <h3 className="text-xl font-bold text-blue-900 mb-3">Privacy</h3>
            <p className="text-gray-700">
              For privacy-related inquiries, please refer to our{' '}
              <Link to="/privacy-policy" className="text-blue-900 hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Compliance with Industry Standards</h2>
          <p>Our SMS messaging program complies with the Telephone Consumer Protection Act (TCPA), the Cellular Telecommunications Industry Association (CTIA) guidelines, and all applicable federal and state regulations governing SMS communications.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, TerraGuard shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services or website.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
          <Link to="/privacy-policy" className="text-blue-900 hover:underline font-semibold">
            View Privacy Policy →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TermsOfService;
