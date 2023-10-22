import React from 'react'

const Team = () => {
  return (
    <div className=' w-full flex flex-col  font-poppins items-center justify-center'>
        <div className=' p-[1rem] md:p-[3rem] lg:p-[5rem] xl:p-[7rem] grid grid-col text-left'>
            <h2 className='uppercase text-[3rem] '>
                Meet the team
            </h2>
            <h5>
                Hover to see details
            </h5>
            < div className='flex flex-col md:flex-row xl:flex-row 2xl:flex-row lg:flex-row gap-2 items-center justify-center'>
                
                <img src="/Group 14.png" alt="" className='w-full hover:scale-[1.01]' />
                <img src="/Group 15.png" alt="" className='w-full hover:scale-[1.01]' />
            </div>
        </div>
      
    </div>
  )
}

export default Team

