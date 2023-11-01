import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { Tooltip } from 'react-tooltip'

import {
  BoldableWrapper,
  Outcome,
  RedPill,
  TitleFontChanger,
  YellowMenu,
} from '@/components/core'
import { Stats } from './Stats'
import { Tournament } from './Tournament'

import egg from 'public/img/png/egg.png'
import star from 'public/img/png/star.png'
import stars from 'public/img/jpeg/stars.jpg'

type ranking_data = {
  src: string
  title: string
  rank: string
  bouns: string
  tooltip_one: string
  tooltip_two: string
}

type victory_data = {
  text: string
}

type win_loss = {
  title: string
  number: string
}

type bonus_data = {
  title: string
  text: string
}
export const Rank = () => {
  const { t } = useTranslation()

  return (
    <section
      id="ranked-mode"
      className="flex flex-col gap-20 px-4 sm:px-6 xl:w-[1200px] mx-auto"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image src={egg} width={100} height={70} alt="egg" />
          <TitleFontChanger>
            <h2>{t('arena:rank_title')}</h2>
          </TitleFontChanger>
        </div>
        <span
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: t('arena:rank_txt') as string }}
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <TitleFontChanger>
            <h3>{t('arena:ranking_title')}</h3>
          </TitleFontChanger>
          <p className="text-xl">{t('arena:ranking_txt')}</p>
        </div>

        <div className="w-full flex flex-wrap gap-3">
          {t<string, ranking_data[]>('arena:ranking_data', {
            returnObjects: true,
          }).map((item, index) => (
            <BoldableWrapper
              className="flex flex-col items-center gap-3 lg:w-[10%]"
              key={item.title}
            >
              <Image src={item.src} width={130} height={40} alt={item.title} />
              <TitleFontChanger>
                <p className="text-2xl font-bold">{item.title}</p>
              </TitleFontChanger>
              {item.tooltip_one && (
                <>
                  <a
                    data-tooltip-id={`my-tooltip-${index}`}
                    data-tooltip-content={item.tooltip_one}
                  >
                    <div className="w-fit bg-[#39241a] p-1 flex gap-1 justify-between rounded-lg">
                      <TitleFontChanger>
                        <span className="text-[#ffb00f]">{item.rank}</span>
                      </TitleFontChanger>
                      <Image src={star} width={15} height={15} alt="star" />
                      <TitleFontChanger>
                        <span className="text-[#ffb00f]">
                          {t('arena:pertier')}
                        </span>
                      </TitleFontChanger>
                    </div>
                  </a>
                  <Tooltip id={`my-tooltip-${index}`} place="bottom"  noArrow style={{width:"300px", fontSize:"11px", fontWeight:"bold"}}/>
                </>
              )}
              {item.tooltip_one && (
                <TitleFontChanger className="my-1 text-center">
                  <p>{t('arena:tiers_data')}</p>
                  <p>{t('arena:one')}</p>
                  <p>{t('arena:two')}</p>
                  <p>{t('arena:three')}</p>
                  <p>{t('arena:four')}</p>
                </TitleFontChanger>
              )}

              {
                <>
                  <a
                    data-tooltip-id={`my-tooltip-${index + 9}`}
                    data-tooltip-content={item.tooltip_two}
                  >
                    <RedPill className="flex gap-1 hover:bg-red-500">
                    <span className="text-white">{t('arena:bonus')}</span>
                    <span className="text-white">{item.bouns}</span>
                    <Image src={star} width={15} height={15} alt="star" />
                  </RedPill>
                  </a>
                  <Tooltip id={`my-tooltip-${index + 9}`} place="bottom" noArrow style={{width:"300px", fontSize:"11px", fontWeight:"bold"}} />
                </>
              }
            </BoldableWrapper>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-2/3 flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <TitleFontChanger>
              <h3>{t('arena:victory_title')}</h3>
            </TitleFontChanger>
            <p className="text-xl">{t('arena:victory_txt')}</p>
          </div>
          <div className="flex flex-col gap-4">
            {t<string, victory_data[]>('arena:victory_data1', {
              returnObjects: true,
            }).map((item, index) => (
              <YellowMenu key={index} className="ml-5">
                {item.text}
              </YellowMenu>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {t<string, win_loss[]>('arena:win_loss_1', {
              returnObjects: true,
            }).map((item, index) => (
              <Outcome
                key={index}
                title={item.title}
                number={item.number}
                className="w-full sm:w-fit"
              />
            ))}
          </div>
          <YellowMenu className="ml-5">{t('arena:victory_data2')}</YellowMenu>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {t<string, win_loss[]>('arena:win_loss_2', {
              returnObjects: true,
            }).map((item, index) => (
              <Outcome
                key={index}
                title={item.title}
                number={item.number}
                className="w-full sm:w-fit"
              />
            ))}
          </div>
          <YellowMenu className="ml-5">{t('arena:victory_data3')}</YellowMenu>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {t<string, win_loss[]>('arena:win_loss_3', {
              returnObjects: true,
            }).map((item, index) => (
              <Outcome
                key={index}
                title={item.title}
                number={item.number}
                className="w-full sm:w-fit"
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {t<string, victory_data[]>('arena:victory_data4', {
              returnObjects: true,
            }).map((item, index) => (
              <YellowMenu key={index} className="ml-5">
                {item.text}
              </YellowMenu>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col gap-4">
          <div>
            <Image
              src={stars}
              width={400}
              height={70}
              alt="stars"
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <TitleFontChanger>
              <h3>{t('arena:star_title')}</h3>
            </TitleFontChanger>
            <div className="text-xl">
              <p className="text-xl">{t('arena:star_txt1')}</p>
              <p className="text-xl">{t('arena:star_txt2')}</p>
              <p className="text-xl">{t('arena:star_txt3')}</p>
            </div>
          </div>
          <div>
            <Image
              src={stars}
              width={400}
              height={70}
              alt="stars"
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <TitleFontChanger>
              <h3>{t('arena:bonus_title')}</h3>
            </TitleFontChanger>
            <p className="text-xl">{t('arena:bonus_txt1')}</p>
          </div>
          <div className="flex flex-col gap-4">
            {t<string, bonus_data[]>('arena:bonus_data', {
              returnObjects: true,
            }).map((item, index) => (
              <div key={index} className="flex justify-center gap-2">
                <i className="fa-solid fa-star text-pink"></i>
                <div>
                  <span className="font-bold text-xl"> {item.title}</span>
                  <span> {item.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={stars}
              width={400}
              height={70}
              alt="stars"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <Stats />
      <Tournament />
    </section>
  )
}
