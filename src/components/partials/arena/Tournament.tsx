import {
  Alert,
  BoldableWrapper,
  RedPill,
  TitleFontChanger,
  YellowButton,
  YellowMenu,
} from '@/components/core'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

import dragon from 'public/img/png/dragon-rank.png'
import tournament from 'public/img/png/tournament.png'
import rewards from 'public/img/jpeg/rewards.jpg'

type season_data = {
  title: string
  text: string
}

export const Tournament = () => {
  const { t } = useTranslation()
  return (
    <section
      id="tournament-mode"
      className="w-full flex flex-col gap-20 lg:gap-32"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4 mx-auto">
          <Image
            src={dragon}
            width={320}
            height={400}
            alt="dragon"
            className="w-[300px] md:w-52 lg:w-60"
          />
        </div>
        <div className="lg:w-3/4 flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <Image src={tournament} alt="tournament" width={100} height={100} />
            <TitleFontChanger>
              <h2>{t('arena:tournament_title')}</h2>
            </TitleFontChanger>
            <RedPill className="w-12 h-8">{t('arena:new')}</RedPill>
          </div>
          <p className="text-xl">{t('arena:tournament_txt1')}</p>
          <p className="text-xl">{t('arena:tournament_txt2')}</p>
          <p className="text-xl">{t('arena:tournament_txt3')}</p>
          <Link href="https://skymavis.notion.site/Grant-3-Official-Calendar-1eb79c51ffd04fc9918fb0ac197f08e0">
            
              <YellowButton className="flex gap-3 hover:scale-105 cursor-pointer hover:transform hover:origin-center hover:ease-linear hover:duration-200">
                {t('arena:tour_btn')}
                <i className="fa-solid fa-play"></i>
              </YellowButton>
         
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3 flex flex-col gap-6">
          <TitleFontChanger>
            <h2>{t('arena:season_title')}</h2>
          </TitleFontChanger>
          <p className="text-xl">{t('arena:season_txt')}</p>
          <p className="text-xl">{t('arena:season_txt2')}</p>

          <div className="flex flex-col gap-3">
            {t<string, season_data[]>('arena:season_data', {
              returnObjects: true,
            }).map((item) => (
              <YellowMenu key={item.title}>
                <span className="font-bold">{item.title}</span>
                <span>{item.text}</span>
              </YellowMenu>
            ))}
          </div>
          <p className="text-xl">{t('arena:season_txt3')}</p>
        </div>

        <div className="w-[340px] lg:w-1/3 flex flex-col gap-8 mx-auto">
          <Image
            src={rewards}
            width={340}
            height={170}
            alt="dragon"
            className="w-full mx-auto"
          />
          <Alert >{t('arena:alert_txt4')}</Alert>
        </div>
      </div>
    </section>
  )
}
