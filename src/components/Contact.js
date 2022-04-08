import React from 'react'

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] text-white flex justify-center p-4 items-center'>
            <form className='flex flex-col max-w-[600px] w-full' method='POST'action="https://getform.io/f/6c29d0ca-6591-4428-82ae-4e8cd6ec46b3">
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <code className='text-xl text-bold text-[#0a42f8]'>iamsamrat2056@gmail.com</code>.</p>
                </div>
                <input className='text-[#25272b] bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='text-[#25272b] my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
                <textarea className='text-[#25272b] p-2 bg-[#ccd6f6]' name="message" cols="30" rows="10" placeholder='Enter your message here.'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>

        </div>
    )
}

export default Contact
