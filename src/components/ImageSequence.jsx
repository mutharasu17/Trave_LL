import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageSequence = ({ totalFrames, folderPath }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const containerRef = useRef(null);

    // Preload images
    useEffect(() => {
        const loadedImages = [];
        let loadedCount = 0;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(4, '0');
            img.src = `/${folderPath}/${frameNumber}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    // All images loaded
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [totalFrames, folderPath]);

    useEffect(() => {
        if (images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const render = (index) => {
            if (images[index - 1]) {
                // Draw image covering the canvas
                const img = images[index - 1];
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;

                let drawWidth, drawHeight, x, y;

                if (canvasRatio > imgRatio) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    x = 0;
                    y = -(drawHeight - canvas.height) / 2;
                } else {
                    drawWidth = canvas.height * imgRatio;
                    drawHeight = canvas.height;
                    x = -(drawWidth - canvas.width) / 2;
                    y = 0;
                }

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, x, y, drawWidth, drawHeight);
            }
        };

        // Initial render
        render(1);

        const sequence = { frame: 1 };

        gsap.to(sequence, {
            frame: totalFrames,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=300%', // Scroll length
                scrub: 1.5,
                pin: true,
                onUpdate: (self) => {
                    render(Math.round(sequence.frame));
                }
            }
        });

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(Math.round(sequence.frame));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images, totalFrames]);

    return (
        <div ref={containerRef} className="relative w-full h-[100vh] bg-black overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
        </div>
    );
};

export default ImageSequence;
