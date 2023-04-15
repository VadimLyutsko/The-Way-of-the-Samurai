import React from 'react';
import styles from './Pagination.module.css';

type PaginationPropsType = {
    currentPageHAndler: (currentPage: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
}

const Pagination: React.FC<PaginationPropsType> = ({currentPageHAndler, currentPage, pageSize, totalUsersCount}) => {

    // let pagesCount = Math.ceil(15);  //hardCode for normal UI
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.slice(0, 15).map((p, i) => {   //slice(0, 15) -> Временно укоротил список
                    return <span key={i} onClick={() => {
                        currentPageHAndler(p);
                    }}
                                 className={currentPage === p ? styles.selectedPageNow : styles.selectedPage}>{p}</span>;
                })
            }
            ... and others
        </div>
    );
};

export default Pagination;