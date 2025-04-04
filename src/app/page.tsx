'use client';

import { Newsreader } from 'next/font/google';
import { useState } from 'react';
const newsreaderFont = Newsreader({
  weight: '300',
});

export default function Home() {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className={newsreaderFont.className}>
      <header className="fixed top-0 z-50 w-screen">
        <div className="flex md:justify-between flex-col md:flex-row md:h-16 h-auto w-full bg-blueCustom">
          <div className="flex justify-between items-center md:pl-16 pl-4 p-4 text-gray-200">
            <div className='text-center'>
              
                <a href="#introduction" className="md:text-4xl text-3xl font-semibold text-gray-200">
                  M.A
                </a>
              
            </div>
            
            {
              showNav ? 
              <button onClick={() => {setShowNav((prev) => !prev)}} className='md:invisible'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path d="M6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.999 10.9384L16.7176 6.2198C17.0105 5.92691 17.4854 5.92691 17.7782 6.2198C18.0711 6.51269 18.0711 6.98757 17.7782 7.28046L13.0597 11.999L17.7782 16.7176C18.0711 17.0105 18.0711 17.4854 17.7782 17.7782C17.4854 18.0711 17.0105 18.0711 16.7176 17.7782L11.999 13.0597L7.28033 17.7784C6.98744 18.0713 6.51256 18.0713 6.21967 17.7784C5.92678 17.4855 5.92678 17.0106 6.21967 16.7177L10.9384 11.999L6.21967 7.28033Z" fill="#fafafa"/>
                </svg>
              </button> 
            :
              <button onClick={() => {setShowNav((prev) => !prev)}} className='md:invisible'>
                <svg width="40" height="40" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path d="M3.5625 6C3.5625 5.58579 3.89829 5.25 4.3125 5.25H20.3125C20.7267 5.25 21.0625 5.58579 21.0625 6C21.0625 6.41421 20.7267 6.75 20.3125 6.75L4.3125 6.75C3.89829 6.75 3.5625 6.41422 3.5625 6Z" fill="#fafafa"/>
                  <path d="M3.5625 18C3.5625 17.5858 3.89829 17.25 4.3125 17.25L20.3125 17.25C20.7267 17.25 21.0625 17.5858 21.0625 18C21.0625 18.4142 20.7267 18.75 20.3125 18.75L4.3125 18.75C3.89829 18.75 3.5625 18.4142 3.5625 18Z" fill="#fafafa"/>
                  <path d="M4.3125 11.25C3.89829 11.25 3.5625 11.5858 3.5625 12C3.5625 12.4142 3.89829 12.75 4.3125 12.75L20.3125 12.75C20.7267 12.75 21.0625 12.4142 21.0625 12C21.0625 11.5858 20.7267 11.25 20.3125 11.25L4.3125 11.25Z" fill="#fafafa"/>
                </svg>
              </button>   
            }
            
          </div>
          <div className={`border-bottom ${showNav ? 'h-60 opacity-100' : 'h-0 opacity-0'} overflow-hidden flex transition-all duration-150 ease-in-out sm:opacity-100 md:flex-row flex-col md:h-auto md:flex items-center md:justify-end gap-8 md:px-16`}>
            <div className="border-b-2 border-b-transparent transition ease-in-out hover:border-b-khaki">
              <a href="#aboutMe" className="h-100 text-lg font-semibold text-gray-200">
                About Me
              </a>
            </div>
            <div className="border-b-2 border-b-transparent transition ease-in-out hover:border-b-khaki">
              <a href="#workExp" className="h-100 text-lg font-semibold text-gray-200">
                Work Experience
              </a>
            </div>
            <div className="border-b-2 border-b-transparent transition ease-in-out hover:border-b-khaki">
              <a href="#projects" className="text-lg font-semibold text-gray-200">
                Projects
              </a>
            </div>
            <div className='sm:w-auto w-full'>
              <button onClick={() => window.open('/Michael Acedera.pdf')} className='sm:w-auto w-full bg-khaki font-semibold p-2 text-gray-800 transition ease-in-out hover:bg-khakiHover'>View CV</button>
            </div>
          </div>
        </div>
      </header>
      <div className=''>
        <div id="introduction" className="grid h-screen bg-blueCustom">
          <div className="grid gap-6 px-8 md:px-16 py-24 text-5xl text-gray-200">
            <div className="grid gap-6">
              <div>
                <h1 className="2xl:text-[180px] md:text-[120px] text-[70px] text-gray-100">Michael Acedera</h1>
              </div>
              <div>
                <h1 className="2xl:text-[180px] md:text-[120px] text-[70px] text-gray-100">full-stack web developer</h1>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <a target="_blank" href='https://github.com/anovanova'>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                  className='fill-khaki transition ease-in-out hover:fill-khakiHover'
                >
                  <path
                    d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z"
                  />
                </svg>
              </a>

              <a target="_blank" href='https://www.linkedin.com/in/michael-acedera-74544a199/'>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                  className='fill-khaki transition ease-in-out hover:fill-khakiHover'
                >
                  <path
                    d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
                  />
                </svg>
              </a>

              <a target="_blank" href='mailto:acederamichael07@gmail.com'>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)" className='fill-khaki transition ease-in-out hover:fill-khakiHover'>
                  <path d="M3.73592 4.5C2.77726 4.5 2.00014 5.27724 2.00031 6.2359L2.00031 6.26829C2.01064 6.81904 2.28199 7.33272 2.732 7.65165L2.74287 7.65929L10.7131 13.2171C11.3897 13.689 12.2609 13.7479 12.9861 13.3941C13.0897 13.3435 13.1904 13.2845 13.287 13.2171L21.2569 7.65949C21.7225 7.33485 21.9999 6.8031 21.9998 6.23554C21.9997 5.27702 21.2229 4.5 20.2644 4.5H3.73592Z"/>
                  <path d="M22.0001 8.96994L14.145 14.4475C12.8562 15.3462 11.1438 15.3462 9.85507 14.4475L2.00023 8.97012L2 17.25C2 18.4926 3.00736 19.5 4.25 19.5H19.75C20.9926 19.5 22 18.4926 22 17.25L22.0001 8.96994Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="aboutMe" className="grid lg:h-screen sm:h-auto sm:w-full bg-blueCustom">
          <div className="grid gap-6 px-8 sm:px-16 py-24 text-5xl text-gray-200">
            <div>
              <div className='flex'>
                <h1 className="text-[60px] 2xl:text-[130px] md:text-[100px] border-b-4 border-b-khaki text-gray-100">About Me</h1>
              </div>
              <div className='m-5 my-16'>
                <p className='text-[30px] 2xl:text-6xl md:text-5xl indent-10 leading-[1.2]'>
                  I&apos;m a full-stack web developer, with over <span className='text-khaki font-semibold'>2 years of work experience,</span> I&apos;ve added features, and maintain web apps that uses the following: <span className='text-khaki font-semibold'>React, Vue, 
                  Typescript, JQuery, PHP, Laravel, and Node,</span> also I have experience on the following databases: <span className='text-khaki font-semibold'>MySQL, and PostgreSQL,</span> also I have experience on <span className='text-khaki font-semibold'>GraphQL,
                  and Prisma.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="workExp" className="grid lg:h-screen sm:h-auto bg-blueCustom">
          <div className="grid gap-6 px-8 sm:px-16 py-24 text-5xl text-gray-200">
            <div>
              <div className='flex'>
                <h1 className="text-[60px] 2xl:text-[130px] md:text-[100px] border-b-4 border-b-khaki text-gray-100">Work Experience</h1>
              </div>
              <div className='m-5 my-16'>
                <div className='grid grid-cols-1 gap-16 md:gap-4 md:grid-cols-2'>
                  <div>
                    <h2 className='text-[50px] 2xl:text-7xl md:text-6xl'><span className='text-khaki font-semibold px-2'>Placer8</span></h2>
                    <div className='p-2'>
                      <ul className='text-[30px] 2xl:text-5xl md:text-4xl list-disc flex flex-col gap-4'>
                        <li>Building full-stack websites for Clients using HTML, CSS, JavaScript, and PHP</li>
                        <li>Creating, and Managing MySQL Databases</li>
                        <li>Deploying Websites on the Web</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h2 className='text-[50px] 2xl:text-7xl md:text-6xl'><span className='text-khaki font-semibold px-2'>Fasttrack Solutions Inc.</span></h2>
                    <div className='p-2'>
                      <ul className='text-[30px] 2xl:text-5xl md:text-4xl list-disc flex flex-col gap-4'>
                        <li>Supported Web Apps using the following Tech Stack Laravel, VueJS</li>
                        <li>Creating Web Apps using the following Tech Stack, ReactJS, Fastify, PostgreSQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="grid lg:h-screen sm:h-auto bg-blueCustom">
          <div className="grid gap-6 px-8 sm:px-16 py-24 text-5xl text-gray-200">
            <div>
              <div className='flex'>
                <h1 className="text-[60px] 2xl:text-[130px] md:text-[100px] border-b-4 border-b-khaki text-gray-100">Projects</h1>
              </div>
              <div className='m-5 my-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                  <div>
                    <div className='relative'>
                      <a target="_blank" href='https://github.com/anovanova/project-task-tracker'>
                        <img src="Subheading.png" alt="" />
                        <div className='absolute top-0 h-full w-full transition ease-in-out bg-black/70 opacity-0 hover:opacity-100 grid place-content-center'>
                          
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="rotate(0 0 0)"
                              className='fill-khaki transition ease-in-out hover:fill-khakiHover'
                            >
                              <path
                                d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z"
                              />
                            </svg>
                        
                        </div>  
                      </a>
                      
                    </div>
                    <h5 className='my-4'>Project Task Tracker</h5>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
