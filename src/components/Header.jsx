import { Menu } from "lucide-react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = ({toggleSidebar}) => {
    useGSAP(() => {
        gsap.fromTo('.anim-span',
          {
            x: 500,
            opacity: 0
          },
          {
             x: 0,
             opacity: 1,
             stagger: 0.2,
             duration: 1,
             ease: 'power2.easeInOut'
          }
        )
        gsap.fromTo('.anim-menu',
            {
              y: -50,
              opacity: 0
            },
            {
               y: 0,
               opacity: 1,
               stagger: 0.2,
               duration: 1,
               ease: 'power2.easeInOut'
            }
          )
          gsap.fromTo('.dropdown',
            {
              y: 0,
              opacity: 0
            },
            {
               y: 0,
               opacity: 1,
               stagger: 0.2,
               duration: 1,
               ease: 'power2.in'
            }
          )
      }) 
  return (
    <nav className="sticky w-full top-0 z-10 bg-base-100">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start space-x-1.5">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" onClick={toggleSidebar} className="inline-flex lg:hidden items-center p-2 text-sm text-base-content rounded-lg hover:bg-base-300 focus:outline-none">
                        <Menu className="anim-menu size-5 sm:size-6"/>
                    </button>
                    <a href="#" className="flex ms-2 md:me-24">
                    <span className="anim-span self-center font-medium text-sm md:text-xl sm:text-lg sm:font-semibold whitespace-normal text-base-content">Hueristic Evaluation & Web Reporting Site</span>
                    </a>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 text-xs sm:text-base px-4 sm:px-4 sm:py-2 active:scale-105 transition-transform duration-200 ease-in-out" aria-label="Theme Dropdown">
                        Theme
                        <svg
                        width="12px"
                        height="12px"
                        className="inline-block h-2 w-2 fill-current opacity-60"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-1 p-1 sm:p-2 shadow-2xl">
                        <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Default"
                            value="default" />
                        </li>
                        <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Retro"
                            value="retro" />
                        </li>
                        <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Lemonade"
                            value="lemonade" />
                        </li>
                        <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Valentine"
                            value="valentine" />
                        </li>
                        <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Abyss"
                            value="abyss" />
                        </li>
                        <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label="Forest"
                            value="forest" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header