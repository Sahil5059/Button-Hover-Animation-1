//imports
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {}

const Page = ( props: Props ) => {

	const [ isHovered, setIsHovered ] = useState( false );
	const [ isClicked, setIsClicked ] = useState( false );

  	return (
    	<div className='w-[100%] h-[100vh] flex flex-col justify-center items-center bg-[#000000]'>
      		<div className='w-[745px] h-[273px] flex flex-col justify-center items-center relative cursor-pointer main-container'>
				<motion.div initial={{ scale: 1 }} animate={{ scale: isHovered && !isClicked ? 1.15 : 1, x: isHovered && !isClicked ? 50 : 0, y: isHovered && !isClicked ? 20 : 0 }} transition={{ type:"spring", stiffness:300, damping:20 }}  className='w-[745px] h-[273px] flex justify-center items-center border-[3px] border-[#FFFFFF] rounded-[256px] font-[400] text-[96px] leading-[116px]'></motion.div>
				<motion.div whileHover={{ scale: 1.15, x: 70, y: 0 }} whileTap={{ scale: 1, x: 0, y: 0 }} transition={{ type:"spring", stiffness:300, damping:20 }} onMouseEnter={ () => setIsHovered( true )} onMouseLeave={ () => setIsHovered( false )} onMouseDown={ () => setIsClicked( true )} onMouseUp={ () => setIsClicked( false )} className='w-[745px] h-[273px] bg-[transparent] flex justify-center items-center absolute inset-0 m-auto z-[99] rounded-[256px] font-[400] text-[96px] leading-[116px]'>Follow</motion.div>
				<motion.div initial={{ scale: 1 }} animate={{ scale: isHovered && !isClicked ? 1.15 : 1, x: isHovered && !isClicked ? 70 : 0, y: 0 }} className='w-[745px] h-[273px] flex items-center justify-center absolute inset-0 m-auto border-[3px] border-[#FFFFFF] rounded-[256px] z-[98] bg-[#000000] overflow-hidden'>
					<motion.div initial={{ scale: 1 }} animate={{ scale: isHovered && !isClicked ? 1.15 : 1, x: isHovered && !isClicked ? 1100 : 0, y: 0 }} transition={{ type:"spring", stiffness:300, damping:20 }} className='w-[373px] h-[464px]' >
						{/* svg code, dont panic */}
						<svg width="373" height="464" viewBox="0 0 373 464" fill="none" xmlns="http://www.w3.org/2000/svg" className='translate-x-[-480px] translate-y-[50px]'>
							<rect width="62.6935" height="531.056" transform="matrix(0.816545 -0.577281 0.592561 0.805525 0 36.1918)" fill="white"/>
							<rect width="15.9221" height="480.644" transform="matrix(0.816545 -0.577281 0.592561 0.805525 74.6138 18.9229)" fill="white"/>
						</svg>
					</motion.div>
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered && !isClicked ? 1 : 0 }} className='min-w-[924px] min-h-[427px] absolute inset-0 m-auto z-[98] translate-x-[-40px]'>
					{/* svg code, dont panic */}
					<svg width="924" height="427" viewBox="0 0 924 427" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute inset-0 m-auto'>
						<path d="M740.883 25.4653L749.177 42.2016L767.28 46.7998L750.544 55.0936L745.946 73.1975L737.652 56.4612L719.548 51.863L736.285 43.5691L740.883 25.4653Z" fill="url(#paint0_linear_1466_233)"/>
						<path d="M518.784 393.191L524.313 404.348L536.382 407.414L525.225 412.943L522.159 425.012L516.63 413.855L504.561 410.789L515.718 405.26L518.784 393.191Z" fill="url(#paint1_linear_1466_233)"/>
						<path d="M490.149 1.42154L494.296 9.7897L503.348 12.0888L494.98 16.2357L492.68 25.2876L488.534 16.9195L479.482 14.6204L487.85 10.4735L490.149 1.42154Z" fill="url(#paint2_linear_1466_233)"/>
						<path d="M15.1058 82.8292L20.2894 93.2894L31.6043 96.1632L21.1441 101.347L18.2703 112.662L13.0866 102.202L1.77171 99.3278L12.2319 94.1441L15.1058 82.8292Z" fill="url(#paint3_linear_1466_233)"/>
						<path d="M880.129 251.904L892.486 276.839L919.459 283.69L894.524 296.047L887.673 323.02L875.316 298.084L848.343 291.234L873.279 278.877L880.129 251.904Z" fill="url(#paint4_linear_1466_233)"/>
						<path d="M170.841 233.273L192.112 276.195L238.541 287.987L195.619 309.258L183.827 355.688L162.556 312.765L116.126 300.973L159.049 279.702L170.841 233.273Z" fill="url(#paint5_linear_1466_233)"/>
						<defs>
							<linearGradient id="paint0_linear_1466_233" x1="740.883" y1="25.4653" x2="745.946" y2="73.1975" gradientUnits="userSpaceOnUse">
								<stop offset="0.41" stopColor="white"/>
								<stop offset="1" stopColor="#666666"/>
							</linearGradient>
							<linearGradient id="paint1_linear_1466_233" x1="518.784" y1="393.191" x2="522.159" y2="425.012" gradientUnits="userSpaceOnUse">
								<stop offset="0.41" stopColor="white"/>
								<stop offset="1" stopColor="#666666"/>
							</linearGradient>
							<linearGradient id="paint2_linear_1466_233" x1="490.149" y1="1.42154" x2="492.68" y2="25.2876" gradientUnits="userSpaceOnUse">
								<stop offset="0.41" stopColor="white"/>
								<stop offset="1" stopColor="#666666"/>
							</linearGradient>
							<linearGradient id="paint3_linear_1466_233" x1="15.1058" y1="82.8292" x2="18.2703" y2="112.662" gradientUnits="userSpaceOnUse">
								<stop offset="0.41" stopColor="white"/>
								<stop offset="1" stopColor="#666666"/>
							</linearGradient>
							<linearGradient id="paint4_linear_1466_233" x1="880.129" y1="251.904" x2="887.673" y2="323.02" gradientUnits="userSpaceOnUse">
								<stop offset="0.41" stopColor="white"/>
								<stop offset="1" stopColor="#666666"/>
							</linearGradient>
							<linearGradient id="paint5_linear_1466_233" x1="170.841" y1="233.273" x2="183.827" y2="355.688" gradientUnits="userSpaceOnUse">
								<stop offset="0.41" stopColor="white"/>
								<stop offset="1" stopColor="#666666"/>
							</linearGradient>
						</defs>
					</svg>
				</motion.div>
      		</div>
    	</div>
  )
}

export default Page;