import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
                    <div className="max-w-sm space-y-8">
                        <h2 className="text-4xl font-serif text-white uppercase tracking-tighter">L'Espace <br /><span className="italic text-gold-500">Luxuria</span></h2>
                        <p className="text-white/40 font-light leading-relaxed">
                            Redefining the boundaries of high-end travel. From private jets to secluded island estates, we craft journeys for the discerning few.
                        </p>
                        <div className="flex gap-6">
                            <Instagram size={20} className="text-white/40 hover:text-gold-500 cursor-pointer transition-colors" />
                            <Twitter size={20} className="text-white/40 hover:text-gold-500 cursor-pointer transition-colors" />
                            <Facebook size={20} className="text-white/40 hover:text-gold-500 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
                        <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold">Explore</h4>
                            <ul className="space-y-4 text-sm text-white/40 font-light">
                                <li className="hover:text-white cursor-pointer">Destinations</li>
                                <li className="hover:text-white cursor-pointer">Yacht Charter</li>
                                <li className="hover:text-white cursor-pointer">Private Jets</li>
                                <li className="hover:text-white cursor-pointer">Concierge</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold">Company</h4>
                            <ul className="space-y-4 text-sm text-white/40 font-light">
                                <li className="hover:text-white cursor-pointer">Our Story</li>
                                <li className="hover:text-white cursor-pointer">Philosophy</li>
                                <li className="hover:text-white cursor-pointer">Careers</li>
                                <li className="hover:text-white cursor-pointer">Contact</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold">Legal</h4>
                            <ul className="space-y-4 text-sm text-white/40 font-light">
                                <li className="hover:text-white cursor-pointer">Privacy</li>
                                <li className="hover:text-white cursor-pointer">Terms</li>
                                <li className="hover:text-white cursor-pointer">Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8">
                    <p className="text-[10px] uppercase tracking-widest text-white/20">© 2026 L'Espace Luxuria. All rights reserved.</p>
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 group transition-all"
                    >
                        <ArrowUp size={18} className="text-white/40 group-hover:text-gold-500 group-hover:-translate-y-1 transition-all" />
                    </button>
                    <p className="text-[10px] uppercase tracking-widest text-white/20">Crafted for Excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
