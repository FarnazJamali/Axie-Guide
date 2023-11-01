import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

import {
  Alert,
  BoldableWrapper,
  RedPill,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'

import oponnent from 'public/img/jpeg/looking-for-opponent.jpg'
import practice from 'public/img/png/practice.png'
import battlelog from 'public/img/jpeg/battle-log.jpg'

type arena_mode_data = {
  src: string
  title: string
  text: string
  href: string
}

type battle_data = {
  text: string
  bg_color?: string
}
export const ArenaIntro = () => {
  const { t } = useTranslation()

  return (
    <section className="pt-16">
      <div className="flex flex-col gap-28   mx-auto">
        {/* //* Arena mode description */}
        <div className="flex flex-col gap-8 lg:flex-row lg:w-[1150px] px-4 mx-auto">
          <div className="flex flex-col gap-8 lg:w-[60%]">
            <TitleFontChanger>
              <h2>{t('arena:arena_title')}</h2>
            </TitleFontChanger>

            <p className="text-xl">{t('arena:arena_txt')}</p>
            <p className="text-xl">{t('arena:arena_txt')}</p>
            <Link href="#arena-modes">
              <BoldableWrapper>
                <YellowButton className="flex gap-2 font-bold text-lg">
                  {t('arena:arena_btn')}
                  <i className="fa-solid fa-play"></i>
                </YellowButton>
              </BoldableWrapper>
            </Link>
          </div>
          <div className="lg:w-[40%]">
            <Image
              src={oponnent}
              width={500}
              height={370}
              alt="oponnent"
              className="w-full md:w-[600px] mx-auto"
            />
            <Alert className="w-full  xl:w-full mt-10">
              <p>{t('arena:alert_txt1')}</p>
              <p>{t('arena:alert_txt2')}</p>
            </Alert>
          </div>
        </div>
        {/* //* 3 different arenas */}
        <div className="bg-[#39241a] py-16">
          <div className="bg_decorative_pattern2"></div>

          <div className="flex flex-col items-center gap-8 px-4 -mt-32">
            <div className="flex flex-col gap-16 items-center">
              <TitleFontChanger>
                <h2 className="text-white">{t('arena:arena_title')}</h2>
              </TitleFontChanger>
              <div className="flex flex-wrap gap-5 justify-center">
                {t<string, arena_mode_data[]>('arena:arena_mode_data', {
                  returnObjects: true,
                }).map((item, index) => (
                  <div
                    key={index}
                    className="text-center mx-auto w-52 sm:w-[calc(50%-20px)] lg:w-[calc(33%-20px)] gap-4"
                  >
                    <div>
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={200}
                        height={100}
                        className='mx-auto'
                      />
                    </div>
                    <TitleFontChanger className='my-5'>
                      <h3 className="text-white">{item.title}</h3>
                    </TitleFontChanger>
                    <p className="text-[#fae6c7] text-center mb-5">{item.text}</p>
                    <Link
                      href={item.href}
                      className="uppercase text-pink bg-introText/20 rounded-lg hover:bg-introTitle/30 p-1 text-sm font-semibold"
                    >
                      {t('common:learn_more')}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* //* Practice mode */}
        <div
          id="practice-mode"
          className="flex flex-col gap-8 md:flex-row px-4 lg:w-[1150px] mx-auto"
        >
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="flex items-center gap-5">
              <Image src={practice} width={100} height={100} alt="practice" />
              <TitleFontChanger>
                <h2>{t('arena:practice_title')}</h2>
              </TitleFontChanger>
              <RedPill>
                <span className="font-bold text-white">{t('arena:new')}</span>
              </RedPill>
            </div>
            <p className="text-xl">{t('arena:practice_txt1')}</p>
            <p className="text-xl">{t('arena:practice_txt2')}</p>

            <TitleFontChanger>
              <h3>{t('arena:battle_title')}</h3>
            </TitleFontChanger>
            <div className="flex flex-col gap-4">
              {t<string, battle_data[]>('arena:battle_data', {
                returnObjects: true,
              }).map((item) => (
                <div
                  key={item.text}
                  className={`rounded-2xl bg-[${
                    item.bg_color && item.bg_color
                  }]`}
                >
                  <div className="flex items-center p-3 gap-3">
                    <i className="fa-solid fa-play text-pink"></i>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <TitleFontChanger>
              <h3>{t('arena:battle_log_title')}</h3>
            </TitleFontChanger>
            <p className="text-xl">{t('arena:battle_log_txt')}</p>
            <div>
              <Image
                src={battlelog}
                width={800}
                height={100}
                alt="battlelog"
                className="w-full "
              />
            </div>
            <Alert>{t('arena:alert_txt3')}</Alert>
          </div>
        </div>
      </div>
    </section>
  )
}
