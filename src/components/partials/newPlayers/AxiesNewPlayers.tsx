import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import {
  BlackBadge,
  BoldableWrapper,
  IntroBanner,
  LinkComponent,
  TextBox,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'

import welcome from 'public/img/jpeg/welcome.jpg'
import axies from 'public/img/png/axies.png'
import aquaticAxie from 'public/img/png/aquatic-axie.png'
import plantAxie from 'public/img/png/plant-axie.png'
import cards from 'public/img/png/cards.png'
import runes from 'public/img/png/runes.png'
import charms from 'public/img/png/charms.png'
import starterAxies from 'public/img/png/starter-axies.png'
import marketPlace from 'public/img/jpeg/marketplace.jpg'
import aboutAxies from 'public/img/png/about-axies.png'
import teamBuilds from 'public/img/png/team-builds.png'

export const AxiesNewPlayers = () => {
  const { t } = useTranslation()
  return (
    <section
      className="flex flex-col gap-4"
      id="axies"
    >
      <div className="mx-4 ">
        <IntroBanner
          src={welcome}
          width={900}
          height={160}
          alt="welcome"
         className='h-40 sm:h-48 lg:h-[300px]'
        />
        <div className="relative flex justify-center">
          <Image
            src={axies}
            width={200}
            height={200}
            alt="axies"
            className="aboslute -translate-y-1/2 max-w-[240px] w-[90%]"
          />
        </div>
      </div>

      <div className="flex flex-col px-4 gap-8 max-w-[800px] mx-auto">
        <p className="font-normal text-xl">
          {t('newplayers:axie_description_3')}
        </p>

        <div className="flex w-full items-center">
          <div className="hidden lg:w-1/6 lg:block relative top-6 left-6">
            <Image src={plantAxie} width={170} height={100} alt="plantAxie" />
          </div>
          <TextBox className="bg-pink text-white w-4/5 lg:w-2/3">
            {t('newplayers:axie_description_4')}
          </TextBox>
          <div className="w-1/5 lg:w-1/6 relative top-6 right-5 flex flex-col items-center">
            <Image
              src={aquaticAxie}
              width={180}
              height={100}
              alt="aquaticAxie"
            />
            <BlackBadge>{t('common:axies')}</BlackBadge>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <Image
              src={cards}
              width={450}
              height={100}
              alt="cards"
              className="w-full"
            />
            <BlackBadge>{t('common:cards')}</BlackBadge>
          </div>
          <div className=" sm:w-1/2">
            <TextBox className="bg-pink text-white">
              {t('newplayers:axie_description_5')}
            </TextBox>
          </div>
        </div>

        <div className="flex flex-col lg:items-center lg:mb-16">
          <TextBox className="bg-pink text-white lg:w-1/2">
            {t('newplayers:axie_description_6')}
          </TextBox>
          <div className="flex lg:flex-col justify-between gap-3 relative lg:w-1/2">
            <div className="flex flex-col items-center lg:absolute lg:-translate-y-40 lg:-right-60 ">
              <Image
                src={runes}
                width={300}
                height={100}
                alt="runes"
                className="w-full lg:scale-75"
              />
              <BlackBadge>{t('common:runes')}</BlackBadge>
            </div>
            <div className="flex flex-col items-center lg:absolute lg:-left-60 lg:-translate-y-10">
              <Image
                src={charms}
                width={300}
                height={100}
                alt="charms"
                className="w-full lg:scale-75"
              />
              <BlackBadge>{t('common:charms')}</BlackBadge>
            </div>
          </div>
        </div>

        <p className="max-w-[768px] font-normal text-xl">
          <span>{t('newplayers:axie_description_7')}</span>
          <LinkComponent href="/starter-axies">
            {t('common:starter_link')}
          </LinkComponent>
          <span>{t('common:and')}</span>
          <LinkComponent href="/personal-axies">
            {t('common:personal_link')}
          </LinkComponent>
          <span>{t('newplayers:axie_description_8')}</span>
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center sm:flex-row xl:flex-row-reverse gap-8 sm:gap-14">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={starterAxies}
                width={250}
                height={200}
                alt="starterAxies"
                className="max-w-[210px]"
              />
              <BlackBadge>{t('newplayers:characters')}</BlackBadge>
            </div>
            <div className="flex flex-col gap-3">
              <TitleFontChanger>
                <h3>{t('common:starter_link')}</h3>
              </TitleFontChanger>
              <p>{t('newplayers:starter_description')}</p>
              <BoldableWrapper>
                <Link href="/starter-axies">
                  <YellowButton className="flex items-center gap-2">
                    {t('newplayers:btn_learn')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </Link>
              </BoldableWrapper>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row-reverse xl:flex-row gap-8 sm:gap-14">
            <div className="w-full flex flex-col items-center  gap-4">
              <Link href="https://marketplace.axieinfinity.com/axie">
                <Image
                  src={marketPlace}
                  width={250}
                  height={200}
                  alt="marketPlace"
                  className="w-full max-w-[350px] rounded-lg"
                />
              </Link>
              <BlackBadge>{t('newplayers:characters')}</BlackBadge>
            </div>
            <div className="flex flex-col  gap-4">
              <TitleFontChanger>
                <h3>{t('common:personal_link')}</h3>
              </TitleFontChanger>
              <p>{t('newplayers:personal_description')}</p>
              <BoldableWrapper>
                <Link href="/personal-axies">
                  <YellowButton className="flex items-center gap-2">
                    {t('newplayers:btn_learn')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </Link>
              </BoldableWrapper>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-5 justify-center items-center">
        <BoldableWrapper>
          <Link href="/what-are-axies">
            <Image src={aboutAxies} width={300} height={100} alt="aboutAxies" />
          </Link>
        </BoldableWrapper>
        <BoldableWrapper>
          <Link href="/guides/builds">
            <Image src={teamBuilds} width={300} height={100} alt="teamBuilds" />
          </Link>
        </BoldableWrapper>
      </div>
    </section>
  )
}
