import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
            <div className="text-xl font-serif tracking-widest text-white uppercase group cursor-pointer leading-none">
                L'Espace <span className="text-gold-500 transition-colors italic group-hover:text-white">Luxuria</span>
            </div>

            <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-light text-white/80">
                <a href="#hero" className="hover:text-gold-500 transition-colors relative group">
                    Experience
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#destinations" className="hover:text-gold-500 transition-colors relative group">
                    Destinations
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#services" className="hover:text-gold-500 transition-colors relative group">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#journal" className="hover:text-gold-500 transition-colors relative group">
                    Journal
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all group-hover:w-full"></span>
                </a>
            </div>

            <button className="bg-white/10 backdrop-blur-md px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] border border-white/10 hover:border-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-500 text-white font-medium">
                Book Now
            </button>
        </nav>
    );
};

export default Navbar;
