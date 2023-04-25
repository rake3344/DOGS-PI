import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments, filterByTemperament, orderByName, orderByWeight, getDogs } from '../../Redux/actions'
import "./Filters.css"

export default function Filters() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTemperaments())
        dispatch(getDogs())
    }, [dispatch])

    const temperaments = useSelector(state => state.temperaments)

    const [ orden, setOrden ] = useState('')

    const handleFilterTemperament = (e) => {
        e.preventDefault()
        dispatch(filterByTemperament(e.target.value))
    }

    const handleOrderName = (e) => {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        // setOrden(e.target.value)
    }

    const handleOrderWeight = (e) => {
        e.preventDefault()
        dispatch(orderByWeight(e.target.value))
        // setOrden(e.target.value)
    }



    return (
        <div className='filters'>
            <select onChange={handleOrderName}>
                <option value="">Filter By Name</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>

            <select onChange={handleOrderWeight}>
                <option value="">Filter By Weight</option>
                <option value="Max-Weight">Max</option>
                <option value="Min-Weight">Min</option>
            </select>

            <select onChange={handleFilterTemperament}>
                <option value="" >Filter By Temperament</option>
                <option value="All">All</option>
                {
                    temperaments?.map((temperament) => {
                        return (
                            <option value={temperament.name} key={temperament.id}>{temperament.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
