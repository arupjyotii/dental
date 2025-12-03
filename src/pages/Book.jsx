import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const Book = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-full mb-6 border border-primary/20"
                    >
                        <Sparkles className="text-primary" size={18} />
                        <span className="text-primary font-semibold text-sm">Easy Online Booking</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
                    <p className="text-lg text-gray-600">Fill out the form below and we'll confirm your appointment shortly.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                >
                    {step === 1 ? (
                        <div className="p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Info */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                            1
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                required
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                            <input
                                                required
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="+234..."
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Appointment Details */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                            2
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Appointment Details</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed *</label>
                                            <select
                                                required
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="general">General Checkup</option>
                                                <option value="cleaning">Teeth Cleaning</option>
                                                <option value="whitening">Teeth Whitening</option>
                                                <option value="ortho">Orthodontic Consultation</option>
                                                <option value="implant">Dental Implant</option>
                                                <option value="pain">Tooth Pain/Emergency</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                                            <input
                                                required
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                type="date"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                                            <select
                                                required
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white"
                                            >
                                                <option value="">Select time</option>
                                                <option value="morning">Morning (9AM - 12PM)</option>
                                                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                                <option value="evening">Evening (4PM - 6PM)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                                        placeholder="Any specific concerns or requests?"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="btn btn-primary w-full text-lg py-4">
                                        <Calendar size={20} className="mr-2" />
                                        Confirm Appointment Request
                                    </button>
                                    <p className="text-center text-xs text-gray-500 mt-4">
                                        By booking, you agree to our terms of service and privacy policy.
                                    </p>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="p-12 text-center py-20">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", duration: 0.6 }}
                                className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl"
                            >
                                <CheckCircle2 size={48} />
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Request Received!</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                                Thank you, <span className="font-semibold text-primary">{formData.name}</span>. We have received your appointment request for <span className="font-semibold">{formData.date}</span>. Our team will contact you shortly at <span className="font-semibold">{formData.phone}</span> to confirm the details.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => setStep(1)}
                                    className="btn btn-outline"
                                >
                                    Book Another Appointment
                                </button>
                                <a href="/" className="btn btn-primary">
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Book;
