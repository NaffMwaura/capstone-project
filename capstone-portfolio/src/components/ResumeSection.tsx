// src/components/ResumeSection.tsx (FINAL VERSION - Image Framing Fix)

import React from 'react';

// 1. IMPORT LOCAL IMAGE ASSETS (Ensure these paths and names are correct)
import kiswahiliResume from '../assets/Naftaly_Mwaura_s_Resume_page-0001.jpg'; 
import englishResume from '../assets/Naftaly_Mwaura_s_Resume_page-0001.jpg';
import kikuyuResume from '../assets/Naftaly_Mwaura_s_Resume_page-0001.jpg';

interface ResumeItemProps {
    title: string;
    language: string;
    imageUrl: string; 
    downloadUrl: string; // This is where the Google Drive DOWNLOAD link goes
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, language, imageUrl, downloadUrl }) => (
    <div className="bg-brown-800 p-6 rounded-xl shadow-xl border-t-4 border-amber-500/80 transition duration-500 hover:shadow-yellow-400/20 transform hover:scale-[1.02]">
        <h3 className="text-xl font-bold mb-2 text-yellow-400">{title}</h3>
        <p className="text-amber-300 mb-4 text-sm">Required resume submitted in the {language} language.</p>
        
        {/* Document Preview Area: Uses IMG tag with imported asset URL */}
        <div className="h-64 bg-black border border-amber-400/50 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
            {imageUrl ? (
                // FIX: Added a wrapper <div> with max-w-xs to constrain the image width
                // This makes the image look like a properly framed document.
                <div className="max-w-xs h-full flex items-center justify-center">
                    <img 
                        src={imageUrl} 
                        alt={`${title} Preview Screenshot`} 
                        className="w-full h-full object-contain" 
                    />
                </div>
            ) : (
                 <p className="p-3 text-gray-500 text-center">
                    Screenshot image not loaded.
                </p>
            )}
        </div>
        
        <a 
            href={downloadUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-amber-500 text-black font-semibold py-2 rounded-md hover:bg-yellow-400 transition"
        >
            View / Download Full PDF
        </a>
    </div>
);


const ResumeSection: React.FC = () => {
    // **ACTION REQUIRED: Replace these with your Google Drive DOWNLOAD links**
    const kiswahiliDownloadUrl = "https://drive.google.com/drive/folders/1c8jvQ19YKG2LjWQYk2C9_I5sYnNO-igP?dmr=1&ec=wgc-drive-hero-goto"; 
    const englishDownloadUrl = "https://drive.google.com/drive/folders/1c8jvQ19YKG2LjWQYk2C9_I5sYnNO-igP?dmr=1&ec=wgc-drive-hero-goto"; 
    const kikuyuDownloadUrl = "https://drive.google.com/drive/folders/1c8jvQ19YKG2LjWQYk2C9_I5sYnNO-igP?dmr=1&ec=wgc-drive-hero-goto"; 

    return (
        <section id="resumes" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">1.</span> Professional Identity & Resumes <span className="text-amber-400">(8 Marks)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ResumeItem 
                    title="Resume in Kiswahili" 
                    language="Kiswahili" 
                    imageUrl={kiswahiliResume} 
                    downloadUrl={kiswahiliDownloadUrl} 
                />
                <ResumeItem 
                    title="Resume in English" 
                    language="English" 
                    imageUrl={englishResume} 
                    downloadUrl={englishDownloadUrl} 
                />
                <ResumeItem 
                    title="Resume in Kikuyu Language " 
                    language="Kikuyu" 
                    imageUrl={kikuyuResume} 
                    downloadUrl={kikuyuDownloadUrl} 
                />
            </div>
        </section>
    );
};

export default ResumeSection;