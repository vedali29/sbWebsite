import React from 'react'
import Navbar from './Navbar'
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa'
import Footer from './Footer'
import Tales from '../assets/our_story_sdg.jpg'


const Contact = () => {
  return (
    <>

      <Navbar />

      <div className="text-center m-6">
        <span className="font-bold md:text-5xl text-2xl">
          Liked What we do? Join us Today
        </span>
        <br />
        <span className="md:text-3xl text-xxl">
          Let's create a meaningful impact together!
        </span>
      </div>
      <br />
      <div className="flex flex-col justify-center md:mx-36 md:flex-row md:mb-16 mb-4">
        <div className="m-2 flex flex-col bg-[#034d8a] text-white basis-1/3 py-16 p-2 rounded-lg duration-200">
          <div className="mb-6">
            <strong className="md:text-3xl text-2xl md:mx-4">
              Partner with us
            </strong>
          </div>
          <div className="my-1 md:text-2xl md:mx-8 mx-2">
            <span>- Share resources and expertise</span>
          </div>
          <div className="my-1 md:text-2xl md:mx-8 mx-2">
            <span>
              - Collaborate for strategic synergies

            </span>
          </div>
          <div className="my-1 md:text-2xl md:mx-8 mx-2">
            <span>
              - Network and strengthen your brand{" "}
            </span>
          </div>
        </div>


        <div className="bg-[#FCF6F5FF] m-2 py-16 flex flex-col basis-1/3 p-2 rounded-lg duration-200">
          <div>
            <strong className="md:text-3xl text-3xl md:mx-4">
              Invite us
            </strong>
          </div>
          <br />
          <div className="my-1 md:text-2xl flex items-center md:mx-8">
            {/* <FaPhone className="mr-2" /> */}
            <span>- Conduct session in your academic institution</span>
          </div>
          <div className="my-1 md:text-2xl flex items-center md:mx-8">
            {/* <FaEnvelope className="mr-2" /> */}
            <span>- Get access to various learning resources
            </span>
          </div>
          <div className="my-1 md:text-2xl flex items-center md:mx-8">
            {/* <FaInstagram className="mr-2" /> */}
            <span>- Motivate your students to create out of the box
            </span>
          </div>
        </div>

        <div className="m-2 bg-[#034d8a] text-white flex flex-col basis-1/3 py-16 p-2 rounded-lg duration-200">
          <div className="mb-6">
            <strong className="md:text-3xl text-2xl md:mx-4 ">
              Join the team
            </strong>
          </div>
          <div className="my-1 md:text-2xl md:mx-8 mx-2">
            <span>- Get involved as a volunteer or trainer </span>
          </div>
          <div className="my-1 md:text-2xl md:mx-8 mx-2">
            <span>
              - Guaranteed certificates, swags and discounts

            </span>
          </div>
          <div className="my-1 md:text-2xl md:mx-8 mx-2">
            <span>
              - Gain skill development and professional growth{" "}
            </span>
          </div>
        </div>
      </div>

      <hr className="md:mx-24 md:m-4 mx-4" />

      {/* next section */}

      <div className="flex flex-col md:flex-row justify-center ">
        <div className="m-2 md:mx-24 flex pt-4 p-2 rounded-lg duration-200">
          <img src={Tales} alt="Slide 1" className="mx-auto rounded-lg" />
        </div>
        <div className="m-2 pt-4 p-2 rounded-lg duration-200 hover:bg-slate-100">
          <div>
            <strong className="md:text-2xl text-xl md:mx-4">Reach out to us:</strong>
          </div>
          <br />
          <div className="my-1 md:text-xl flex items-center md:mx-8">
            <FaPhone className="mr-2" />
            <span><a href="tel:+91-6283412360">+91-6283412360</a></span>
          </div>
          <div className="my-1 md:text-xl flex items-center md:mx-8">
            <FaEnvelope className="mr-2" />
            <span><a href="mailto:sustainablebhava@gmail.com">sustainablebhava@gmail.com</a></span>
          </div>
          <div className="my-1 md:text-xl flex items-center md:mx-8">
            <FaInstagram className="mr-2" />
            <span><a href="https://www.instagram.com/sustainablebhava">@sustainablebhava</a></span>
          </div>
        </div>
      </div>

      {/* contact section ends here */}


      <Footer />
    </>
  )
}

export default Contact