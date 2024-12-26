import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';

const events = [
  {
    id: 1,
    title: 'Annual Charity Gala',
    date: new Date('2024-06-15'),
    location: 'Grand Hotel, New York',
    description: 'Join us for an evening of celebration and fundraising for our global initiatives.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    maxParticipants: 200,
    currentParticipants: 150
  },
  {
    id: 2,
    title: 'Community Clean-up Drive',
    date: new Date('2024-05-20'),
    location: 'Central Park, New York',
    description: 'Help us make our community cleaner and greener. All supplies provided.',
    image: 'https://images.unsplash.com/photo-1554265352-d7fd5129be15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    maxParticipants: 100,
    currentParticipants: 45
  },
  {
    id: 3,
    title: 'Education Workshop',
    date: new Date('2024-05-28'),
    location: 'Community Center, Brooklyn',
    description: 'Free workshop on sustainable development and community empowerment.',
    image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    maxParticipants: 50,
    currentParticipants: 30
  }
];

export function Events() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-gray-600">
            Join us at our upcoming events and be part of the change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {format(event.date, 'MMMM d, yyyy')}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    {event.currentParticipants} / {event.maxParticipants} participants
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}