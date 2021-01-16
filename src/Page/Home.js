import React from 'react'
import HomeAppBar from '../Component/NavBar'
import Content1 from './Content/content1'
import Content2 from './Content/content2'
import Content3 from './Content/content3'
import Footer from '../Component/Footer'

function Home() {
    return(
        <div className='Home'>
            <div className='NavBar'>
                <HomeAppBar />
            </div>
            <div className='Body'>
                <Content1 />
                <Content2 />
                <Content3 />
            </div>
            <div className='Footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home