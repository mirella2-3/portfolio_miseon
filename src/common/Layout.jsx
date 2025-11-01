import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [currentSection, setCurrentSection] = useState('');

    return (
        <div className="wrap">
            {showHeader && <Header currentSection={currentSection} />}

            <main className="main">
                <Outlet context={{ setShowHeader, setCurrentSection }} />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
