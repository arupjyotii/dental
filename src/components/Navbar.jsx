import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                            B
                        </div>
                        <span className="text-2xl font-bold">
                            <span className="text-gray-900">Berith Dental</span>
                            <span className="text-gradient bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Services</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-semibold transition-all relative group ${isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 transition-all ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="tel:+234123456789"
                            className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            <Phone size={18} />
                            <span className="text-sm">+234 123 456 789</span>
                        </a>
                        <a
                            href="https://wa.me/+2348035342100?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all hover:scale-105 font-medium"
                        >
                            <MessageCircle size={18} />
                            <span className="text-sm">WhatsApp</span>
                        </a>
                        <Link to="/book" className="btn btn-primary">
                            <Calendar size={18} className="mr-2" />
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-900 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-xl"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-base font-semibold py-3 px-4 rounded-lg transition-all ${isActive(link.path)
                                        ? 'bg-gradient-to-r from-primary/10 to-cyan-500/10 text-primary'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 space-y-3 border-t border-gray-100">
                                <a
                                    href="tel:+234123456789"
                                    className="flex items-center gap-3 text-gray-700 font-medium py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    <Phone size={20} />
                                    <span>+234 123 456 789</span>
                                </a>
                                <a
                                    href="https://wa.me/+2348035342100?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-green-500 text-white font-medium py-3 px-4 hover:bg-green-600 rounded-lg transition-colors"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp Chat</span>
                                </a>
                                <Link
                                    to="/book"
                                    onClick={() => setIsOpen(false)}
                                    className="btn btn-primary w-full justify-center text-base"
                                >
                                    <Calendar size={20} className="mr-2" />
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
