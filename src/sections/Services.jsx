import React from 'react';
import { Plane, Ship, ShieldCheck, Crown } from 'lucide-react';

const services = [
    {
        icon: <Plane className="text-gold-500" size={40} />,
        title: "Private Aviation",
        desc: "Fly beyond commercial limits with our global fleet of private jets."
    },
    {
        icon: <Ship className="text-gold-500" size={40} />,
        title: "Yacht Charters",
        desc: "Sail the most exclusive waters with a full crew and private chef."
    },
    {
        icon: <ShieldCheck className="text-gold-500" size={40} />,
        title: "Elite Concierge",
        desc: "24/7 personalized service to handle every detail of your journey."
    },
    {
        icon: <Crown className="text-gold-500" size={40} />,
        title: "VIP Packages",
        desc: "Access to closed-door events and sold-out destinations worldwide."
    }
];

const Services = () => {
    return (
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                    <h2 className="font-serif text-6xl leading-tight">Beyond <br /><span className="italic text-gold-500">Expectations</span></h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
                        Our services are designed for those who demand the absolute best in travel.
                        We don't just book trips; we craft legacies.
                    </p>
                    <div className="flex gap-10 border-t border-white/5 pt-12">
                        <div className="text-center">
                            <span className="block text-3xl font-serif text-white">15+</span>
                            <span className="text-[10px] uppercase text-gold-500 tracking-widest">Years Experience</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-3xl font-serif text-white">500+</span>
                            <span className="text-[10px] uppercase text-gold-500 tracking-widest">Destinations</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="glass p-8 rounded-3xl group hover:border-gold-500/50 transition-all duration-500">
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                            <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
