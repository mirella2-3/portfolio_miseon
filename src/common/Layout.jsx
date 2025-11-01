import { Outlet } from 'react-router-dom';
import Header from './header';
import { useState } from 'react';
// import Footer from './Footer';

const Layout = () => {
    const [hideHeader, setHideHeader] = useState(false);
    return (
        <div className="wrap">
            {!hideHeader && <Header />}
            <main className="main">
                <Outlet context={{ setHideHeader }} />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
