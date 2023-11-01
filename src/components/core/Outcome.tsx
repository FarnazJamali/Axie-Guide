import { ComponentProps } from 'react'
import { TitleFontChanger } from './TitleFontChanger'
import Image from 'next/image'

import star from 'public/img/png/star.png'

type divProps = ComponentProps<'div'>
type OutcomeProps = {
  title: string
  number: string
} & divProps

export const Outcome = ({ title, number,className }: OutcomeProps) => {
  return (
    <div className={`w-fit bg-[#39241a] p-2 flex gap-3 justify-center sm:justify-between rounded-lg ${className}`}>
      <TitleFontChanger className="flex gap-2 text-3xl">
        <span className="text-white">{title}</span>
        <span className="text-[#ffb00f]">{number}</span>
      </TitleFontChanger>
      <Image src={star} width={35} height={35} alt="star" />
    </div>
  )
}
