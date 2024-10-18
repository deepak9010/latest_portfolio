import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin  } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section id="hero" className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Daniel Shan Balico Graduation Picture"
          />

          {/* =========== TOOLTIP TEXT =========== */}
          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h2 className="text-xl">{user_info.main.role2}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Projects
              </a>
              <a
                href={user_info.main.resume} target="_blank"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Resume
              </a>
              
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
             <div className="flex mt-8 gap-6">
                 <a href={user_info.socials.linkedin} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaLinkedin className="inline-block text-4xl" /></a>
                 <a href={user_info.socials.twitter} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaXTwitter className="inline-block text-4xl" /></a>
                 <a href={user_info.socials.github} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaGithub className="inline-block text-4xl" /></a>
                 <a href={user_info.socials.leetcode} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><SiLeetcode className="inline-block text-4xl" /></a>
                 <a href={`mailto:${user_info.main.email}`} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><MdEmail className="inline-block text-4xl" /></a>                     
              </div> 
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Deepak Singh Graduation Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;