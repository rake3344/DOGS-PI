import React from 'react'
import "./Create.css"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments, postDog } from '../../Redux/actions'


export default function Create() {

    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)
    const [ input, setInput ] = useState({
        name: '',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        temperaments: [],
        life_span: '',
        image: ''
    })

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleTemperaments = (e) => {
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postDog(input))
        alert('Dog created!')
    }




    return (
        <div className="create">
            <form onSubmit={handleSubmit} className='form'>
                <div className="name">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' onChange={handleInput} value={input.name} required/>
                </div>
                <div className="height">
                    <label htmlFor="min_height">Min Height: </label>
                    <input type="text" name='min_height' onChange={handleInput} value={input.min_height} required/>
                    <label htmlFor="max_height">Max Height: </label>
                    <input type="text" name='max_height' onChange={handleInput} value={input.max_height} required/>
                </div>
                <div className="weight">
                    <label htmlFor="min_weight">Min Weight: </label>
                    <input type="text" name='min_weight' onChange={handleInput} value={input.min_weight} required/>
                    <label htmlFor="max_weight">Max Weight: </label>
                    <input type="text" name='max_weight' onChange={handleInput} value={input.max_weight} required/>
                </div>
                <div className="temperaments">
                    <label htmlFor="temperaments">Temperaments: </label>
                    <select name="temperaments" onChange={handleTemperaments} value={input.temperaments}>
                        <option value="">Select Temperament</option>
                        {temperaments.map((t) => (
                            <option value={t.name}>{t.name}</option>
                        ))}
                    </select>
                </div>
                <div className="life_span">
                    <label htmlFor="life_span">Life Span: </label>
                    <input type="text" name='life_span' onChange={handleInput} value={input.life_span} required/>
                </div>
                <div className="image">
                    <label htmlFor="image">Image: </label>
                    <input type="text" name='image' onChange={handleInput} value={input.image} />
                </div>
                <button type='submit' className='btnCreate'>Create</button>
            </form>
        </div>
    )
}
