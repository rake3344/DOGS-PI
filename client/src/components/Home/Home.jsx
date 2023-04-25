import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getTemperaments, filterByTemperament, orderByName, orderByWeight } from '../../Redux/actions'
import Cards from '../Cards/Cards'
import "./Home.css"
import Paginate from '../Paginate/Paginate'
import Filters from '../Filters/Filters'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function () {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])

  const allDogs = useSelector(state => state.dogs)


  const [actualPage, setActualPage] = useState(1)
  const [dogsPerPage, setDogsPerPage] = useState(6)
  const lastIndex = actualPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;
  const currentDogs = allDogs?.slice(firstIndex, lastIndex)


  const paginate = (pageNumber) => {
    setActualPage(pageNumber)
  }

  
  return (
    <div className='box'>
      <Navbar />
      <div>
        <div className='filters'>
          <Filters />
        </div>
        <div className='cards'>
          {
            currentDogs?.map((dog) => {
              return (
                <Link to={`/dog/${dog.id}`} className='link2'>
                  <Cards
                    key={dog.id}
                    name={dog.name}
                    image={dog.image}
                    temperaments={dog.temperaments}
                    weight={dog.weight}
                  />
                </Link>
              )
            })
          }
        </div>
        <div className="paginate">
          <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs?.length} paginate={paginate} />
        </div>
      </div>
    </div>
  )
}
