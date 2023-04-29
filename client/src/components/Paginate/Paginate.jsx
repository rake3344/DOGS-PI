import React from 'react'
import "./Paginate.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginate({ dogsPerPage, allDogs, paginate }) {

    const pageNumbers = [];

    const div = Math.ceil(allDogs / dogsPerPage)
    for (let i = 0; i < div; i++) {
        pageNumbers.push(i +1)
    }



    return (
        <nav className='paginate'>
            <Stack spacing={2}>
                <Pagination count={div} onChange={(e) => paginate(e.target.textContent)} />
            </Stack>
        </nav>
    )
}
