"use client"
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [projectType, setProjectType] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <Navbar />
            <main className='pt-[200px]'>
                <h1 className='text-center text-2xl text-cyan-800 py-8'>
                    I’m excited to learn about your project. <br />Ready to get started?
                </h1>
                {submitted ? (
                    <div className="max-w-md mx-auto bg-white shadow-lg shadow-gray-500/30 rounded-lg px-8 pt-6 pb-8 mb-4 text-center">
                        <h2 className="text-2xl text-cyan-800">Thank you!</h2>
                        <p className="text-cyan-900">Your message has been sent successfully. We will get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg shadow-gray-500/30 rounded-lg px-8 pt-6 pb-8 mb-4" data-netlify="true" name="contact">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-cyan-900 text-sm font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-900 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-cyan-900 text-sm font-bold mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-900 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="projectType" className="block text-cyan-900 text-sm font-bold mb-2">Type of project:</label>
                            <div className="relative">
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={projectType}
                                    onChange={(e) => setProjectType(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-900 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="" disabled>Select a project type</option>
                                    <option value="responsive-design">Responsive Design</option>
                                    <option value="web-app">Web App</option>
                                    <option value="mobile-app">Mobile App</option>
                                </select>
                                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-cyan-900" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-cyan-900 text-sm font-bold mb-2">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-900 leading-tight focus:outline-none focus:shadow-outline h-32"
                                placeholder="Your message here"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-cyan-700 hover:bg-white hover:text-gray-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out">
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </main>
        </div>
    );
};

export default ContactForm;
