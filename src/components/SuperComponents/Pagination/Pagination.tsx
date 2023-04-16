import React from 'react';
import Pagination from '@mui/material/Pagination';
import styles from './Pagination.module.css'

type PaginationPropsType = {
    currentPageHAndler: (currentPage: number) => void
    totalItemsCount: number
    pageSize: number
}

export const SuperPagination: React.FC<PaginationPropsType> = ({
                                                                   currentPageHAndler,
                                                                   pageSize,
                                                                   totalItemsCount
                                                               }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    const [page, setPage] = React.useState(1);
    const handlePageChange = (e, value) => {
        console.log(value)
        setPage(value);
        currentPageHAndler(value)
    };

    return (
        <div className={styles.pagination}>
            <Pagination
                page={page}
                onChange={handlePageChange}
                color="secondary"
                count={pagesCount}
                variant="outlined"
                shape="rounded"/>
        </div>
    );
};

