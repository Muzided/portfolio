import React from 'react'
import giphy from '../assets/images/giphy.webp'

const Intro = () => {
    return (
        <div className='bg-blockchainBG bg-opacity-10 bg-cover bg-center bg-no-repeat h-screen font-bold'>
            <div className='flex flex-col h-screen justify-start items-center pt-24 space-y-6 '>

                <h1 className='text-7xl font-bold text-white'>Blockchain Development Services</h1>
                <p className='text-white/80 font-semibold text-xl max-w-4xl'>Leading blockchain development company with years of experience in IT,
                    Kaizen Global offers custom blockchain solutions tailored specifically
                    for your needs in a variety of platforms e.g. Ethereum, Solana, Polygon,
                    and Tron. Our experienced blockchain developers will help you create a
                    solid core for the next application.</p>
                <p className='text-white/80 text-xl font-semibold max-w-4xl'>Transform your business with our cutting-edge blockchain development services</p>
                <a href='https://thekaizenglobal.com/blockchain' className='rounded-full px-6 py-2 font-bold text-xl shadow-lg bg-[#0C2136]/70 border border-[#57B3FF]/20  text-[#3C93F7]'> Contact us</a>

            </div>
        </div>
    )
}

export default Intro
