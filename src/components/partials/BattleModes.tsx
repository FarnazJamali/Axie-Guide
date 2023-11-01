import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { BoldableWrapper, TitleFontChanger } from '../core'
import Link from 'next/link'

import adventure from 'public/img/jpeg/adventure.jpg'
import arena from 'public/img/jpeg/arena.jpg'
import newPlayers from 'public/img/jpeg/new-player-guide-button.jpg'
import guide from 'public/img/jpeg/gameplay-guide-button.jpg'

export const BattleModes = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center gap-12 mb-8">
      <div className="sm:w-[480px] flex flex-col items-center justify-center gap-2 p-2">
        <TitleFontChanger>
          <h2>{t('home:battle_title')}</h2>
        </TitleFontChanger>
        <p className='text-lg font-normal text-center'>{t('home:battle_description')}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-14 xl:gap-16 items-center mx-auto">
        <Link href={'/adventure'}>
          <div
            className="h-full p-2 sm:-rotate-6 hover:rotate-0 hover:transition hover:duration-200 bg-[#00907c] rounded-3xl flex flex-col
             sm:w-[560px] sm:h-[400px] lg:w-[836px] lg:h-[480px] xl:w-[528px] xl:h-[510px]"
          >
            <div className="">
              <Image
                src={adventure.src}
                alt="adventure"
                width={500}
                height={500}
                className="w-full h-[240px] sm:h-[300px] lg:h-[400px] rounded-3xl object-cover"
              />
            </div>
            <div className="w-full flex flex-col-reverse items-center sm:justify-start gap-2 sm:flex-row  sm:gap-8 text-white p-2">
              <p className="text-center text-white font-medium text-lg sm:text-right">
                {t('home:adventure_text')}
              </p>
              <TitleFontChanger>
                <h3 className="text-white text-center">
                  {t('home:adventure_title')}
                </h3>
              </TitleFontChanger>
            </div>
          </div>
        </Link>

        <Link href={'/arena'}>
          <div
            className="h-full p-2 sm:rotate-6 hover:rotate-0 hover:transition hover:duration-200 bg-[#189ecf] rounded-3xl flex flex-col 
            sm:w-[540px] sm:h-[400px] lg:w-[836px] lg:h-[480px] xl:w-[528px] xl:h-[510px]"
          >
            <div>
              <Image
                src={arena.src}
                alt="adventure"
                width={500}
                height={500}
                className="w-full h-[240px] sm:h-[300px] lg:h-[400px] rounded-3xl  object-cover"
              />
            </div>
            <div className="flex flex-col justify-end gap-2 p-1 sm:flex-row items-center sm:gap-8 text-white">
              <TitleFontChanger>
                <h3 className="text-white">{t('home:arena_title')}</h3>
              </TitleFontChanger>
              <p className="text-white text-center font-medium text-lg">
                {t('home:adventure_text')}
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-8">
        <Link href={'/new-players'}>
          <BoldableWrapper>
            <Image
              src={newPlayers}
              width={260}
              height={100}
              className="rounded-2xl"
              alt="new players"
            />
          </BoldableWrapper>
        </Link>

        <Link href={'/guides/gameplay'}>
          <BoldableWrapper>
            <Image
              src={guide}
              width={260}
              height={100}
              alt="guide"
              className="rounded-2xl"
            />
          </BoldableWrapper>
        </Link>
      </div>
    </div>
  )
}
