import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">HopeHarbor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/events" className="text-gray-600 hover:text-gray-900">Events</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/volunteer" className="text-gray-600 hover:text-gray-900">Volunteer</Link>
            <Link to="/donate" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/about" className="block text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/projects" className="block text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/events" className="block text-gray-600 hover:text-gray-900">Events</Link>
            <Link to="/blog" className="block text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/volunteer" className="block text-gray-600 hover:text-gray-900">Volunteer</Link>
            <Link to="/donate" className="block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-center">
              Donate
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}