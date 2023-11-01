import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion'

import logo from 'public/logo.png'
import Navbar from './Navbar'
import { IMenuData } from '../interface'
import { useRouter } from 'next/router'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const Header = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState<string[]>([])

  const router = useRouter()
  const currentRoute = router.pathname

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: -900 },
  }

  const subMenuVariants = {
    open: {
      height: 'fit-content',
    },
    closed: { height: 0 },
  }
  const handleClicked = (index: string) => {
    visible.includes(index)
      ? setVisible((prev) => prev.filter((item) => item !== index))
      : setVisible((prev) => [...prev, index])
    // setVisible((pre)=>!pre ? index : "")
  }
  return (
    <header
      className={`w-full sm:max-w-[600px] md:max-w-[900px] xl:max-w-full mx-auto px-4 sm:px-6 ${poppins.className}`}
    >
      <div className="flex justify-between items-center py-2">
        <div className="w-2/3 md:w-1/3">
          <Link href={'/'} className="flex items-center w-8 h-8 gap-2">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="axie-tech-logo"
              className="max-w-xs"
            />
          </Link>
        </div>
        {/* //*Hamburger menu starts */}
        <div
          className="flex justify-end items-center md:hidden w-1/3 md:w-2/3"
          onClick={() => {
            setActive(!active)
          }}
        >
          {active ? (
            <i className="fa-solid fa-xmark text-2xl absolute z-50 active:bg-[rgba(26, 211, 176, 0.08)] active:rounded-full active:scale-105 w-10 h-10 text-center text-greypale "></i>
          ) : (
            <i className="fa-solid fa-bars text-greypale text-2xl absolute z-50"></i>
          )}
        </div>
        {/* //*SideNav Starts */}
        {
          <motion.nav
            className="w-screen min-h-screen overflow-y-auto inset-0 absolute z-20 top-0 left-0  px-16 bg-white lg:hidden"
            variants={sidebarVariants}
            initial="closed"
            animate={active ? 'open' : 'closed'}
            exit="closed"
            transition={{ duration: 0.4 }}
          >
            <div className="mb-12 w-full">
              <Link href={'/'} className="flex items-center w-8 h-8 gap-2 pt-5">
                <Image
                  src={logo}
                  width={150}
                  height={150}
                  alt="axie-tech-logo"
                  className="max-w-xs"
                />
              </Link>
            </div>
            <ul className="text-start text-sm">
              {t<string, IMenuData[]>('common:menu_data_sidenave', {
                returnObjects: true,
              }).map((item, index) => {
                return (
                  <li
                    className="border-b border-greylight py-6 pl-4"
                    key={item.title}
                  >
                    {item.subMenu ? (
                      <span
                        className="w-10 h-12 px-2 mx-2 rounded text-grey font-semibold cursor-pointer"
                        onClick={() => handleClicked(item.link)}
                      >
                        {item.title}
                      </span>
                    ) : (
                      <Link
                        className={`${item.link ===currentRoute ? "text-pink" : "text-grey"} font-semibold p-2 mx-2 rounded inline-flex items-center hover:text-pink`}
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    )}

                    {item?.subMenu && (
                      <ul
                        className={`text-grey pt-1 rounded-lg ${
                          visible.includes(item.link) ? 'block' : 'hidden'
                        }`}
                        // variants={subMenuVariants}
                        // initial="closed"
                        // animate= {item?.subMenu ? 'open' : 'closed'}
                        // exit="closed"
                        // transition={{ duration: 0.6 }}
                      >
                        {item.subMenu.map((item) => (
                          <Link
                            href={item.link}
                            className={`${item.link ===currentRoute ? "text-pink" : "text-grey"} h-14 flex items-center py-2 px-2 ms-7  hover:text-pink hover:outline-none font-semibold`}
                            key={item.link}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        }
        {/* SideNav Ends */}
        <div className="hidden md:block">
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
