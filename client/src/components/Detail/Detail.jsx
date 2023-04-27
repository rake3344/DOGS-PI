import React from 'react'
import { getDogsById } from '../../Redux/actions'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import './Detail.css'
import Loader from '../Loader/Loader'
import Navbar from '../Navbar/Navbar'

export default function Detail() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getDogsById(id)).then(() => setLoading(false))
    }, [dispatch, id])

    const handleClick = () => {
        navigate(-1)
    }

    const dogDetail = useSelector(state => state.dogDetail)
    let dogId, dogName, dogImage, dogTemperaments = [], dogHeight, dogWeight, dogLifeSpan

    if (dogDetail[0]) {
        dogId = dogDetail[0].id
        dogName = dogDetail[0].name
        dogImage = dogDetail[0].image
        dogHeight = dogDetail[0].height
        dogWeight = dogDetail[0].weight
        dogLifeSpan = dogDetail[0].life_span

        if (dogDetail[0].temperaments) {
            dogTemperaments = [...dogDetail[0].temperaments]
        }

        if (dogTemperaments) {
            dogTemperaments = dogTemperaments.join(', ')
        }
    }


    if(loading) {
        return (
            <div className="loader">
                <Loader />
            </div>
        )
    } else {

        return (
            <>
                <Navbar />
                <button className='button-back' onClick={handleClick}>Back</button>
                <div className='container2'>
                    <div className='detail'>
                        <img src={dogImage} alt={dogName} />
                    </div>
                    <div className='contentDetail'>
                        <h1>{dogName}</h1>
                        <ul>
                            <li><strong>Id: </strong>{dogId}</li>
                            <li><strong>Weight: </strong>{dogWeight && dogWeight[0]} - {dogWeight && dogWeight[1]} KG</li>
                            <li><strong>Height: </strong>{dogHeight && dogHeight[0]} - {dogHeight && dogHeight[1]} CM</li>
                            <li><strong>LifeSpan: </strong>{dogLifeSpan}</li>
                            <li><strong>Temperaments: </strong>{dogTemperaments}</li>
                        </ul>
                    </div>
                </div>
            </>
    
        )
    }
}
