import React from 'react'
import Author from "../assets/banner_images/author.png"
import Youtube from "../assets/footer_images/video.png"
import Facebook from "../assets/footer_images/facebook.png"
import Twitter from "../assets/footer_images/twitter.png"
import Instagram from "../assets/footer_images/social-media.png"

function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-black pt-16" id='connect-now'>
      <div className="mx-auto flex items-center px-4 sm:static sm:px-6 lg:px-8">
        <div className="relative w-full isolate overflow-hidden flex md:justify-between flex-col  lg:flex-row mx-auto max-w-7xl px-0 lg:px-8">
          <div className="mx-auto w-full lg:max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              GET IN TOUCH
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-amber-500 sm:text-5xl">
              LETS TALK AROUND
            </h2>
            <div className="mt-0 lg:mt-10 flex flex-col items-center lg:items-start justify-items-start gap-x-6">
              <a href='XXXXXXXXXXXXX@hotmail.com' className="mt-6 text-xl leading-8 text-white underline decoration-amber-500">
                MAIL: XXXXXXXXXXXXX@hotmail.com
              </a>
              <a href='tel:+91 24444444444444' className="mt-2 lg:mt-6 text-xl leading-8 text-white underline decoration-amber-500">
                CALL: +91 24444444444444
              </a>
            </div>

            <div className="mt-10  gap-x-6  hidden lg:block">
              <p className="mt-6 text-3xl leading-8 text-white font-medium">
                FOLLOW US
              </p>
              <div className='flex gap-x-3 items-center justify-content-center  mt-4'>
                <a href="">
                  <img
                    className='w-14 h-14'
                    src={Youtube}
                    alt="youtube"
                  />
                </a>
                <a href="">
                  <img
                    className='w-12 h-12'
                    src={Instagram}
                    alt="instagram"
                  />
                </a>
                <a href="">
                  <img
                    className='w-10 h-10 me-1'
                    src={Facebook}
                    alt="facebook"
                  />
                </a>
                <a href="">
                  <img
                    className='w-10 h-10'
                    src={Twitter}
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="max-w-xl lg:max-w-lg border-solid border-2 border-slate-50 p-4 h-fit">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">REACH TO <span className='text-amber-500'>US</span></h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                dolore.
              </p>
              <form action="">
                <div className="mt-6 flex max-w-lg gap-x-4">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mt-6 flex max-w-lg gap-x-4">
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mt-6 flex max-w-lg gap-x-4">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-6 flex max-w-lg gap-x-4">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    style={{ minHeight: '72px', maxHeight: '240px', resize: 'none' }}
                    className="min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10  focus:ring-amber-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="mt-6 flex max-w-lg lg:text-left text-center gap-x-4 justify-end">
                  <button
                    type="submit"
                    className="w-full lg:w-56 text-center lg:mb-0 rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="my-5 gap-x-6 flex items-center lg:hidden block">
            <p className="text-2xl leading-8 text-white font-medium">
              FOLLOW US
            </p>
            <div className='flex gap-x-2 items-center justify-content-center'>
              <a href="">
                <img
                  className='w-7 h-7'
                  src={Youtube}
                  alt="youtube"
                />
              </a>
              <a href="">
                <img
                  className='w-6 h-6'
                  src={Instagram}
                  alt="instagram"
                />
              </a>
              <a href="">
                <img
                  className='w-5 h-5 me-1'
                  src={Facebook}
                  alt="facebook"
                />
              </a>
              <a href="">
                <img
                  className='w-5 h-5'
                  src={Twitter}
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto bg-grey-cust flex justify-between items-center px-4 py-3  sm:static sm:px-6 lg:px-8 lg:py-6'>
        <p className='text-white p-1 w-3/5 lg:w-2/5'>©️ 2024 ABHISHADGURU All Rights Reserved.</p>
        <div className='mx-auto w-3/5 lg:w-3/5 flex flex-col lg:flex-row justify-end items-end lg:items-center px-0 sm:static'>
          <a href="" className='text-white p-1 lg:me-4 hover:hover:text-amber-500'>PRIVACY POLICY</a>
          <a href="" className='text-white p-1 hover:hover:text-amber-500'>TERMS AND CONDITION</a>
        </div>
      </div>
    </div>
  )
}

export default Footer