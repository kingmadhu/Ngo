import React from 'react';
import { Search } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Making a Difference: Our Impact in 2023',
    excerpt: "A look back at our achievements and the lives we've touched throughout the past year.",
    author: 'Sarah Johnson',
    date: '2024-03-15',
    category: 'Impact Report',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'Sustainable Development Goals: Our Approach',
    excerpt: "How we're aligning our projects with the UN's Sustainable Development Goals.",
    author: 'Michael Chen',
    date: '2024-03-10',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'Volunteer Stories: Meet Our Heroes',
    excerpt: 'Inspiring stories from our volunteers making a difference around the world.',
    author: 'Emma Thompson',
    date: '2024-03-05',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  }
];

export function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest news, stories, and insights.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8">
          {['All', 'Impact Report', 'Strategy', 'Community'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-red-500 focus:outline-none"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.date} · {post.category}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-red-500 hover:text-red-600">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}