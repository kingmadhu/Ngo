import React from 'react';
import { Users, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About HopeHarbor</h1>
            <p className="text-xl text-gray-600">
              We are dedicated to creating lasting change through sustainable development and community empowerment. Our mission is to build a world where everyone has access to opportunities for a better life.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">
                We believe in treating everyone with dignity and respect, understanding their unique challenges and needs.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building strong communities through collaboration, education, and sustainable development.
              </p>
            </div>
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600">
                Creating positive change that reaches beyond borders and transforms lives worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, HopeHarbor began with a simple mission: to make a difference in the lives of those who need it most. What started as a small group of dedicated volunteers has grown into a global organization with projects spanning multiple continents.
            </p>
            <p className="text-gray-600 mb-6">
              Over the years, we've helped thousands of people access education, healthcare, and sustainable development opportunities. Our approach focuses on long-term solutions that empower communities to build better futures for themselves.
            </p>
            <p className="text-gray-600">
              Today, we continue to grow and adapt, always staying true to our core values and mission. With the support of our donors, volunteers, and partners, we're working towards a more equitable and sustainable world for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}