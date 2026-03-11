import React from 'react';
import { motion } from 'framer-motion';

const destinations = [
    { title: "Maldives", category: "Island Paradise", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200" },
    { title: "Santorini", category: "Mediterranean Bliss", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1200" },
    { title: "Aspen", category: "Winter Luxury", image: "https://images.unsplash.com/photo-1739907549371-d0923d34e70e?auto=format&fit=crop&q=80&w=2000" },
    { title: "Kyoto", category: "Zen Experience", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200" },
    { title: "Bali", category: "Spiritual Escape", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200" },
    { title: "Amalfi Coast", category: "Coastal Elegance", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200" },
];

const Destinations = () => {
    return (
        <div id="destinations" className="container mx-auto px-6 pt-64 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                <div className="max-w-2xl">
                    <h4 className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-4">The Collection</h4>
                    <h2 className="font-serif text-5xl md:text-7xl leading-tight text-white">Handpicked <br /> <span className="italic">Destinations</span></h2>
                </div>
                <p className="text-white/40 mt-6 md:mt-0 font-light md:text-right max-w-xs uppercase tracking-widest text-[10px] leading-relaxed">
                    A curated selection of the most exclusive gateways on Earth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {destinations.map((dest, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative h-[600px] overflow-hidden rounded-[2rem] cursor-pointer"
                    >
                        <img
                            src={dest.image}
                            alt={dest.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-0 left-0 p-10 w-full">
                            <span className="text-gold-500 text-xs uppercase tracking-[0.2em]">{dest.category}</span>
                            <h3 className="text-4xl font-serif text-white mt-2 group-hover:translate-x-2 transition-transform duration-500 flex items-center justify-between">
                                {dest.title}
                                <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
