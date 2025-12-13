// src/components/AfricanCulturePresentation.tsx

import React from 'react';
import PortfolioItemCard from './PortfolioItemCard'; 

const AfricanCulturePresentation: React.FC = () => {
    const description = 
        "A detailed presentation summarizing the cultural research presented in the video. The presentation focuses explicitly on linking the cultural aspect to my specialization in Business Information Technology (BBIT) and its practical implications.";

    const PreviewComponent = (
        <div className="p-4 flex items-center justify-center text-lg text-amber-300">
            <p>Presentation slides preview showing cultural analysis and BBIT relevance.</p>
        </div>
    );

    return (
        <section id="culture-presentation" className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="section-title">
                <span className="text-amber-400">7.</span> African Culture Presentation <span className="text-amber-400">(10 Marks)</span>
            </h2>
            
            <PortfolioItemCard
                title="Cultural Relevance and Specialization Link"
                description={description}
                marks={10}
                documentUrl="https://drive.google.com/link-to-full-culture-presentation" 
                downloadUrl="https://drive.google.com/link-to-presentation-download-pdf" 
                preview={PreviewComponent}
            />
        </section>
    );
};

export default AfricanCulturePresentation;