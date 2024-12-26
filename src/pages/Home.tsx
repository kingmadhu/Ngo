import React from 'react';
import { ArrowRight, Users, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Making a Difference Together</h1>
            <p className="text-xl mb-8">
              Join us in our mission to create positive change and empower communities worldwide through sustainable development and education.
            </p>
            <div className="space-x-4">
              <Link 
                to="/donate" 
                className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 inline-flex items-center"
              >
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/volunteer" 
                className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 inline-flex items-center"
              >
                Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Volunteers Worldwide</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80`} 
                  alt="Project" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <Link 
                    to={`/projects/${project}`}
                    className="text-red-500 hover:text-red-600 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and help us create a better world for everyone.
          </p>
          <div className="space-x-4">
            <Link 
              to="/donate" 
              className="bg-white text-red-500 px-6 py-3 rounded-md hover:bg-gray-100 inline-flex items-center"
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/volunteer" 
              className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-red-500 inline-flex items-center"
            >
              Volunteer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}