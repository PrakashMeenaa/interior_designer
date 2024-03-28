import React from 'react'

const page = () => {
  return (
    <div className="bg-primary tracking-widest leading-normal font-thin h-screen  pt-24 pb-24  sm:px-16 md:px-32 ">
      <h1 className="uppercase text-5xl font-normal mb-8">
        Contact <span className="text-third">Us</span>
      </h1>
      <div className='bg-[url(/images/contactbg.jpg)] bg-cover bg-center h-full w-full bg-primary bg-blend-overlay bg-opacity-85 flex justify-between items-center'>
        <div className='p-4'>
        <ul className="mb-6 md:mb-0 flex flex-col gap-12">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address
                                </h3>
                                <p className="text-gray-600 uppercase">1230 kata choraha</p>
                                <p className="text-gray-600 uppercase">Jhotwara, Jaipur,Rajasthan</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Contact
                                </h3>
                                <p className="text-gray-600 ">Mobile: +91 8385024024</p>
                                <p className="text-gray-600 ">Mail: sonu@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Working
                                    hours</h3>
                                <p className="text-gray-600 ">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 ">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
        </div>
        <div className='lg:w-1/2'> 
          <form action="#" className=" gap-12 grid grid-cols-2 p-4">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-third brightness-200">Your email</label>
              <input type="email" id="email" className=" border border-third p-3 w-full outline-primary text-sm text-third  shadow-sm " placeholder="name@.com" required style={{background:'transparent'}}/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-third brightness-200">Subject</label>
              <input type="text" id="subject" className="block border border-third p-3 w-full outline-primary text-sm text-third  shadow-sm" placeholder="Let us know how we can help you" required style={{background:'transparent'}}/>
          </div>
          <div className="col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-third brightness-200 ">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full  outline-primary text-sm text-third shadow-sm border border-third focus:ring-primary focus:border-primary " placeholder="Leave a comment..." style={{background:'transparent'}}></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-fourth sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary ">Send message</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default page
