import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        
        
        <nav class="row">
            <div class="col" className={currentPage === 'About' ? 'col highlight' : 'col'}>
                <a
                    href="#About"
                    onClick={() => handlePageChange('About')}
                >
                    <h3>
                        About
                    </h3>
                </a>
            </div>
            <div class="col" className={currentPage === 'Project' ? 'col highlight' : 'col'}>
                <a
                    href="#Project"
                    onClick={() => handlePageChange('Project')}
                >
                    <h3>
                        Project
                    </h3>
                </a>
            </div>
            <div class="col" className={currentPage === 'Contact' ? 'col highlight' : 'col'}>
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                >
                    <h3>
                        Contact
                    </h3>
                </a>
            </div>
            <div class="col" className={currentPage === 'Resume' ? 'col highlight' : 'col'}>
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                >
                    <h3>
                        Resume
                    </h3>
                </a>
            </div>
        </nav>
    )
};

export default NavTabs;