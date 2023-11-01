import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import {
  Alert,
  BoldableWrapper,
  TitleFontChanger,
  YellowMenu,
} from '@/components/core'

type stats_data = {
  stamina_title: string
  src1: string
  stamina_txt1: string
  stamina_txt2: string
  src2: string
  stamina_txt3: string
  stamina_txt4: string
}

type ranking_data2 = {
  title: string
  text: string
}

import redBanner from 'public/img/jpeg/red-banner.jpg'
import rewards from 'public/img/jpeg/rewards2.jpg'

export const Stats = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full flex flex-col gap-20 lg:gap-32">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <TitleFontChanger>
            <h3>{t('arena:stat_title')}</h3>
          </TitleFontChanger>
          <p className="text-xl">{t('arena:stat_txt')}</p>
        </div>
        <div className="flex flex-col xl:flex-row gap-10">
          {t<string, stats_data[]>('arena:stamina_data', {
            returnObjects: true,
          }).map((item) => (
            <BoldableWrapper
              key={item.stamina_title}
              className="xl:w-1/2 flex flex-col gap-6 bg-introInner rounded-2xl p-7 hover:border-4 hover:border-pink"
            >
              <div className="flex justify-between">
                <TitleFontChanger>
                  <div className="reounded-lg">
                    <Image
                      src={redBanner}
                      width={140}
                      height={32}
                      alt="redBanner"
                      className="rounded-lg object-cover"
                    />
                    <h4 className="text-white -translate-y-full p-1">
                      {item.stamina_title}
                    </h4>
                  </div>
                </TitleFontChanger>
                <Image
                  src={item.src1}
                  width={100}
                  height={70}
                  alt={item.stamina_title}
                  className='w-1/6'
                />
              </div>

              <p className="text-xl">{item.stamina_txt1}</p>
              <p className="text-xl">{item.stamina_txt2}</p>
              <div className="md:h-32 flex flex-col justify-center items-center">
                <Image
                  src={item.src2}
                  width={600}
                  height={200}
                  alt={item.stamina_title}
                  className="w-full md:w-[500px]"
                />
              </div>
              <p className="font-bold">{item.stamina_txt3}</p>
              <p className="text-xl">{item.stamina_txt4}</p>
            </BoldableWrapper>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-[40%]">
          <TitleFontChanger>
            <h2>{t('arena:leaderboard')}</h2>
          </TitleFontChanger>
          <p className="text-xl">{t('arena:leaderboard_txt')}</p>
          <TitleFontChanger>
            <h3>{t('arena:ranking_title2')}</h3>
          </TitleFontChanger>
          <div className="flex flex-col gap-4">
            {t<string, ranking_data2[]>('arena:ranking_data2', {
              returnObjects: true,
            }).map((item) => (
              <YellowMenu key={item.title}>
                <span className="font-bold">{item.title}</span>
                <span>{item.text}</span>
              </YellowMenu>
            ))}
          </div>
          <Alert>
            <span
              dangerouslySetInnerHTML={{
                __html: t('arena:alert_txt') as string,
              }}
            />
          </Alert>
        </div>
        <div className="lg:w-[60%]">
          <Image src={rewards} width={600} height={200} alt="rewards" className='w-full rounded-xl'/>
        </div>
          </div>
    </section>
  )
}
