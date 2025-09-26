// app/help/page.jsx (Next.js 13+ with App Router)
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, Mail } from "lucide-react";

const faqs = [
  {
    question: "What are the payment options available?",
    answer:
      "Payments can be made through credit cards, debit cards, international cards, net banking, or cash on delivery. Payments on www.himtajjewelry.com will only be accepted in INR for domestic orders. For international credit cards, the transaction amount will be converted to INR before the payment is accepted. Currency conversion charges may apply based on your credit card policy.",
  },
  {
    question: "Which credit cards are accepted for domestic and international payments?",
    answer:
      "We accept Visa, MasterCard, AMEX, Diners, and JCB for domestic and international payments.",
  },
  {
    question: "Is Cash on Delivery available?",
    answer:
      "If you are not comfortable making an online payment on www.himtajjewelry.com, you can opt for the Cash on Delivery (COD) payment method instead. With COD, you can pay in cash at the time of delivery. The maximum order value for COD is INR 5,000. Please note, this is strictly a cash-only payment method.",
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 pt-30">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-center">Help & FAQ</h1>
      <p className="text-center text-gray-600 mb-12">
        Find answers to the most frequently asked questions about payments and delivery options at Himtaj Jewelry.
      </p>

      {/* FAQ Section */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700 border-t bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Further Assistance */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Further Assistance?</h2>
        <p className="text-gray-600 mb-6">
          If your question is not listed above, feel free to reach out to our customer support team.
          We are here to help and provide the best service possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Call */}
          <a
            href="tel:+919773690444"
            className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>

          {/* Email */}
          <a
            href="mailto:info@himtajjewelry.com"
            className="flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 transition"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
