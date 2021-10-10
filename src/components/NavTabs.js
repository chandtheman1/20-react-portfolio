import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        
        
        <ul>
            <div>
                <h1>Chandler Liang</h1>
            </div>
            <li>
                <a
                    href="#About"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            <li>
                <a
                    href="#Project"
                    onClick={() => handlePageChange('Project')}
                    className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                >
                Project
                </a>
            </li>
            <li>
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li>
                <a
                    href="#Resume"
                >
                    Resume
                </a>
            </li>
        </ul>
    )
};

export default NavTabs;