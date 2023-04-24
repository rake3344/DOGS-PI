import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getTemperaments, filterByTemperament, orderByName, orderByWeight } from '../../Redux/actions'
import Cards from '../Cards/Cards'
import "./Home.css"
import Paginate from '../Paginate/Paginate'

export default function () {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])
  
  const allDogs = useSelector(state => state.dogs)
  const temperaments = useSelector(state => state.temperaments)


  const [ actualPage, setActualPage ] = useState(1)
  const [ dogsPerPage, setDogsPerPage ] = useState(6)
  const lastIndex = actualPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;
  const currentDogs = allDogs?.slice(firstIndex, lastIndex)
  console.log(currentDogs);

  const paginate = (pageNumber) => {
    setActualPage(pageNumber)
  }
  
  
  


  return (
    <div className='box'>
      <div className='cards'>
        {
            currentDogs?.map((dog) => {
                return (
                  
                    <Cards
                        key={dog.id}
                        name={dog.name}
                        image={dog.image}
                        temperaments={dog.temperaments}
                        weight={dog.weight}
                    />
                )
            })
        }
      </div>
      <Paginate dogsPerPage= {dogsPerPage} allDogs={allDogs?.length} paginate={paginate} />
    </div>
  )
}
