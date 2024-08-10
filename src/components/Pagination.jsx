import React from 'react';

const Pagination = ({ totalPage, page, onPageChange, siblings }) => {
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <nav className="mt-5 h-[300px]">
            <ul className="pagination flex">
                <li className={`border-[1px] text-gray-500 p-2 px-4 hover:border-blue-600 m-1 ${page === 1 ? 'disabled opacity-50 cursor-not-allowed' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => onPageChange(page - 1)}
                        aria-label="Previous"
                        disabled={page === 1}
                    >
                        <span aria-hidden="true">ត្រលប់</span>
                    </button>
                </li>
                {pageNumbers.map((pageNumber) => (
                    pageNumber <= siblings ||
                    pageNumber >= totalPage - siblings ||
                    (pageNumber >= page - siblings && pageNumber <= page + siblings) ? (
                        <li key={pageNumber} className={`m-1 ${page === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                            <button
                                className={`w-10 h-10 ${page === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 '}`}
                                onClick={() => onPageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ) : null
                ))}
                <li className={`border-[1px] text-gray-500 p-2 px-4 hover:border-blue-600 m-1 ${page === totalPage ? 'disabled opacity-50 cursor-not-allowed' : ''}`}>
                    <button
                      
                        onClick={() => onPageChange(page + 1)}
                        aria-label="Next"
                        disabled={page === totalPage}
                    >
                        <span aria-hidden="true">បន្ទាប់</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
