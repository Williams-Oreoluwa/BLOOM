import React from 'react'

const Team = () => {
  return (
    <div className=' w-full relative flex flex-col  font-poppins'>
        <div className='max-w-[1650px] p-[1rem] md:p-[3rem] lg:p-[5rem] xl:p-[7rem] grid grid-col text-left'>
            <h2 className='uppercase text-[3rem] '>
                Meet the team
            </h2>
            <h5>
                Hover to see details
            </h5>
            < div className='flex flex-row gap-2'>
                
                <img src="/Group 14.png" alt="" className='w-[50%] h-[200px] md:w-full lg:h-[70%] hover:scale-[1.01]' />
                <img src="/Group 15.png" alt="" className='w-[50%] h-[200px] md:w-full lg:h-[70%] hover:scale-[1.01]' />
            </div>
        </div>
      
    </div>
  )
}

export default Team

