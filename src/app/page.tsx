"use client"
import Img from '<absolute>/images/PORTRAIT.png'
import Flower from '<absolute>/images/FLOWER.svg'
import Circle from '<absolute>/images/CIRCLE.svg'
import Arrow from '<absolute>/images/arrow.svg'
import Image from 'next/image';
import useScreenSize from './libs/useScreenSize'
export default function Home() {

  const { width } = useScreenSize()

  return (
    <div className={`p-4 w-full h-screen m-auto bg-[#262626]  overflow-hidden overflow-y-auto grid-rows-10  gap-4 grid`}>
      <div className={`bg-black uppercase font-[Gilroy-Medium] px-[20px] flex items-center gap-2 h-full text-[20px] rounded-2xl text-white`}>
        <span className={`font-[Gilroy-Light] italic`}>Daniel</span>{" "}Adekoya
      </div>
      <div className={`grid grid-cols-6 gap-4 row-span-9`}>
        <div className={`grid grid-rows-9 gap-4 w-full col-span-4 h-full rounded-2xl`}>
          <div className={`grid grid-cols-6 row-span-5 gap-4 rounded-2xl`}>
            <div className={`bg-black relative col-span-4  w-full p-[30px] flex flex-col items-start justify-between h-full rounded-2xl text-white`}>
              <Image src={Flower} className='self-end' alt={''} />
              <div className='text-[55px] font-[Gilroy-Bold] leading-[60px]'>
                <div className=''>Frontend</div>
                <div className='italic font-[Gilroy-Light]'>Financial - Tech</div>
                <div className=''>Engineer</div>
              </div>
            </div>
            <div className={`bg-black relative overflow-hidden uppercase col-span-2  w-full flex items-center h-full rounded-2xl text-white`}>
              <Image src={Img} className='w-full h-full object-cover' alt={''} />
            </div>
          </div>
          <div className={`grid grid-cols-6 row-span-5 gap-4 rounded-2xl`}>
            <div className={`bg-black col-span-3 relative w-full p-[30px] flex flex-col items-start justify-between h-full  rounded-2xl text-white`}>

              <Image src={Circle} className='' alt={''} />
              <div className='text-[18px] font-[Gilroy-Light]'>Daniel Adekoya is a results-driven Front-End Engineer with four years of experience, specializing in building secure, intuitive, and responsive fintech applications. I focus on UI design, web, and mobile development, creating seamless user experiences for financial platforms that require high data security and compliance standards.</div>

            </div>
            <div className={`bg-[#393939] col-span-3  w-full p-[30px] flex justify-between flex-col h-full  rounded-2xl text-white`}>
              <div className='flex justify-between'>
                <span className='text-[18px] leading-6 font-[Gilroy-Medium]'>Have some<br />
                  questions?</span>
                <Image src={Arrow} className='' alt={''} />

              </div>
              <div className='text-[50px] font-[Gilroy-Medium]'>Contact me</div>
            </div>
          </div>
        </div>


        <div className={`grid col-span-2 grid-rows-9 gap-4`}>
          <div className={`bg-black row-span-8 w-full p-[30px] h-[78vh] overflow-hidden overflow-y-scroll rounded-2xl text-white`}>

            <div className='mb-6'>
              <div className='flex justify-between'>
                <span className='text-[25px] font-[Gilroy-Medium]'>Recital</span>
                <Image src={Arrow} className='' alt={''} />
              </div>
              <iframe scrolling='no' className='w-full rounded-2xl h-[300px] mt-4' width={1400} src="https://recital.finance?view=desktop" title="W3Schools Free Online Web Tutorials"></iframe>
              <hr className='mt-8' />
            </div>

            <div className='mb-6'>
              <div className='flex justify-between'>
                <span className='text-[25px] font-[Gilroy-Medium]'>Takeout Media                </span>
                <Image src={Arrow} className='' alt={''} />
              </div>
              <iframe scrolling='no' className='w-full rounded-2xl h-[300px] mt-4' width={1400} src="https://takeoutmedia.xyz?view=desktop" title="W3Schools Free Online Web Tutorials"></iframe>
              <hr className='mt-8' />
            </div>

            <div className='mb-6'>
              <div className='flex justify-between'>
                <span className='text-[25px] font-[Gilroy-Medium]'>Transfer Rocket</span>
                <Image src={Arrow} className='' alt={''} />
              </div>
              <iframe scrolling='no' className='w-full rounded-2xl h-[300px] mt-4' width={1400} src="https://dashboard.transferrocket.co.uk?view=desktop" title="W3Schools Free Online Web Tutorials"></iframe>
              <hr className='mt-8' />
            </div>

            <div className='mb-6'>
              <div className='flex justify-between'>
                <span className='text-[25px] font-[Gilroy-Medium]'>Petabyte eSports Mobile</span>
                <Image src={Arrow} className='' alt={''} />
              </div>
              <iframe scrolling='no' className='w-full rounded-2xl h-[300px] mt-4' width={1400} src="https://pesports.gg?view=desktop" title="W3Schools Free Online Web Tutorials"></iframe>
              <hr className='mt-8' />
            </div>

          </div>
          <div className={`bg-black uppercase w-full row-span-1 px-[20px] flex items-center h-full  rounded-2xl text-white`}>
          </div>
        </div>

      </div>


    </div>
  );
}
