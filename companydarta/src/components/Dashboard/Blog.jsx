import React from 'react';
import { AnimatedText } from './utils/AnimatedText';

const blogs = [
  {
    title: 'Introduction to Company Registration in Nepal',
    content: 'Learn the basics of registering a company in Nepal, including the types of companies you can register and the legal requirements involved.'
  },
  {
    title: 'Documents Required for Company Registration',
    content: 'A comprehensive list of all the documents you need to gather and submit for registering a company in Nepal.'
  },
  {
    title: 'Understanding the Registration Process',
    content: 'Step-by-step guide on the company registration process in Nepal, from application to approval.'
  },
  {
    title: 'Common Mistakes to Avoid During Registration',
    content: 'Learn about the common pitfalls and mistakes that entrepreneurs make during the company registration process and how to avoid them.'
  },
  {
    title: 'Post-Registration Compliance and Responsibilities',
    content: 'An overview of the compliance requirements and responsibilities that come after successfully registering your company in Nepal.'
  },
  {
    title: 'Choosing the Right Business Structure',
    content: 'Insights on selecting the appropriate business structure for your company in Nepal, including pros and cons of each type.'
  },
  {
    title: 'FAQs about Company Registration in Nepal',
    content: 'Frequently asked questions about company registration in Nepal, providing clear and concise answers to common queries.'
  }
];

const Blog = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <AnimatedText text="Company Registration in Nepal" />
    
      <div className="flex flex-col gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
