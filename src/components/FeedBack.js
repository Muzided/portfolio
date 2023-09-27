import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { MdOutlineChevronLeft } from 'react-icons/md'
import { MdOutlineChevronRight } from 'react-icons/md'
import test1 from '../assets/images/test1.jpg'

const FeedBack = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 400
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 400
  }
  return (
    <div className='bg-[#080c0e] backdrop-blur-3xl text-white ' ref={ref}>
      <div className=' py-24 px-16' >
        <div className='flex space-x-16 justify-center items-start py-10 '>
          <div className='font-semibold text-center text-4xl'>
            <h1 className=''>Year of Service</h1>
            <p> {inView ? <CountUp start={0} end={2} duration={3} /> : "2"}+</p>

          </div>
          <div className='font-semibold text-center text-4xl'>
            <h1>Project Completion</h1>
            <p>{inView ? <CountUp start={0} end={98} duration={3} /> : "98"}%</p>

          </div>
          <div className='font-semibold text-center text-4xl'>
            <h1>Satisfied Clients</h1>
            <p>{inView ? <CountUp start={0} end={100} duration={3} /> : "100"}%</p>

          </div>

        </div>
        <div className='flex justify-end py-4 gap-2 mr-8 ' >
          <div className=''>
            <button onClick={slideLeft} className='bg-white/50 px-6 py-2 rounded-full '>
              <MdOutlineChevronLeft size={28} />  </button>
          </div>
          <div className=''>
            <button onClick={slideRight} className='bg-white/50 px-6 py-2 rounded-full'>
              <MdOutlineChevronRight size={28} />  </button>
          </div>
        </div>
        <h1 className='text-4xl font-medium text-white/80  text-center pb-2'>TESTIMONIAL</h1>

        <div className='flex gap-4   overflow-x-hidden scroll scroll-smooth overflow-y-hidden' id='slider'>
          <div className='bg-black/20 backdrop-blur-3xl shadow-sm shadowbg  text-black p-4 border-2 border-white/50 flex flex-col  rounded-md max-w-md' >
            <div className='text-4xl text-end font-bold text-white'>" </div>
            <div className='text-white/80 pb-4'>I have been working with Kaizen Global on a blockchain project for the last few months and I am really impressed. Their team of professionals is knowledgeable and experienced, and they always provide high-quality solutions. They are also very responsive to our needs and make sure our project is completed on time. I would highly recommend them for any blockchain development needs.
            </div>
            <div className='flex justify-start items-center  gap-4  pb-2 '>
              <img src={test1} alt='client' className='w-16 rounded-full' />
              <div className='font-medium text-white/80'>Rica Rails</div>
            </div>
          </div>
          <div className='bg-white/10  backdrop-blur-lg shadowbg shadow-sm text-black p-4 border-2 border-white/50 flex flex-col  rounded-md max-w-md' >
            <div className='text-4xl text-end font-bold text-white'>" </div>
            <div className='text-white/80 pb-4'>I have been working with Kaizen Global on a blockchain project for the last few months and I am really impressed. Their team of professionals is knowledgeable and experienced, and they always provide high-quality solutions. They are also very responsive to our needs and make sure our project is completed on time. I would highly recommend them for any blockchain development needs.
            </div>
            <div className='flex justify-start items-center gap-4 pb-2 '>
              <img src={test1} alt='client' className='w-16 rounded-full' />
              <div className='font-medium text-white/80'>Rica Rails</div>
            </div>
          </div>
          <div className='bg-black/20  backdrop-blur-2xl shadowbg shadow- text-black p-4 border-2 border-white/50 flex flex-col  rounded-md max-w-md' >
            <div className='text-4xl text-end font-bold text-white'>" </div>
            <div className='text-white/80 pb-4'>I have been working with Kaizen Global on a blockchain project for the last few months and I am really impressed. Their team of professionals is knowledgeable and experienced, and they always provide high-quality solutions. They are also very responsive to our needs and make sure our project is completed on time. I would highly recommend them for any blockchain development needs.
            </div>
            <div className='flex justify-start items-center gap-4 pb-2 '>
              <img src={test1} alt='client' className='w-16 rounded-full' />
              <div className='font-medium text-white/80'>Rica Rails</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeedBack
