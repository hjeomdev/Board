import React from 'react';
import { Pagination } from 'react-bootstrap';
function Paging ({ postsPerPage, totalPosts, currentPage, paginate }) {
    const pageNumbers = [];
    for (let number = 1; number <= Math.ceil(totalPosts / postsPerPage); number++){
        pageNumbers.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>,
        );
    }

    return (
        <div>
            <Pagination>
                {pageNumbers}
            </Pagination>
        </div>
    )

}

export default Paging;