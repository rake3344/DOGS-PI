import React from 'react'
import "./Cards.css"

export default function Cards({ image, name, temperaments, weight }) {
  return (
    <div className="container">
      <div className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <ul>
          {
            temperaments?.map((t, i) => {
              return <li key={i}>{t}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
