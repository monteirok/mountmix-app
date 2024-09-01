'use client';
import { useState } from 'react';

export default function HamburgerMenu() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`group cursor-pointer items-center justify-center rounded-3xl bg-transparent py-6 px-3 hover:bg-neutral-800 ${isActive ? 'bg-neutral-800' : ''}`} onClick={toggleMenu}>
            <div className="space-y-2">
                <span className={`block h-1 w-10 origin-center rounded-full bg-neutral-500 transition-transform ease-in-out ${isActive ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                <span className={`block h-1 w-10 origin-center rounded-full bg-orange-400 transition-transform ease-in-out ${isActive ? 'w-10 -translate-y-1.5 -rotate-45' : ''}`}></span>
            </div>
        </div>
    );
}
