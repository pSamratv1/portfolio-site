import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Samrat Pahari</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a web desiginer specializing in building and designing expectional digital experience. Currently I'm focused on building responsive websites.</p>
                <div>
                    <button className='group text-white px-6 py-3 border-2 flex flex-center hover:bg-pink-600 hover:border-pink-500'>View Works
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='mt-1 ml-3 justify-between'/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
