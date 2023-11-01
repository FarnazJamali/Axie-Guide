import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import {
  BoldableWrapper,
  IntroductionBox,
  TextBox,
  TitleFontChanger,
} from '@/components/core'

import pattern from 'public/img/png/pattern-title.png'

type axies_types = {
  src: string
  name: string
  src2: string
}

export const Explore = () => {
  const { t } = useTranslation()
  return (
    <section id="explore" className="max-w-full mx-16 px-4 sm:px-6">
      <IntroductionBox vertical className=" ">
        <div className="flex flex-col items-center gap-16 lg:py-8 lg:px-4">
          <div className="flex flex-col items-center gap-5 max-w-[500px]">
            <div className="flex items-center gap-2 mt-5">
              <Image src={pattern} width={15} height={15} alt="pattern" />
              <TitleFontChanger>
                <h2 className="text-introTitle text-2xl sm:text-4xl">
                  {t('axiestwo:explore_title')}
                </h2>
              </TitleFontChanger>
              <Image
                src={pattern}
                width={15}
                height={15}
                alt="pattern-right"
                className="rotate-180"
              />
            </div>
            <p className="text-introText text-center">
              {t('axiestwo:explore_text')}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-stretch gap-10 ">
            {t<string, axies_types[]>('axiestwo:axies_types', {
              returnObjects: true,
            }).map((item, index) => (
              <BoldableWrapper
                key={index}
                className="flex flex-col justify-between  gap-4 relative h-[260px]"
              >
                <Image
                  src={item.src}
                  width={200}
                  height={100}
                  alt={item.name}
                />
                <TextBox className="bg-white flex flex-col items-center border border-introText !p-2">
                  <TitleFontChanger>
                    <p className='font-medium text-[28px]'>{item.name}</p>
                  </TitleFontChanger>
                </TextBox>
                <Image
                  src={item.src2}
                  width={30}
                  height={30}
                  alt={item.name}
                  className="absolute -right-5 -top-4"
                />
              </BoldableWrapper>
            ))}
          </div>
        </div>
      </IntroductionBox>
    </section>
  )
}
