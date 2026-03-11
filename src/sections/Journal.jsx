import React from 'react';

const articles = [
    {
        tag: "Guide",
        title: "The Art of Private Island Living",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200"
    },
    {
        tag: "Luxury",
        title: "Sunset Villas: A Maldives Perspective",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1200"
    },
    {
        tag: "Experience",
        title: "Why Luxury Travel Changes Your Perspective",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200"
    }
];

const Journal = () => {
    return (
        <div id="journal" className="container mx-auto px-6 pt-64 pb-20">
            <div className="text-center mb-20 space-y-4">
                <h4 className="text-gold-500 tracking-[0.4em] uppercase text-[10px]">The Travel Log</h4>
                <h2 className="font-serif text-6xl text-white">L'Espace <span className="italic">Journal</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {articles.map((article, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-6 left-6 glass px-4 py-1 rounded-full text-[10px] uppercase tracking-widest text-white">
                                {article.tag}
                            </div>
                        </div>
                        <h3 className="font-serif text-2xl leading-snug group-hover:text-gold-500 transition-colors text-white">
                            {article.title}
                        </h3>
                        <p className="mt-4 text-white/40 text-xs flex items-center gap-2 uppercase tracking-widest group-hover:gap-4 transition-all">
                            Read Article <span className="text-lg">→</span>
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-32 text-center">
                <div className="inline-block relative">
                    <h2 className="font-serif text-5xl md:text-8xl mb-8 opacity-20 italic text-white">Ready for Escape?</h2>
                    <button className="bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black py-4 px-12 rounded-full transition-all duration-500 font-medium tracking-widest text-sm relative z-10">
                        RESERVE JOURNEY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Journal;
