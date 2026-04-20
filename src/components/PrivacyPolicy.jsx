export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-8 py-20">
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.location.hash = '' }}
          className="inline-flex items-center gap-2 mb-10 font-['Inter',sans-serif] text-[14px]"
          style={{ color: '#787cde' }}
        >
          ← Back to Portfolio
        </a>

        <h1 className="font-['Heebo',sans-serif] font-bold text-[40px] leading-[48px] mb-2" style={{ color: '#0f172a' }}>
          Privacy Policy
        </h1>
        <p className="font-['Inter',sans-serif] text-[14px] mb-10" style={{ color: '#94a3b8' }}>
          Last updated: April 2026
        </p>

        <div className="space-y-10" style={{ color: '#475569' }}>
          <section>
            <h2 className="font-['Heebo',sans-serif] font-semibold text-[22px] mb-3" style={{ color: '#0f172a' }}>1. Introduction</h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px]">
              This Privacy Policy describes how Yun Lee ("I", "me", or "my") collects, uses, and handles information when you visit this portfolio website (the "Site"). I am committed to protecting your privacy and handling any information obtained with care and respect.
            </p>
          </section>

          <section>
            <h2 className="font-['Heebo',sans-serif] font-semibold text-[22px] mb-3" style={{ color: '#0f172a' }}>2. Information I Collect</h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px] mb-3">
              This Site is a personal portfolio and does not collect personal data through forms or accounts. The only information that may be passively collected includes:
            </p>
            <ul className="list-disc list-inside space-y-2 font-['Inter',sans-serif] text-[16px] leading-[28px] pl-4">
              <li>Standard server log data (IP address, browser type, pages visited, time and date of visit) via hosting infrastructure</li>
              <li>Analytics data (page views, referral sources) if analytics tools are enabled in the future</li>
            </ul>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px] mt-3">
              I do not sell, trade, or otherwise transfer your information to outside parties.
            </p>
          </section>

          <section>
            <h2 className="font-['Heebo',sans-serif] font-semibold text-[22px] mb-3" style={{ color: '#0f172a' }}>3. Contact Information</h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px]">
              If you contact me via email (kyralee0212@gmail.com), I will receive your name and email address solely for the purpose of responding to your enquiry. This information is not stored beyond the scope of our correspondence and is never shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-['Heebo',sans-serif] font-semibold text-[22px] mb-3" style={{ color: '#0f172a' }}>4. Cookies</h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px]">
              This Site does not currently use cookies or similar tracking technologies for marketing or profiling purposes. Basic session data may be stored temporarily by your browser as part of normal web browsing behaviour.
            </p>
          </section>

          <section>
            <h2 className="font-['Heebo',sans-serif] font-semibold text-[22px] mb-3" style={{ color: '#0f172a' }}>5. Third-Party Links</h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px]">
              This Site may contain links to external platforms (such as LinkedIn, Behance, or other professional networks). I am not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-['Heebo',sans-serif] font-semibold text-[22px] mb-3" style={{ color: '#0f172a' }}>6. Changes to This Policy</h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px]">
              I reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page with a revised "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="font-['Heebo',sans-serif] font-semibold text-[22px] mb-3" style={{ color: '#0f172a' }}>7. Contact</h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[28px]">
              If you have any questions about this Privacy Policy, please contact me at <a href="mailto:kyralee0212@gmail.com" style={{ color: '#787cde' }}>kyralee0212@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
