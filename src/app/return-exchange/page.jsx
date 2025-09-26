// app/return-exchange/page.jsx (Next.js 13+ App Router)
// Or in pages/return-exchange.jsx if using Pages Router
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ReturnExchangePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I cancel my order?",
      answer:
        "Orders once placed can only be cancelled prior to shipment. Refer to our Cancellation Policy for more details.",
    },
    {
      question: "Can I replace my order if I change my mind about the size?",
      answer:
        "Yes, it is possible to return the unused product and order a replacement. Please refer to our Return Policy for more details.",
    },
  ];

  return (
    <div className="h-[60vh] bg-gray-50 py-12 px-6 sm:px-12 lg:px-24 mt-30">
      <div className="max-w-3xl items-center justify-center mx-auto bg-white shadow-lg rounded-2xl p-8 ">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Return and Exchange
        </h1>
        <p className="text-gray-600 mb-8">
          Find answers to your questions about cancellations, returns, and
          exchanges. At <span className="font-semibold">Himtaj Jewelry</span>, we
          strive to ensure a seamless shopping experience for you.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl bg-gray-50 hover:bg-gray-100 transition"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
