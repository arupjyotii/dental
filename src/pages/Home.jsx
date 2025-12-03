import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Shield, Award, Star, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        {
            icon: Sparkles,
            title: 'Cosmetic Dentistry',
            description: 'Transform your smile with professional whitening, veneers, and bonding.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Shield,
            title: 'General Dentistry',
            description: 'Comprehensive care including checkups, cleanings, and preventive treatments.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Award,
            title: 'Orthodontics',
            description: 'Straighten your teeth with modern braces and clear aligner solutions.',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const testimonials = [
        {
            name: "Oluwaseun Adebayo",
            role: "Business Owner",
            text: "The best dental experience I've ever had. Professional, caring, and the results are amazing!",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            rating: 5
        },
        {
            name: "Chioma Okonkwo",
            role: "Teacher",
            text: "My kids actually look forward to their dental visits now. The team is wonderful with children!",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
            rating: 5
        },
        {
            name: "Emmanuel Musa",
            role: "Engineer",
            text: "State-of-the-art facility with the latest technology. Highly recommend for anyone seeking quality care.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            rating: 5
        }
    ];

    const stats = [
        { number: "15+", label: "Years Experience" },
        { number: "5000+", label: "Happy Patients" },
        { number: "20+", label: "Expert Team" },
        { number: "98%", label: "Success Rate" }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-full mb-6 border border-primary/20">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                <span className="text-primary font-semibold text-sm">Abuja's #1 Dental Clinic</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Your Perfect
                                <span className="block text-gradient bg-gradient-to-r from-primary via-cyan-500 to-primary-dark bg-clip-text text-transparent">
                                    Smile Starts Here
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Experience world-class dental care with cutting-edge technology and a gentle touch. We're committed to making every visit comfortable and every smile beautiful.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link to="/book" className="btn btn-primary text-lg group">
                                    <Calendar className="mr-2" size={20} />
                                    Book Appointment
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </Link>
                                <a href="tel:+234123456789" className="btn btn-outline text-lg">
                                    <Phone className="mr-2" size={20} />
                                    Call Now
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center gap-8 flex-wrap">
                                <div className="flex -space-x-3">
                                    {[11, 12, 13, 14].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://i.pravatar.cc/100?img=${i}`}
                                            alt="Patient"
                                            className="w-12 h-12 rounded-full border-4 border-white"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 text-yellow-400 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700">Trusted by 5,000+ Patients</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=900&fit=crop"
                                    alt="Modern Dental Clinic"
                                    className="w-full h-[600px] object-cover"
                                />

                                {/* Floating Stats Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6 shadow-xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                                <CheckCircle2 className="text-white" size={28} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-lg">5-Star Rated</p>
                                                <p className="text-sm text-gray-600">Premium Care Guaranteed</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-cyan-500 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center text-white"
                            >
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-blue-100 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Our Premium Services</h2>
                        <p className="section-subtitle">
                            Comprehensive dental solutions tailored to your unique needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="card p-8 group cursor-pointer border border-gray-100"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                <Link to="/services" className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                    Learn More
                                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">What Our Patients Say</h2>
                        <p className="section-subtitle">
                            Real stories from real people who trust us with their smiles
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                            >
                                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-100"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-cyan-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Smile?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                            Book your appointment today and take the first step towards a healthier, more confident smile. Our expert team is ready to serve you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/book" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                                <Calendar className="mr-2" size={20} />
                                Schedule Appointment
                            </Link>
                            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
