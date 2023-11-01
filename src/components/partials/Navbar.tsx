import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'

import { IMenuData } from '../interface'
import { useRouter } from 'next/router'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const Navbar = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <nav>
      <ul
        className={`flex justify-center text-grey text-sm ${poppins.className}`}
      >
        {t<string, IMenuData[]>('common:menu_data', {
          returnObjects: true,
        }).map((item, index) => {
          return (
            <li key={item.title} className="group">
              {(!item.link.includes('id1') && !item.link.includes('id2')) ? (
                <Link
                  className={`${item.link ===currentRoute ? "text-pink" : "text-grey"} font-semibold text-[15px] leading-[50px] whitespace-nowrap px-4 rounded inline-flex items-center hover:text-pink `}
                  href={item.link}
                >
                  {item.title}
                </Link>
              ) : (
                <p className= "font-semibold text-[15px] leading-[50px] whitespace-nowrap px-4 rounded inline-flex items-center hover:text-pink">
                  {item.title}
                </p>
              )}
              {item?.subMenu && index === 2 && (
                <ul className="hidden w-60 h-52 text-grey  absolute z-50 bg-white rounded-lg shadow-submenu triangle group-hover:grid grid-cols-2 justify-items-center whitespace-nowrap p-6">
                  {item?.subMenu.map((submenuGroup, index) => (
                    <div key={index} className="col-span-1 h-fit">
                      {Array.isArray(submenuGroup) &&
                        submenuGroup?.map((menuItem) => (
                          <Link
                            href={menuItem.link}
                            className={`${menuItem.link ===currentRoute ? "text-pink" : "text-grey"} h-10 py-2 block hover:text-pink hover:outline-none text-sm font-semibold mx-auto`}
                            key={menuItem.link}
                          >
                            {menuItem.title}
                          </Link>
                        ))}
                    </div>
                  ))}
                </ul>
              )}
              {item?.subMenu && index !== 2 && (
                <ul className="hidden  p-3 absolute z-50 bg-white rounded-lg shadow-submenu triangle group-hover:flex flex-col">
                  {item.subMenu.map((item) => (
                    <Link
                      href={item.link}
                      className={`${item.link ===currentRoute ? "text-pink" : "text-grey"} py-3 px-4  hover:text-pink hover:outline-none text-sm font-semibold flex flex-col`}
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
    </nav>
  )
}

export default Navbar
