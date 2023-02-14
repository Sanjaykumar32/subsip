import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { theme } from 'theme';

export const About = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [business, setBusiness] = useState('Subscribers')
  console.log(business, 'business')
  return (
    <>

      <div className="">
        <div className='about-banner  py-12 md:pt-[10rem]'>
          <div className="banner-content">
            <div className="banner-heading ">

              <h3 className="ab-h2">
                <span className="text-span-23 text-[#ffffff] relative ">
                  Subsip is a discovery platform connecting subscribers with vetted businesses. It helps our business partners grow by providing rewards and perks to valued subscribers.
                  <span className='flex justify-center'>
                    <img src="https://assets.website-files.com/615b54e9eebdbb6f52457d5b/61b6cc5de7c28e28abf099cb_Vector%2034.svg"
                      loading="lazy"
                      data-w-id="579a5b13-ba88-5afc-891d-33a5fda814ee"
                      alt="" className="image-118   h-[18px] w-auto"
                    />
                  </span>
                </span>
              </h3>
            </div>
          </div>
        </div>


        {/* <div className='bg-[#fff] '>
          <div className="m-auto mx-10 " >
            <div className=" py-20 ">
              <div className="">
                <h2 className="text-[#021414] aboutText  flex justify-center flex-col align-center text-center font-bold leading-[56px] font-sans">We’re on a mission to bust open
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
        </div> */}



        <div className="container-12 w-container m-auto my-[20px]  ">
          <div className="flex justify-center mb-1 " >
            <h2 className="heading-40 relative">How it
              <span className="text-span-25 text-[#ACCF02]" > works</span>
            </h2>
            {!isMobile && <img src="https://assets.website-files.com/615b54e9eebdbb6f52457d5b/61b6cd50c5d3d5e8db67cd88_double-ar.svg"
              loading="lazy"
              alt=""
              className="flip-image-121 absolute top-[25px] left-[32%]" />}
          </div>
          <div className=" grid grid-cols-2 justify-center gap-2">
            <div className=" grid-cols-1">
              <button onClick={() => setBusiness('Subscribers')} className={`  border-[0.5px] border-solid  rounded-[6px] w-full py-4 text-[18px] font-medium ${business == 'Subscribers' ? 'bg-[#ACCF02] border-[#595959]' : 'border-[#ACCF02] text-[#ACCF02]'} `}>Subscribers</button>
            </div>
            <div className=" grid-cols-1">
              <button onClick={() => setBusiness('Business')} className={` border-[0.5px] border-solid  rounded-[6px] w-full py-4 text-[18px] font-medium ${business == 'Business' ? 'bg-[#ACCF02] border-[#595959]' : 'border-[#ACCF02] text-[#ACCF02]'} `}>Business</button>
            </div>
          </div>



          <div className=" mt-1 bg-[#fff] border-[0.5px] border-[#ACCF02] border-solid rounded-[6px]">
            {business == 'Business' &&
              <div className="  py-[40px] px-5  m-auto ">
                <div className="flex justify-evenly w-[70%] gap-4">
                  <div className="">
                    <div className=" relative">
                      <h2 className="text-[24px] text-[#021414] font-extrabold ">Attention Businesses!
                      </h2>
                    </div>
                    <ul className='ulSubs'>
                      <li>The discovery platform built for growth.</li>
                      <li>Vastly expand your available advertising budget without using any cash.</li>
                      <li>Convert underutilized capacity into a source of customers.</li>
                      <li>Turn excess inventory into a stream of new business without losing regular business. </li>
                      <li> Issue certificates en masse as part of a broader promotional initiative.</li>
                      <li> Recycle dollars back into your business</li>
                    </ul>
                  </div>
                </div>
              </div>}
            {business == 'Subscribers' &&
              <div className="  py-[40px] px-5  m-auto ">
                <div className=" flex justify-evenly gap-4">
                  <div className="">
                    <div className=" relative">
                      <h2 className="text-[24px] text-[#021414] font-extrabold ">Attention Subscribers!
                      </h2>
                    </div>
                    <ul className='ulSubs'>

                      <li>Discover businesses on the platform!</li>
                      <li>Subscribe to listings!</li>
                      <li>Claim rewards as they are dropped!</li>
                      <li>Rewards are certificates from businesses you’re subscribed to and they are claimed on a first come first serve basis! </li>
                      <li>Your certificates are as good as cash with no obligation for extra purchases beyond the amount of the certificate!</li>
                      <li>Invite your friends to subscribe to listings and get extra perks like early access and exclusive certificates for our loyal influencers!</li>
                      <li>Check to see how many referrals you have and how many referrals are remaining to hit the next milestone!</li>
                      <li> A new model for Loyalty, Rewards and Referrals!</li>

                    </ul>

                  </div>
                </div>
              </div>}
          </div>
        </div>



      </div>
    </>
  )
}
