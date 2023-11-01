import { HTMLAttributes } from 'react'
import { Changa_One } from 'next/font/google'

const changeOne = Changa_One({ subsets: ['latin'], weight: ['400'] })
export const TitleFontChanger = ({
  children,
  className
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${changeOne.className }`+
        (className ? ` ${className}` : '')}>{children}</div>
}
