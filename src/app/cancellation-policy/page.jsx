"use client";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cancellation Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand that plans can change, and we strive to make your shopping 
            experience with Himtaj Jewelry as seamless as possible. Please review our 
            cancellation policy to understand your options for making changes or 
            canceling your orders.
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Order Cancellation Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Order Cancellation
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Before Dispatch:</h3>
                  <p className="text-gray-600">
                    Cancel your order anytime before dispatch by contacting customer support.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">After Dispatch:</h3>
                  <p className="text-gray-600">
                    Cancellation is no longer possible. Returns or exchanges may apply 
                    as per our return policy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cancellation Charges Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Cancellation Charges
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  No charges for cancellations before dispatch. A full refund will be initiated.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Custom or personalized orders cannot be canceled once they are in production.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Process Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Refund Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Refunds will be processed within 7-10 business days after cancellation confirmation.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Refund timing may vary depending on your payment provider.
                </p>
              </div>
            </div>
          </section>

          {/* Exclusions Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Exclusions
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-red-800">
                  Personalized or customized jewelry cannot be canceled after purchase.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-red-800">
                  Cancellation during promotional sales depends on the specific terms of the sale.
                </p>
              </div>
            </div>
          </section>

          {/* How to Cancel Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              How to Cancel an Order
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-amber-900 mb-2">Contact Support</h3>
                  <p className="text-amber-800">
                    Contact our support team with your order number to request cancellation. 
                    Our team will assist and confirm once completed.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}