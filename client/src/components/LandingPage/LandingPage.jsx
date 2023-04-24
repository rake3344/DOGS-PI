import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <section className="full">
        <div className="full-inner">
            <div className="content">
                <h1>Dogs App</h1>
                <Link to="/home" >
                    <button className="btn">Home</button>
                </Link>
            </div>
        </div>
    </section>
  )
}
