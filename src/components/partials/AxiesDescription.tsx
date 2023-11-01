import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import {
  BlueButton,
  BoldableWrapper,
  RotatedImage,
  TitleFontChanger,
  YellowButton,
  TextBox,
} from '../core'

import { LinkComponent } from '../core/LinkComponent'
import { CardsnPowerUps } from './CardsnPowerUps'
import { JoinCommunity } from './JoinCommunity'

import char1 from 'public/img/png/puffy-right.png'
import char2 from 'public/img/png/olek.png'
import char3 from 'public/img/png/team.png'

interface IAxiesData {
  title: string
  description: string
  button: string
}

export const AxiesDescription = () => {
  const { t } = useTranslation()

  return (
    <section className="w-full -mt-5">
      <div className="bg_decorative_pattern -mb-4 "></div>
      <div className="w-full sm:mx-auto px-4 sm:px-6 block">
        <div className="pt-16 gap-20 sm:pt-20 sm:pb-4 sm:gap-24 flex flex-col items-center justify-center lg:gap-48 lg:pt-20 lg:pb-32 relative">
          <div className="pt-32 sm:pt-16 flex flex-col gap-12 items-center">
            <div className="sm:mx-9 lg:mx-44 xl:mx-80">
              <TitleFontChanger>
                <h2 className="text-center">{t('home:axies_title')}</h2>
              </TitleFontChanger>
              <p className="font-normal text-xl text-center">
                {t('home:axies_description')}
                <LinkComponent href={'/starter-axies'}>
                  {t('home:starter_axies')}
                </LinkComponent>
                {t('home:and_and')}
                <LinkComponent href={'/personal-axies'}>
                  {t('home:personal_axies')}
                </LinkComponent>
              </p>
            </div>
            <div className=" flex flex-col xl:flex-row mb-20 gap-12 ">
              {t<string, IAxiesData[]>('home:axies_data', {
                returnObjects: true,
              })?.map((item, index) => {
                return (
                  <TextBox
                    key={index}
                    className="flex flex-col items-start gap-4 bg-white p-6 sm:px-14 sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[560px] relative"
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
                      <div className="flex flex-col justify-center items-center absolute -right-3 lg:-right-10 -bottom-16 max-sm:top-full">
                        <Image
                          src={char3}
                          width={340}
                          height={145}
                          alt="axie team"
                        />
                        <BoldableWrapper className="absolute -bottom-8 right-20">
                          <BlueButton>
                            {t('common:visit_marketplace')}
                          </BlueButton>
                        </BoldableWrapper>
                      </div>
                    )}

                    <YellowButton className="hover:scale-105 cursor-pointer hover:transform hover:origin-center hover:ease-linear hover:duration-200 flex gap-3">
                      {item.button}
                      <i className="fa-solid fa-play"></i>
                    </YellowButton>
                  </TextBox>
                )
              })}
            </div>
          </div>
          <CardsnPowerUps />
          <JoinCommunity />
        </div>
      </div>
    </section>
  )
}
