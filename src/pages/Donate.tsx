import React from 'react';
import { CreditCard, Heart, Shield } from 'lucide-react';

export function Donate() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl mb-8">
              Your donation helps us create lasting change in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Donation Amount */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Select Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      className="px-6 py-3 border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Donation Frequency */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Donation Frequency</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                    One-time
                  </button>
                  <button className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white">
                    Monthly
                  </button>
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Donor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
                Complete Donation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-red-500 mr-3" />
                <div>
                  <h4 className="font-semibold">Secure Payment</h4>
                  <p className="text-sm text-gray-600">Your data is protected</p>
                </div>
              </div>
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <div>
                  <h4 className="font-semibold">Tax Deductible</h4>
                  <p className="text-sm text-gray-600">Get your donation receipt</p>
                </div>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-8 w-8 text-red-500 mr-3" />
                <div>
                  <h4 className="font-semibold">Multiple Payment Options</h4>
                  <p className="text-sm text-gray-600">Credit card, PayPal, and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}