import React from 'react'
import { BsArrowUpRight, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#594EDC] to-[#A54DE4] font-poppins p-5'>
        <div className='flex flex-col items-center justify-center text-center gap-2 text-white'>
            <div>
                <h1 className='text-[2rem] font-semibold'>
                    BLOOM

                </h1>
            </div>
            <div>
                <h3 className='font-light text-[.7rem]'>
                    Want to connect with us?
                    
                </h3>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center text-[30px] pb-1 border-b-[2px] border-b-white text-white'>
                <a href="">
                    Send us an email

                </a>
                <BsArrowUpRight/>
            </div>
            <div className='flex flex-row text-white gap-4'>
                <BsTwitter/>
                <BsWhatsapp/>
                <BsInstagram/>
                <BsLinkedin/>
            </div>
            <div>
              <h3 className='font-light text-[.7rem]'>
                2023 All rights reserved. Bloom
              </h3>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
