// app/privacy/page.tsx (Next.js 13+ with App Router)
"use client";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800 pt-30">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-4 text-center">Privacy Notice</h1>
      <p className="text-center text-gray-600 mb-12">
        Himtaj Jewelry is committed to protecting your privacy and ensuring the security of your personal information.
        This notice outlines how we handle your data to ensure transparency.
      </p>

      {/* Registered Office */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Registered Office</h2>
        <p className="text-gray-700">
          T3-236, Golden-I, Techzone IV, Greater Noida West, Uttar Pradesh, 201306
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p className="text-gray-700">
          This Privacy Notice outlines the types of personal information we collect, how we use it, the parties we may
          share it with, and the measures we take to safeguard your data. By accessing our website, sub-domains, or
          mobile applications, you agree to this policy.
        </p>
      </section>

      {/* Definitions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">1. Definitions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Cookies:</strong> Small files placed on your device to remember your preferences.
          </li>
          <li>
            <strong>Data:</strong> Includes personal and non-personal information collected from you.
          </li>
          <li>
            <strong>Service Providers:</strong> Entities processing data on our behalf.
          </li>
          <li>
            <strong>User or You:</strong> Natural person accessing our stores, website, or mobile applications.
          </li>
        </ul>
      </section>

      {/* Data We Collect */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">2. Data We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Contact Information: Name, email, phone, and address.</li>
          <li>Financial Information: Payment details and transaction history.</li>
          <li>Technical Information: IP address, cookies, and device details.</li>
          <li>Personal Information: Demographic data like age and gender.</li>
        </ul>
      </section>

      {/* How We Collect Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3. How We Collect Data</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Information You Provide: During purchase, registration, or communication.</li>
          <li>Automated Means: Cookies and analytics tools.</li>
          <li>Third-Party Sources: From partners or affiliates.</li>
        </ul>
      </section>

      {/* Use of Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">4. Use of Data</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>To process orders and provide services.</li>
          <li>To improve our products and user experience.</li>
          <li>To communicate promotional offers and updates.</li>
          <li>To analyze customer behavior for marketing insights.</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-700">
          For more information, contact us at{" "}
          <a href="mailto:info@himtajjewelry.com" className="text-blue-600 underline">
            info@himtajjewelry.com
          </a>
        </p>
      </section>
    </div>
  );
}
