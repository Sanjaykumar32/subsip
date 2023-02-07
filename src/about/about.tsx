import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { theme } from 'theme';

export const About = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [business , setBusiness] = useState('Business')
  console.log(business , 'business')
  return (
    <>

      <div className="">
        <div className='about-banner  py-12 md:pt-[10rem]'>
          <div className="banner-content">
            <div className="banner-heading ">

              <h2 className="ab-h2">Claim free
                <span className="text-span-28"> certificates from</span>

                <br />businesses you love on <br />
                <span className="text-span-23 text-[#ffffff] relative "> Subsip
                  Free certificates from businesses you love!
                  <span className='flex justify-center'>
                  <img src="https://assets.website-files.com/615b54e9eebdbb6f52457d5b/61b6cc5de7c28e28abf099cb_Vector%2034.svg"
                    loading="lazy"
                    data-w-id="579a5b13-ba88-5afc-891d-33a5fda814ee"
                    alt="" className="image-118   h-[18px] w-auto"
                  />
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>


        <div className='bg-[#fff] '>
          <div className="container-12 w-container m-auto " >
            <div className=" py-20  overflow-auto">
              <div className="">
                <h2 className="text-[#021414] text-[48px] flex justify-center flex-col align-center text-center font-bold leading-[48px] font-sans">We’re on a mission to bust open
                  <span className="text-[#ACCF02]">
                    the doors of entrepreneurship
                    ‍</span>for everyone.
                </h2>
                <img src="https://assets.website-files.com/615b54e9eebdbb6f52457d5b/61b6cc6a7aec847695fa23b4_Vector%2035.svg"
                  loading="lazy"
                  alt=""
                  className="w-[150px] m-auto my-3"
                />
              </div>
              <div className='flex justify-center text-center'>

              <p className="text-[22px] leading-8 text-[#ACCF02] font-medium">AppSumo is the platform 1.25M+ <br />entrepreneurs trust for everything they need to create fulfilling businesses. We’ve got all the tools you need to grow and scale.</p>
              </div>
            </div>
          </div>
        </div>



        <div className="container-12 w-container m-auto my-[20px]  ">
          <div className="about-wrk-head mb-5">
            <h2 className="heading-40 relative">How it
              <span className="text-span-25 text-[#ACCF02]" > works</span>
            </h2>
            <img src="https://assets.website-files.com/615b54e9eebdbb6f52457d5b/61b6cd50c5d3d5e8db67cd88_double-ar.svg"
              loading="lazy"
              alt=""
              className="flip-image-121 absolute top-[25px] left-[10px]" />
          </div>
          <div className=" grid grid-cols-2 justify-center gap-2">
            <div className=" grid-cols-1">
              <button onClick={()=> setBusiness('Business')} className=' hover:bg-[#144272] hover:text-white border-[0.5px] border-solid border-[#595959] rounded-[6px] w-full py-4 text-[22px] font-medium bg-[#ACCF02]'>Business</button>
            </div>
            <div className=" grid-cols-1">
              <button onClick={()=> setBusiness('Subscribers')}  className=' hover:bg-[#144272] hover:text-white border-[0.5px] border-solid border-[#595959] rounded-[6px] w-full py-4 text-[22px] font-medium bg-[#ACCF02]'>Subscribers</button>
            </div>
          </div>

         

          <div className=" mt-1 bg-[#39cd62]">
            {business == 'Business' &&
          <div className="  py-[40px] px-5  m-auto ">
            <div className="flex justify-evenly gap-4">
              <div className="">
                <div className=" relative">
                  <h2 className="text-[46px] text-[#021414] font-extrabold ">Business
                  </h2>
                </div>
                <p className="text-[20px] text-[#ffffff] mt-5">List your digital products.<br />Apply for AppSumo Select.
                AppSumo is the platform 1.25M+ <br />entrepreneurs trust for everything they need to create fulfilling businesses. We’ve got all the tools you need to grow and scale.
                </p>
              </div>
            </div>
          </div>}
          {business == 'Subscribers' &&
          <div className="  py-[40px] px-5  m-auto ">
            <div className="flex justify-evenly gap-4">
              <div className="">
                <div className=" relative">
                  <h2 className="text-[46px] text-[#021414] font-extrabold ">Subscribers
                  </h2>
                </div>
                <p className="text-[20px] text-[#ffffff] mt-5">
                AppSumo is the platform 1.25M+ <br />entrepreneurs trust for everything they need to create fulfilling businesses. We’ve got all the tools you need to grow and scale.
                </p>
              </div>
            </div>
          </div>}
        </div>
        </div>


       
      </div>
    </>
  )
}
