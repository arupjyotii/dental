import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFloat = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show button after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Show tooltip for 3 seconds
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const whatsappNumber = "2341234567890"; // Replace with actual number
    const message = "Hello! I would like to book an appointment at Berith Dental Services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100"
                            >
                                <button
                                    onClick={() => setShowTooltip(false)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                                >
                                    <X size={16} />
                                </button>
                                <p className="text-sm font-semibold text-gray-900 mb-1">Need help?</p>
                                <p className="text-xs text-gray-600">Chat with us on WhatsApp for quick assistance!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 group"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle className="text-white" size={28} />

                        {/* Pulse animation */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    </a>

                    {/* Click me indicator */}
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    >
                        !
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppFloat;
