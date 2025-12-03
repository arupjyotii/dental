import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Heart, Zap, Activity, User } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Sparkles,
            title: 'General Dentistry',
            description: 'Comprehensive exams, cleanings, fillings, and preventative care to maintain your oral health.',
            features: ['Routine Checkups', 'Dental Cleanings', 'Fillings', 'Root Canals'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Zap,
            title: 'Cosmetic Dentistry',
            description: 'Enhance your smile with our aesthetic treatments designed to boost your confidence.',
            features: ['Teeth Whitening', 'Porcelain Veneers', 'Dental Bonding', 'Smile Makeovers'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Shield,
            title: 'Orthodontics',
            description: 'Straighten your teeth and correct bite issues with modern orthodontic solutions.',
            features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Early Treatment'],
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: Activity,
            title: 'Dental Implants',
            description: 'Permanent, natural-looking replacements for missing teeth that restore function and aesthetics.',
            features: ['Single Tooth Implants', 'Implant Bridges', 'All-on-4', 'Implant Maintenance'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Heart,
            title: 'Pediatric Dentistry',
            description: 'Gentle and fun dental care tailored specifically for children of all ages.',
            features: ['First Dental Visits', 'Fluoride Treatments', 'Sealants', 'Habit Counseling'],
            color: 'from-pink-500 to-rose-500'
        },
        {
            icon: User,
            title: 'Oral Surgery',
            description: 'Expert surgical procedures including extractions and gum treatments in a comfortable setting.',
            features: ['Wisdom Teeth Removal', 'Gum Grafting', 'Bone Grafting', 'Biopsies'],
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary via-primary-dark to-cyan-700 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100 max-w-2xl mx-auto"
                    >
                        We provide a comprehensive range of dental treatments using state-of-the-art technology to ensure the best possible care for our patients.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-gradient-to-r from-primary to-cyan-500 rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/book" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group-hover:gap-2">
                                Book Appointment →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not sure what you need?</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
                        Schedule a consultation with our experts and we'll create a personalized treatment plan just for you.
                    </p>
                    <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
