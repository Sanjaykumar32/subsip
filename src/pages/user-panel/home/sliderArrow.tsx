import React from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const SliderArrow = (props: any) => {
  return (
    <div
        className={` ${props.bannerType} w-full pointer-events-none z-50 bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex px-5 justify-between  text-white font-normal `}
      >
        <SlArrowLeft
          onClick={() => props?.refVal?.current?.slickPrev()}
          className={`text-3xl md:text-4xl p-2 rounded-full bg-[#09292b] font-normal relative pointer-events-auto z-50 cursor-pointer `}
        />
        <SlArrowRight
          onClick={() => {
            props?.refVal?.current?.slickNext();
          }}
          className="text-3xl md:text-4xl p-2 rounded-full bg-[#09292b] font-normal relative z-50 pointer-events-auto cursor-pointer"
        />
      </div>
  )
}
  