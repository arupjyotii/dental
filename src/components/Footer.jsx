import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                B
                            </div>
                            <span className="text-xl font-bold">
                                Berith Dental<span className="text-primary-light">Services</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Providing world-class dental care in Abuja with a focus on patient comfort and advanced technology. Your smile is our priority.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-primary hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-primary hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-primary hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-primary-light transition-colors flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-primary-light transition-colors flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all"></span>
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/book" className="text-gray-400 hover:text-primary-light transition-colors flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all"></span>
                                    Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-primary-light transition-colors flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-primary-light group-hover:w-4 transition-all"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-primary-light shrink-0 mt-1" />
                                <span>123 Garki Area 11,<br />Abuja, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={20} className="text-primary-light shrink-0" />
                                <a href="tel:+234123456789" className="hover:text-primary-light transition-colors">+234 123 456 789</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-primary-light shrink-0" />
                                <a href="mailto:info@Berith Dental Services.com" className="hover:text-primary-light transition-colors">info@Berith Dental Services.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Opening Hours</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-gray-400 pb-3 border-b border-gray-700">
                                <span>Mon - Fri</span>
                                <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between text-gray-400 pb-3 border-b border-gray-700">
                                <span>Saturday</span>
                                <span className="font-medium text-white">10:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Sunday</span>
                                <span className="text-primary-light font-medium">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Berith Dental Services Clinic. All rights reserved. Made with ❤️ by Codemic Co.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
