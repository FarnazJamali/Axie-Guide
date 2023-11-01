import Image from 'next/image'
import { HTMLAttributes } from 'react'

import { RotatedImage } from './RotatedImage'

import backgroundFooter from 'public/img/jpeg/background-footer.jpg'
import { TitleFontChanger } from './TitleFontChanger'
import { BoldableWrapper } from './BoldableWrapper'
import { YellowButton } from './Button'
import Link from 'next/link'

type backgroundProps = {
  imageSource?: 'puffy' | 'olek' | 'buba'
  title?: string
  text?: string
  btn_text?: string
  url?: string
} & HTMLAttributes<HTMLDivElement>
export const GreenBackground = ({
  children,
  className,
  imageSource,
  title,
  text,
  btn_text,
  url,
}: backgroundProps) => {
  return (
    <div className={"bg_light_pattern_background w-full " + ` ${className ? className : ""}` }>
      {children}
      <div className="flex flex-col items-center  p-4 relative">
        <div className="w-full pt-96 sm:pt-20 pb-24 sm:pb-20">
          <Image
            src={backgroundFooter}
            width={600}
            height={100}
            alt="background-footer"
            className="w-full object-cover object-top rounded-3xl "
          />
        </div>
        {url && (
          <div className="flex flex-col gap-10 items-center sm:flex-row -translate-y-full absolute top-1/2">
            <RotatedImage
              src={
                imageSource === 'puffy'
                  ? '/img/png/puffy-right.png'
                  : imageSource === 'olek'
                  ? '/img/png/olek-right.png'
                  : '/img/png/buba-right.png'
              }
              width={120}
              height={120}
              alt={
                imageSource === 'puffy'
                  ? 'puffy'
                  : imageSource === 'olek'
                  ? 'olek'
                  : 'buba'
              }
              className="-rotate-6"
            />
            <div className="flex flex-col gap-5 items-center sm:items-start">
              <TitleFontChanger>
                <h2 className="text-[40px] sm:w-[380px]">{title}</h2>
              </TitleFontChanger>
              <p className="text-xl font-medium  sm:w-[380px]">{text}</p>
              <Link href={url as string}>
                <BoldableWrapper>
                  <YellowButton className="flex items-center gap-2 text-lg">
                    {btn_text}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </BoldableWrapper>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
