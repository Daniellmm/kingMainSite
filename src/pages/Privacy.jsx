import LegalContentSection from '../component/LegalContentSection'

function Privacy() {
  return (
    <LegalContentSection headline="Privacy Policy">
      <div className="mb-4 text-base">
        <strong>Last Updated:</strong> July 3, 2025
      </div>
      <p className="mb-6">
        At <strong>HIGH TICKET OFFER FINANCING</strong> (“Company,” “we,” “us,”
        or “our”), we respect your privacy and are committed to protecting your
        personal information. This Privacy Policy explains how we collect, use,
        disclose, and protect your personal data when you engage with our
        educational Services.
      </p>

      <h2 className="mb-2 mt-6 text-lg font-bold">1. Information We Collect</h2>
      <ul className="mb-6 list-disc pl-6">
        <li>
          <strong>Personal Information:</strong> such as your name, email
          address, phone number, billing information, and other contact details
          you provide during registration or while using our Services.
        </li>
        <li>
          <strong>Technical Information:</strong> including your IP address,
          browser type, and device identifiers, collected through cookies or
          similar technologies.
        </li>
        <li>
          <strong>Usage Data:</strong> details of how you interact with our
          website, educational materials, and software tools.
        </li>
      </ul>

      <h2 className="mb-2 mt-6 text-lg font-bold">
        2. How We Use Your Information
      </h2>
      <ul className="mb-6 list-disc pl-6">
        <li>Provide and improve our educational and coaching services</li>
        <li>Process payments and manage your account</li>
        <li>Communicate with you about program updates and support</li>
        <li>Ensure compliance with our Terms of Service</li>
        <li>Conduct research and analysis to improve our offerings</li>
      </ul>

      <h2 className="mb-2 mt-6 text-lg font-bold">
        3. Sharing Your Information
      </h2>
      <p className="mb-2">
        We do not sell your personal data. We may share your information with:
      </p>
      <ul className="mb-6 list-disc pl-6">
        <li>
          Trusted service providers who assist us with program delivery, payment
          processing, or data hosting
        </li>
        <li>Regulatory authorities or law enforcement when legally required</li>
        <li>
          Affiliates or business partners under strict confidentiality
          obligations
        </li>
      </ul>

      <h2 className="mb-2 mt-6 text-lg font-bold">4. Data Security</h2>
      <p className="mb-6">
        We implement reasonable administrative, technical, and physical
        safeguards to protect your personal information from unauthorized
        access, disclosure, or misuse.
      </p>

      <h2 className="mb-2 mt-6 text-lg font-bold">5. Your Rights</h2>
      <ul className="mb-6 list-disc pl-6">
        <li>Access and review your personal data</li>
        <li>Request corrections to your personal data</li>
        <li>Withdraw your consent to marketing communications at any time</li>
        <li>
          Request deletion of your data, subject to any legal obligations to
          retain certain records
        </li>
      </ul>

      <h2 className="mb-2 mt-6 text-lg font-bold">6. Cookies</h2>
      <p className="mb-6">
        We use cookies and similar tracking technologies to enhance your user
        experience, analyze trends, and manage the security of our website. You
        can control cookie preferences through your browser settings.
      </p>

      <h2 className="mb-2 mt-6 text-lg font-bold">7. Data Retention</h2>
      <p className="mb-6">
        We will retain your personal data only as long as necessary to fulfill
        the purposes outlined in this Policy, or as required by applicable law.
      </p>

      <h2 className="mb-2 mt-6 text-lg font-bold">
        8. Changes to This Privacy Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy periodically. We will notify you of
        material changes by posting the updated version on our website.
      </p>

      <h2 className="mb-2 mt-6 text-lg font-bold">9. Contact Information</h2>
      <p className="mb-2">
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <div className="mb-6">
        <div>HIGH TICKET OFFER FINANCING</div>
        <div>1309 Coffeen Ave</div>
        <div>Suite 1200</div>
        <div>Sheridan, Wyoming 82801</div>
        <div>info@highticketofferfinancing.com</div>
      </div>
    </LegalContentSection>
  )
}

export default Privacy
