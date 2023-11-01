import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useEffect, useState, useCallback } from 'react'
import { LinkComponent } from '../core/LinkComponent'
import { BoldableWrapper, Card, TitleFontChanger, YellowButton } from '../core'

import card from 'public/img/png/card-icon.png'
import rune from 'public/img/png/rune-icon.png'
import charm from 'public/img/png/charm-icon.png'
import { charmsReduced, runesReduced } from '../../../mock'
import { BattleModes } from './BattleModes'
import { ICard } from '../interface'

export const CardsnPowerUps = () => {
  const { t } = useTranslation()
  const [windowWidth, setWindowWidth] = useState( 0)
  const [slicedArray, setSlicedArray] = useState<ICard[]>(
    t<string, ICard[]>('home:cards_reduced', {
      returnObjects: true,
    }),
  )

  const handleWindowResize = useCallback((event: any) => {
    const newWindowWidth = window.innerWidth
    if (newWindowWidth < 1200) {
      const slicedArray = t<string, ICard[]>('home:cards_reduced', {
        returnObjects: true,
      }).slice(0, 6)
      setSlicedArray(slicedArray)
    } else setSlicedArray(t<string, ICard[]>('home:cards_reduced', {
      returnObjects: true,
    }))
    
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    console.log(windowWidth, window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  console.log(slicedArray[5].card_text.includes("strong"))
  return (
    <div className="flex flex-col justify-center items-center w-full gap-12">
      <div className="flex flex-col gap-2 items-center">
        <TitleFontChanger>
          <h2>{t('home:cards_title')}</h2>
        </TitleFontChanger>
        <p className="font-normal leading-7 text-lg text-center">
          {t('home:cards_description_one')}
          <LinkComponent href={'/cards'}>
            {t('home:cards_link_one')}
          </LinkComponent>
          <span>{t('home:cards_description_two')}</span>
          <LinkComponent href={'/runes'}>
            {t('home:cards_link_two')}
          </LinkComponent>
          <span> {t('home:cards_description_three')}</span>
          <LinkComponent href={'/charms'}>
            {t('home:cards_link_three')}
          </LinkComponent>
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-6 w-full sm:w-[550px] lg:w-[850px] xl:w-[1200px]">
        <div className="col-span-2 row-span-4 bg-[#fff2df] shadow-cardContainer rounded-3xl p-2">
          <div className="bg-white h-full p-4 rounded-3xl flex flex-col mx-auto gap-4">
            <div className="flex gap-2">
              <Link href={'/cards'}>
                <Image src={card} width={35} height={35} alt="card" />
              </Link>
              <TitleFontChanger>
                <h3>{t('home:cards_link_one')}</h3>
              </TitleFontChanger>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between items-end gap-4">
              <p className="">{t('home:cards_text')}</p>
              <Link href={'/cards'} className="xl:w-1/3">
                <BoldableWrapper>
                  <YellowButton className="flex items-center gap-2">
                    {t('home:button_learn')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </BoldableWrapper>
              </Link>
            </div>
            {/* //*card starts */}
            <div className="flex flex-wrap justify-center items-center gap-2 xl:gap-6 mt-2">
              {/* t<string, ICard[]>('home:cards_reduced', {
                returnObjects: true,
              }) */}
              {slicedArray.map((item, index) => (
                <Card
                  key={index}
                  card_bg={item.card_bg}
                  card_bg_2={item.card_bg_2}
                  card_image={item.card_image}
                  bottom_icon={item.bottom_icon}
                  card_energy={item.card_energy}
                  card_name={item.card_name}
                  card_text={item.card_text}
                  icon={item.icon}
                  skill={item.skill}
                  heal_icon={item.card_heal ? item.heal_icon : ''}
                  card_heal={item.card_heal}
                  damage_icon={item.card_damage ? item.damage_icon : ''}
                  card_damage={item.card_damage}
                  className="xl:w-[100px] hover:scale-125 hover:z-50 hover:duration-200"
                />
              ))}
            </div>
          </div>
        </div>

        {/* //*Runes */}
        <div className="col-span-2 lg:col-span-1 row-span-2 bg-[#fff2df] shadow-cardContainer p-2 rounded-3xl flex flex-col gap-4">
          <div className="bg-white w-full h-full p-4 rounded-3xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Link href={'/runes'}>
                  <Image src={rune} width={35} height={35} alt="rune" />
                </Link>
                <TitleFontChanger>
                  <h3>{t('home:runes_title')}</h3>
                </TitleFontChanger>
              </div>
              <p className="text-base max-sm:text-[15px]">
                {t('home:runes_description')}
              </p>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              {runesReduced.map((item, index) => (
                <div
                  className="max-sm:w-[66px] sm:w-[90px] lg:w-[56px] xl:w-[70px] hover:scale-125 hover:transform hover:duration-100"
                  key={index}
                >
                  <Image
                    src={item.src}
                    width={100}
                    height={100}
                    alt="runes"
                    className="max-w-full"
                  />
                </div>
              ))}
            </div>
            <div className="self-end">
              <Link href={'/runes'}>
                <BoldableWrapper>
                  <YellowButton className="flex items-center gap-2">
                    {t('home:button_learn')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </BoldableWrapper>
              </Link>
            </div>
          </div>
        </div>

        {/* //*Charms */}
        <div className="col-span-2 lg:col-span-1 row-span-2 bg-[#fff2df] shadow-cardContainer p-2 rounded-3xl flex flex-col gap-4">
          <div className="bg-white w-full h-full p-4 rounded-3xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Link href={'/charms'}>
                  <Image src={charm} width={35} height={35} alt="rune" />
                </Link>
                <TitleFontChanger>
                  <h3>{t('home:charms_title')}</h3>
                </TitleFontChanger>
              </div>
              <p className="text-base max-sm:text-[15px]">
                {t('home:charms_description')}
              </p>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              {charmsReduced.map((item, index) => (
                <div
                  className="max-sm:w-[66px] sm:w-[90px] lg:w-[56px] xl:w-[70px] hover:scale-125 hover:transform hover:duration-100"
                  key={index}
                >
                  <Image
                    src={item.src}
                    width={100}
                    height={100}
                    alt="runes"
                    className="max-w-full"
                  />
                </div>
              ))}
            </div>
            <div className="self-end">
              <Link href={'/charms'}>
                <BoldableWrapper>
                  <YellowButton className="flex items-center gap-2">
                    {t('home:button_learn')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </BoldableWrapper>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BattleModes />
    </div>
  )
}
