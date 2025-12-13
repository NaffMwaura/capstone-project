// src/components/InnovationPresentation.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const InnovationPresentation: React.FC = () => {
    const description = 
        "A summary presentation synthesizing the key technical aspects of the innovation/invention, including architecture, key features, and implementation methodology (supporting the video content).";

    const PreviewComponent = (
        <div className="p-4 flex items-center justify-center text-lg text-amber-300">
            <p>Presentation slides preview for the Innovation Project.</p>
        </div>
    );

    return (
        <section id="innovation-presentation" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">5.</span> Innovation Presentation <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Innovation Summary and Technical Deep Dive"
                description={description}
                marks={10}
                documentUrl="https://drive.google.com/link-to-full-innovation-presentation" 
                downloadUrl="https://drive.google.com/link-to-presentation-download-pdf" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default InnovationPresentation;