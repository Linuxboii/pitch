import React from 'react';
import { Hero } from './components/Hero.jsx';
import { Positioning } from './components/Positioning.jsx';
import { DemoSocial } from './components/DemoSocial.jsx';
import { DemoWhatsApp } from './components/DemoWhatsApp.jsx';
import { DemoRealEstate } from './components/DemoRealEstate.jsx';
import { MarketScale } from './components/MarketScale.jsx';

function App() {
    return (
        <main className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-background-darker">
            <Hero />
            <Positioning />
            <DemoSocial />
            <DemoWhatsApp />
            <DemoRealEstate />
            <MarketScale />
        </main>
    );
}

export default App;
