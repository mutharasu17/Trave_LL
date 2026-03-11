import React from 'react';
import { Calendar, Users, MapPin, PlaneTakeoff } from 'lucide-react';

const BookingSection = () => {
    return (
        <div className="container mx-auto px-6 py-24 min-h-screen flex items-center justify-center">
            <div className="glass p-12 rounded-[2rem] border border-white/10 w-full max-w-6xl relative overflow-hidden backdrop-blur-2xl">
                {/* Decorative Elements */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />

                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                    <div className="space-y-3">
                        <label className="text-gold-200/50 text-xs uppercase tracking-widest flex items-center gap-2">
                            <MapPin size={14} className="text-gold-500" /> Destination
                        </label>
                        <select className="bg-transparent border-b border-white/20 w-full py-2 text-xl font-light focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                            <option className="bg-black">Maldives</option>
                            <option className="bg-black">Santorini</option>
                            <option className="bg-black">Bali</option>
                            <option className="bg-black">Aspen</option>
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label className="text-gold-200/50 text-xs uppercase tracking-widest flex items-center gap-2">
                            <Calendar size={14} className="text-gold-500" /> Travel Dates
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Select dates" className="bg-transparent border-b border-white/20 w-full py-2 text-xl font-light focus:outline-none focus:border-gold-500 transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-gold-200/50 text-xs uppercase tracking-widest flex items-center gap-2">
                            <Users size={14} className="text-gold-500" /> Guests
                        </label>
                        <select className="bg-transparent border-b border-white/20 w-full py-2 text-xl font-light focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                            <option className="bg-black">01 Guest</option>
                            <option className="bg-black">02 Guests</option>
                            <option className="bg-black">04 Guests</option>
                            <option className="bg-black">VIP Group</option>
                        </select>
                    </div>

                    <div className="flex flex-col justify-end">
                        <button className="bg-gold-500 hover:bg-gold-600 text-black py-4 px-8 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
                            <PlaneTakeoff size={20} className="group-hover:translate-x-1 transition-transform" />
                            Book Your Escape
                        </button>
                    </div>
                </div>

                <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                            </div>
                        ))}
                    </div>
                    <p className="text-white/40 text-sm italic">
                        <span className="text-gold-200">2,400+</span> luxury travelers booked this week
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingSection;
