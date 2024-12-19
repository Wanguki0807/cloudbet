import React from 'react'
import BigCardGrid from './HomePageBigCardGrid'

export default function HomePageFirstSection() {
  return (

   <section id='first-section' className='section_top relative z-[1] w-full'>
    <div className='section overflow-hidden relative w-full'>
        <div className="background_contain absolute top-0 bottom-0 right-0 left-0 flex w-full h-full z-[-2]">
            <div
                className="background_contain u-hflex-center-center flex items-center"
                style={{ opacity: 1 }}
            >
                <div data-color="purple" className="background_item w-embed u-height-100">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1512 1429"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <g opacity="0.25" filter="url(#filter0_f_4858_34212)">
                    <path
                        d="M1317.6 938.086C1104.23 776.397 996.827 532.692 995.513 207.268L1188.96 57.8994C1134.89 423.303 1240.44 668.244 1511.05 788.717L1317.49 938.173L1317.6 938.086Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M1253.05 987.933L1059.49 1137.39C916.395 921.438 808.988 677.733 737.4 406.57L930.96 257.115C949.067 566.786 1055.11 811.146 1253.05 987.933Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M194.623 488.823C407.99 650.512 515.397 894.218 516.712 1219.64L323.264 1369.01C377.336 1003.61 271.788 758.666 1.17468 638.192L194.735 488.737L194.623 488.823Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M259.175 438.977L452.735 289.521C595.83 505.471 703.236 749.176 774.824 1020.34L581.264 1169.79C563.158 860.123 457.115 615.763 259.175 438.977Z"
                        fill="currentColor"
                    ></path>
                    </g>
                    <defs>
                    <filter
                        id="filter0_f_4858_34212"
                        x="-148.825"
                        y="-92.1006"
                        width="1809.87"
                        height="1611.11"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feGaussianBlur
                        stdDeviation="75"
                        result="effect1_foregroundBlur_4858_34212"
                        ></feGaussianBlur>
                    </filter>
                    </defs>
                </svg>
                </div>
            </div>
            <div>
                <div className="gradient_wrap section_gradient u-absolute-bottom"></div>
                <div className="gradient_wrap section_gradient u-absolute-top"></div>
            </div>
        </div>
        <div className='u-container u-vflex-center-top u-gap-20'>
            <BigCardGrid/>
            
        </div>

    </div>
    

   </section>
  )
}
