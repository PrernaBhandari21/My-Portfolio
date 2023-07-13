import React from 'react'
import MyImage from "../assets/my-image.jpg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md" ;

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>       

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Web Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptas optio porro beatae quam temporibus eius ratione fugit necessitatibus consequuntur illum facilis similique maiores, eos, veniam illo iste in, dolore mollitia aut quis iusto!
                </p>


                <div>
                    <button>Portfolio
                        <span>
                        <MdOutlineKeyboardArrowRight />
                        </span>

                    </button>
                </div>
            </div>

    <div>
        <img src={MyImage} alt="my profile"  className='rounded-2xl mx-auto w-2/3 md:w-full'/>
    </div>

        </div>

    </div>
  )
}

export default Home