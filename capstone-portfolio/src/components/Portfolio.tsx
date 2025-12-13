// src/components/Portfolio.tsx
// Finalized Capstone Portfolio Component with new navigation color and smooth scroll UX

import React from 'react';
import useTypewriter from '../hooks/useTypewriter'; // For the dynamic title effect
import ResumeSection from './ResumeSection'; // Req 1
import AutobiographySection from './AutobiographySection'; // Req 2
import AutobiographyPresentation from './AutobiographyPresentation'; // Req 3
import InnovationVideo from './InnovationVideo'; // Req 4
import InnovationPresentation from './InnovationPresentation'; // Req 5
import AfricanCultureVideo from './AfricanCultureVideo'; // Req 6
import AfricanCulturePresentation from './AfricanCulturePresentation'; // Req 7
import ModernChallengeVideo from './ModernChallengeVideo'; // Req 8
import PhotographicEssay from './PhotographicEssay'; // Req 9
import OnlinePresence from './OnlinePresence'; // Req 10

// NOTE: The .nav-item and .highlight-pulse CSS classes must be defined globally (e.g., in index.css).

const Portfolio: React.FC = () => {
    
    // Static and Dynamic Header Content
    const nameAndReg = `Naftaly Boro Mwaura (C027-01-1016/2022)`;
    const projectTitle = `IGS Capstone Project Portfolio`;
    const animatedTitle = useTypewriter(projectTitle, 80);

    /**
     * Handles the navigation click event with a delay and smooth scroll.
     * @param targetId The ID of the section to scroll to (e.g., 'resumes').
     */
    const handleNavClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Optional: Add a brief highlight class for visual feedback
        targetElement.classList.add('highlight-pulse');

        // Delay the scroll by 300ms
        setTimeout(() => {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            
            // Remove the highlight class after the scroll is complete
            setTimeout(() => {
                 targetElement.classList.remove('highlight-pulse');
            }, 1000); 

        }, 300); // Delay before scrolling starts
    };


    return (
        <div className="min-h-screen bg-black text-white">
            
            {/* 1. HEADER: Adjusted text sizes for better mobile hierarchy */}
            <header className="shadow-2xl overflow-hidden"> 
                <div className="pt-16 pb-12 bg-brown-900 text-center border-b border-amber-400/30 px-4">
                    
                    {/* H1: Adjusted text size for smaller screens */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400">
                        {nameAndReg}
                    </h1>
                    
                    <p className="text-base sm:text-xl text-gray-400 mt-1">BBIT, Dedan Kimathi University of Technology (DeKUT)</p>
                    
                    {/* H2: Adjusted text size and height for smaller screens */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-yellow-400 h-8 sm:h-10">
                        {animatedTitle}
                        <span className="animate-pulse inline-block w-1 h-6 sm:h-8 ml-1 bg-yellow-400">|</span>
                    </h2>
                    
                    <p className="text-sm sm:text-md text-amber-300 max-w-3xl mx-auto mt-2 px-4">
                        A comprehensive digital showcase fulfilling all requirements for the IGS Capstone.
                    </p>
                </div>
            </header>

            {/* 2. NAVIGATION: MOBILE SCROLL FIX - Uses overflow-x-auto and whitespace-nowrap */}
            <nav className="bg-yellow-700 border-t border-b border-black sticky top-0 z-40"> 
                {/* FIX: This div enables horizontal scrolling of the menu on small screens */}
                <div className="flex overflow-x-auto whitespace-nowrap justify-start md:justify-center space-x-3 p-3 text-sm max-w-full mx-auto md:max-w-7xl">
                    
                    {/* Added section numbers to links for clarity */}
                    <a href="#resumes" className="nav-item-alt" onClick={(e) => { e.preventDefault(); handleNavClick('resumes'); }}>
                        1. Resumes
                    </a>
                    <a href="#autobiography" className="nav-item-alt" onClick={(e) => { e.preventDefault(); handleNavClick('autobiography'); }}>
                        2. Personal Journey
                    </a>
                    <a href="#innovation" className="nav-item-alt" onClick={(e) => { e.preventDefault(); handleNavClick('innovation'); }}>
                        3. Innovation
                    </a>
                    <a href="#culture" className="nav-item-alt" onClick={(e) => { e.preventDefault(); handleNavClick('culture'); }}>
                        4. African Culture
                    </a>
                    <a href="#challenges" className="nav-item-alt" onClick={(e) => { e.preventDefault(); handleNavClick('challenges'); }}>
                        5. Societal Challenges
                    </a>
                    <a href="#presence" className="nav-item-alt" onClick={(e) => { e.preventDefault(); handleNavClick('presence'); }}>
                        6. Online Presence
                    </a>
                </div>
            </nav>

            {/* 3. MAIN CONTENT: All 10 Sections Integrated */}
            <main className="py-16">
                <ResumeSection />            {/* Req 1 (8 Marks) */}
                <AutobiographySection />     {/* Req 2 (20 Marks) */}
                <AutobiographyPresentation />{/* Req 3 (7 Marks) */}
                <InnovationVideo />          {/* Req 4 (10 Marks) */}
                <InnovationPresentation />   {/* Req 5 (10 Marks) */}
                <AfricanCultureVideo />      {/* Req 6 (10 Marks) */}
                <AfricanCulturePresentation />{/* Req 7 (10 Marks) */}
                <ModernChallengeVideo />     {/* Req 8 (10 Marks) */}
                <PhotographicEssay />        {/* Req 9 (10 Marks) */}
                <OnlinePresence />           {/* Req 10 (5 Marks) */}
            </main>
        </div>
    );
};

export default Portfolio;