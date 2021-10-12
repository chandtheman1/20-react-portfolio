import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        
        
        <nav class="row">
            <div class="col" className={currentPage === 'About' ? 'col highlight' : 'col'}>
                <a
                    href="#About"
                    class="link"
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
                    class="link"
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
                    class="link"
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
                    class="link"
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