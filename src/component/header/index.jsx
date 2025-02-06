import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header">
            <div className="headerContainer">
                <div className="headerTop">
                    <div className="logo">
                        <div className='open-sidebar' onClick={() => setIsOpen(true)}> ☰  </div>
                        <img src="https://mettamuse-staging.gumlet.io/logo_icon_53c650c8f9.svg" alt="Logo" />
                    </div>

                    <div className="brand-logo">
                        <h1>Logo</h1>
                    </div>

                    <div className="headerIcons">
                        <button className="iconButton" aria-label="Search">
                            <SearchIcon />
                        </button>
                        <button className="iconButton" aria-label="Wishlist">
                            <HeartIcon />
                        </button>
                        <button className="iconButton" aria-label="Cart">
                            <BagIcon />
                        </button>
                        <button className="iconButton" aria-label="User Account">
                            <UserIcon />
                        </button>
                        <button className="langButton">ENG</button>
                    </div>
                </div>

                <nav className="mainNav">
                    <ul>
                        {['SHOP', 'STORIES', 'SKILLS', 'ABOUT', 'CONTACT US'].map((item) => (
                            <li key={item}>
                                <a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/*Mobile Sidebar */}
                <div className={`offcanvas ${isOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                        ✖
                    </button>
                    {['SHOP', 'STORIES', 'SKILLS', 'ABOUT', 'CONTACT US'].map((item) => (
                        <a href="#">{item}</a>))}
                </div>
            </div>
        </header>
    );
};

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

const BagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 1 0-16 0" /></svg>
);

export default Header;
