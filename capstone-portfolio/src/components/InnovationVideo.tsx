// src/components/InnovationVideo.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const InnovationVideo: React.FC = () => {
    const description = 
        "A 20-minute video detailing a technical innovation relevant to the BBIT field. It includes an explanation of the problem, the proposed solution, and a demonstration. Accompanied by multilingual abstracts (Kiswahili, English, and one African language).";

    const PreviewComponent = (
        // Placeholder for a YouTube or Vimeo embed
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/mock-video-id" 
            title="Innovation Video Preview" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="border-0"
        ></iframe>
    );

    return (
        <section id="innovation" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">4.</span> Innovation/Invention Video <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Technical Innovation: [Your Innovation Title Here]"
                description={description}
                marks={10}
                documentUrl="https://youtube.com/link-to-full-video" 
                downloadUrl="https://drive.google.com/link-to-video-download" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default InnovationVideo;