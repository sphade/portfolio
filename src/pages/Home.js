import React from 'react'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import '../styles/home.css'
function Home() {
    return (
        <div className='home'>
            
            <Sidebar />
            <Hero/>
        </div>
    )
}

export default Home
