'use client';
import React, { useEffect, useState, useRef } from 'react';

const MainImg = () => {
    const [cursorStyle, setCursorStyle] = useState({ left: '0px', top: '0px' });
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isHovering && cursorRef.current) {
                // Update cursor position smoothly
                const { clientX, clientY } = event;
                const cursor = cursorRef.current;

                // Use requestAnimationFrame for smoother updates
                requestAnimationFrame(() => {
                    cursor.style.transform = `translate(${clientX - 14}px, ${clientY - 14}px)`; // Center the cursor
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovering]);

    return (
        <div
            className="relative h-screen w-screen bg-cover bg-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <video className='w-full h-full' src="/img/video.mov" muted autoPlay loop ></video>
            {isHovering && (
                <div
                    ref={cursorRef}
                    className="absolute w-28 h-28 bg-[rgba(0,0,0,0.15)] dark:bg-[rgba(255,255,255,0.15)] backdrop-blur-[5px] flex justify-center items-center border-[.1px] rounded-full pointer-events-none transition-transform duration-300 ease-linear"
                    style={{
                        // Initial position set to the center of the cursor
                        left: cursorStyle.left,
                        top: cursorStyle.top,
                    }}
                >
                    <p className='text-xs'>Hover me!</p>
                </div>
            )}
        </div>
    );
}

export default MainImg;