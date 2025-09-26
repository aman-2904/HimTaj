// app/order-help/page.jsx (Next.js 13+ with App Router)
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Package, MapPin, Globe } from "lucide-react";

const faqs = [
  {
    question: "How can I know the status of my order?",
    answer:
      "All users can track their orders by clicking on Track Order. To do so, they need to enter the email address used while placing the order and the order number. Registered users can sign in and track their orders from the order history section on the account page.",
  },
  {
    question: "What happens if my order is lost in transit?",
    answer:
      "In the unlikely event that an order gets lost during transit, we wait 15 days to track it. If we are still unsuccessful, we process your refund through the payment mode that you opted for when placing the order.",
  },
  {
    question: "Where do you deliver within India?",
    answer:
      "Currently, we deliver to selected cities within India. Please check if we deliver to your PIN code/city by entering it on the product page, shopping cart, or checkout page.",
  },
  {
    question: "I live outside India. Can I order something to be delivered in India?",
    answer:
      "Yes, you can order something to be delivered in India as long as you provide a valid shipping address within India. Kindly note that we deliver only to selected cities within India.",
  },
];

export default function OrderHelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 pt-30">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-center">Order & Delivery Help</h1>
      <p className="text-center text-gray-600 mb-12">
        Find answers to the most common questions about order tracking and delivery at Himtaj Jewelry.
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

      {/* Extra Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
          <Package className="w-8 h-8 mx-auto text-blue-600 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Track Orders</h3>
          <p className="text-gray-600 text-sm">
            Stay updated on your order status with the Track Order feature.
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow-sm">
          <MapPin className="w-8 h-8 mx-auto text-green-600 mb-3" />
          <h3 className="font-semibold text-lg mb-2">PAN-India Delivery</h3>
          <p className="text-gray-600 text-sm">
            Deliveries are available in selected cities across India.
          </p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl shadow-sm">
          <Globe className="w-8 h-8 mx-auto text-purple-600 mb-3" />
          <h3 className="font-semibold text-lg mb-2">International Orders</h3>
          <p className="text-gray-600 text-sm">
            Place orders from abroad for delivery to valid Indian addresses.
          </p>
        </div>
      </div>
    </div>
  );
}
