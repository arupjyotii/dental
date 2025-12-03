import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';

const About = () => {
    const team = [
        {
            name: 'Dr. Sarah Johnson',
            role: 'Lead Dentist',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
            bio: 'With over 15 years of experience, Dr. Sarah specializes in cosmetic and restorative dentistry.'
        },
        {
            name: 'Dr. Michael Chen',
            role: 'Orthodontist',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
            bio: 'Dr. Michael is passionate about creating beautiful smiles through modern orthodontic treatments.'
        },
        {
            name: 'Dr. Amara Okafor',
            role: 'Pediatric Dentist',
            image: 'https://images.unsplash.com/photo-1594824476969-51c44d7f247f?w=400&h=400&fit=crop',
            bio: 'Dr. Amara ensures our youngest patients have a fun and positive dental experience.'
        }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Patient-Centered Care',
            description: 'Your comfort and satisfaction are our top priorities in everything we do.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We maintain the highest standards of dental care and professionalism.'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Building lasting relationships with our patients and the Abuja community.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-gradient bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Berith Dental Services</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Founded in 2010, Berith Dental Services has grown to become Abuja's premier dental clinic. Our mission is simple: to provide exceptional dental care in a comfortable, modern environment.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We believe that a visit to the dentist should be a positive experience. That's why we've invested in the latest technology and gathered a team of compassionate professionals who truly care about your well-being.
                        </p>
                        <div className="space-y-4">
                            {['State-of-the-art Facility', 'Experienced Team', 'Patient-Centered Approach'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                        <CheckCircle className="text-white" size={18} />
                                    </div>
                                    <span className="font-semibold text-gray-900">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop"
                            alt="Clinic Interior"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                                    <value.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our highly skilled dentists and staff are dedicated to providing you with the best possible care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-primary font-semibold mb-4">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { label: 'Years Experience', value: '15+' },
                            { label: 'Happy Patients', value: '5k+' },
                            { label: 'Team Members', value: '20+' },
                            { label: 'Awards Won', value: '12' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-blue-100 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
