import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto">
                <div className="glass p-8 rounded-xl shadow-lg bg-white bg-opacity-20 backdrop-blur-lg">
                    <h2 className="text-3xl font-bold mb-4 text-black">À propos de moi</h2>
                    <p className="mb-4 text-black">Votre biographie professionnelle ici...</p>
                    <div className="flex space-x-4">
                        {/* Ajoutez vos icônes ici */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;