import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'

import logo from 'public/logo.png'
import { IFooterData } from '../interface'
import { BoldableWrapper, TitleFontChanger, YellowButton } from '../core'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer
      className={`px-4 pt-16 pb-12 sm:px-6 md:pb-24 mt-16 xl:mx-auto xl:max-w-[1200px] border-t-[#f6efe5] border-t-2  ${poppins.className}`}
    >
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col md:flex-row w-full gap-3 ">
          <div className="w-full md:w-1/3">
            <Link href={'/'} className="flex items-center w-12 h-12 gap-2 mb-7">
              <Image
                src={logo}
                width={300}
                height={300}
                alt="axie-tech-logo"
                className="max-w-xs"
              />
            </Link>
            <BoldableWrapper>
              <YellowButton className="block my-5">
                <Link className="" href={'/guides'}>
                  {t('common:guide_page')}
                </Link>
                <i className="fa-solid fa-play ms-2"></i>
              </YellowButton>
            </BoldableWrapper>
            <BoldableWrapper>
              <YellowButton className="block my-5">
                <Link href={'https://discord.com/invite/NUJatfbB8g'}>
                  {t('common:join_page')}
                </Link>
                <i className="fa-solid fa-graduation-cap ms-2"></i>
              </YellowButton>
            </BoldableWrapper>
          </div>
          {t<string, IFooterData[]>('common:footer_data', {
            returnObjects: true,
          }).map((item, index) => {
            return (
              <div className="w-full md:w-1/5" key={index}>
                <TitleFontChanger>
                  <h4 className="text-grey">{item.title}</h4>
                </TitleFontChanger>
                <ul>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-3">
                      <Link
                        href={subItem.link}
                        className="text-[#8e8d8d] font-medium hover:text-pink hover:underline"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="flex gap-4 items-center font-normal text-xs text-greypale">
          <span className='font-semibold'>{t('common:footer_note')}</span>
          <Link href={'/terms-and-conditions'}>{t('common:terms')}</Link>
          <Link href={'/privacy-policy'}>{t('common:privacy_policy')}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
