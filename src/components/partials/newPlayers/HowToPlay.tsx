import {
  BlackBadge,
  BoldableWrapper,
  IntroBanner,
  LinkComponent,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { IBattleBasics } from '@/components/interface'

import map from 'public/img/png/map.jpg'
import howtoplay from 'public/img/png/how-to-play.png'
import gameplay from 'public/img/jpeg/gameplay.jpg'
import battle from 'public/img/jpeg/battle2.jpg'

export const HowToPlay = () => {
  const { t } = useTranslation()
  
  return (
    <section id="howtoplay" className="flex flex-col gap-5">
      <div className="flex flex-col items-center mx-4">
        <IntroBanner src={map} height={300} alt="map" className="w-full" />
        <Image
          src={howtoplay}
          width={200}
          height={200}
          alt="axies"
          className="-translate-y-1/2 w-full max-w-[380px] "
        />
      </div>

      <div className="max-w-[800px] flex flex-col gap-8 mx-auto px-4">
        <div className="flex flex-col gap-8 text-xl font-normal">
          <p>{t('newplayers:how_to_play_1')}</p>
          <p>
            {t('newplayers:how_to_play_2')}
            <LinkComponent href="/adventure">
              {t('newplayers:adventure_mode')}
            </LinkComponent>
            <span>{t('common:and')}</span>
            <LinkComponent href="/arena">
              {t('newplayers:arena_mode')}
            </LinkComponent>
            <span>{t('newplayers:how_to_play_3')}</span>
          </p>
          <p>{t('newplayers:how_to_play_4')}</p>

          <div>
            <Image
              src={gameplay}
              width={400}
              height={200}
              alt="gameplay"
              className="w-full max-w-[770px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <TitleFontChanger className="flex flex-col items-center">
              <h3>{t('newplayers:battle_title')}</h3>
            </TitleFontChanger>
            <div className="flex flex-col gap-6 lg:gap-4">
              {t<string, IBattleBasics[]>('newplayers:battle_basics_data', {
                returnObjects: true,
              }).map((item, index) => (
                <div className="flex items-center gap-3 mb-2" key={index}>
                  <div className="w-20">
                    <Image
                      src={item.src}
                      width={80}
                      height={80}
                      alt="cards"
                      className="h-20 w-20"
                    />
                  </div>
                  <div className="flex flex-col items-start w-[calc(100%-80px)] gap-2">
                    <BlackBadge>{item.title}</BlackBadge>
                    <p className="text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <Image
                src={battle}
                width={700}
                height={300}
                alt="battle"
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-8">
              <p className="sm:w-3/4">{t('newplayers:info')}</p>
              <BoldableWrapper className="max-w-[180px] sm:w-1/4 flex-grow mx-auto">
                <Link href="/starter-axies">
                  <YellowButton className="flex items-center gap-1">
                    {t('newplayers:btn_guide')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </Link>
              </BoldableWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
