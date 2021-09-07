import React from 'react'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import '../styles/home.css'
function Home() {
    return (
        <div>
            <h1>home page</h1>
            <Sidebar />
            <Hero/>
        </div>
    )
}

export default Home
