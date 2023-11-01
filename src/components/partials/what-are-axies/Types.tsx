import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import {
  BlueButton,
  BoldableWrapper,
  LinkComponent,
  RotatedImage,
  TextBox,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'

import char1 from 'public/img/png/puffy-right.png'
import char2 from 'public/img/png/olek.png'
import char3 from 'public/img/png/team.png'

interface IAxiesData {
  title: string
  description: string
  button: string
}

export const Types = () => {
  const { t } = useTranslation()
  return (
    <div className="pt-32 sm:pt-16 flex flex-col gap-12 items-center">
      <div className="sm:mx-9 lg:mx-44 xl:mx-80">
        <TitleFontChanger>
          <h2 className="text-center">{t('axiesone:types_title')}</h2>
        </TitleFontChanger>
        <p className="font-normal textl-lg lg:text-xl text-center">
          {t('axiesone:axies_description')}
          <LinkComponent href={'/starter-axies'}>
            {t('common:starter_link')}
          </LinkComponent>
          {t('common:and')}
          <LinkComponent href={'/personal-axies'}>
            {t('common:personal_link')}
          </LinkComponent>
        </p>
      </div>
      <div className=" flex flex-col xl:flex-row mb-20 gap-12 ">
        {t<string, IAxiesData[]>('axiesone:axies_data', {
          returnObjects: true,
        })?.map((item, index) => {
          return (
            <TextBox
              key={index}
              className="flex flex-col gap-4 bg-white p-6 sm:px-14 sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[560px] relative"
            >
              <TitleFontChanger>
                <h3>{item.title}</h3>
              </TitleFontChanger>
              <p>{item.description}</p>
              {index % 2 === 0 && (
                <>
                  <RotatedImage
                    src={char1}
                    width={80}
                    height={80}
                    className="hidden xl:block -rotate-6 -left-10 top-3 absolute "
                    alt="Rotated1"
                  />
                  <RotatedImage
                    src={char1}
                    width={80}
                    height={80}
                    className="xl:hidden -rotate-6 right-36 -bottom-10 absolute "
                    alt="Rotated1"
                  />
                  <RotatedImage
                    src={char2}
                    width={150}
                    height={150}
                    className="rotate-6 absolute z-10 right-0 sm:-right-3 -bottom-20 "
                    alt="Rotated2"
                  />
                </>
              )}
              {index % 2 !== 0 && (
                <div className="flex flex-col justify-center items-center absolute -right-3 sm:-right-10 -bottom-16 max-sm:top-full">
                  <Image src={char3} width={340} height={145} alt="axie team" />
                  <BoldableWrapper className="absolute -bottom-8 right-20">
                    <BlueButton>{t('common:visit_marketplace')}</BlueButton>
                  </BoldableWrapper>
                </div>
              )}
              <BoldableWrapper>
                <YellowButton>{item.button}</YellowButton>
              </BoldableWrapper>
            </TextBox>
          )
        })}
      </div>
    </div>
  )
}
