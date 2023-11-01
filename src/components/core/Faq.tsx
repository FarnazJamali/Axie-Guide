import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import blue from 'public/img/jpeg/blue-banner.jpg'
import { HTMLAttributes } from 'react'
import { TitleFontChanger } from './TitleFontChanger'

const FAQ = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  const { t } = useTranslation()
  return (
    <div className={`relative flex flex-col items-center   ${className}`}>
      <div className=''>
        <Image
          src={blue}
          alt="faq"
          width={600}
          height={100}
          className="object-cover rounded-xl w-[1200px] h-24"
        />
      </div>
      <TitleFontChanger className='flex flex-col items-center'>
        <p className="text-white lg:text-4xl text-2xl absolute top-1/2 -translate-y-1/2">
          {children}
        </p>
      </TitleFontChanger>
    </div>
  )
}

export default FAQ
