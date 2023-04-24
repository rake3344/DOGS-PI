import React from 'react'
import "./Paginate.css"

export default function Paginate({ dogsPerPage, allDogs, paginate }) {

    const pageNumbers = [];

    const div = Math.ceil(allDogs / dogsPerPage)
    for (let i = 0; i < div; i++) {
        pageNumbers.push(i +1)
    }



    return (
        <nav className='pagination'>
            <ul>
                {
                    pageNumbers?.map(number => {
                        return (
                            <li key={number}>
                                <button onClick={() => {paginate(number)}}>{number}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
