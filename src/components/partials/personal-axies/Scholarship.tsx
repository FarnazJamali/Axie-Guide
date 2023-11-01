import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import FAQ from '@/components/core/Faq'

import {
  BoldableWrapper,
  TitleFontChanger,
  YellowButton,
  YellowMenu,
} from '@/components/core'

import axie1 from 'public/img/png/axie-with-letter.png'
import axie2 from 'public/img/png/axie-with-scroll.png'
import axie3 from 'public/img/png/axie-with-turnip.png'
import discord from 'public/img/png/discord.png'
import twitter from 'public/img/png/twitter.png'

type scholarship_data = {
  title: string
  text: string
}
export const Scholarship = () => {
  const { t } = useTranslation()
  return (
    <section id="find" className="xl:w-[1200px] px-4 sm:px-6 mx-auto">
      <div className="w-full flex flex-col gap-5">
        <FAQ className="text-left "><span className='p-5 block text-white'>{t('axiesthree:scholarship_title')}</span></FAQ>
        <span
          className="text-xl"
          dangerouslySetInnerHTML={{
            __html: t('axiesthree:scholarship_text') as string,
          }}
        />

        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <Image
              src={axie1}
              width={100}
              height={100}
              alt="axiewithletter"
              className="md:w-32"
            />
          </div>

          <div className="flex flex-col gap-6">
            <TitleFontChanger>
              <h3>{t('axiesthree:scholarship_beginner')}</h3>
            </TitleFontChanger>
            <p>{t('axiesthree:scholarship_beginner_txt')}</p>
            <div className="flex flex-col gap-3">
              {t<string, scholarship_data[]>('axiesthree:scholarship_data', {
                returnObjects: true,
              }).map((item, index) => (
                <YellowMenu key={index}>
                  <span className="font-bold">{item.title}</span>
                  <span>{item.text}</span>
                </YellowMenu>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <Image
              src={axie2}
              width={100}
              height={100}
              alt="axiewithscroll"
              className="md:w-48"
            />
          </div>

          <div className="flex flex-col gap-6">
            <TitleFontChanger>
              <h3>{t('axiesthree:rules')}</h3>
            </TitleFontChanger>
            <p>{t('axiesthree:rules_txt')}</p>
            <div className="flex flex-col gap-3">
              {t<string, scholarship_data[]>('axiesthree:rules_data', {
                returnObjects: true,
              }).map((item, index) => (
                <YellowMenu key={index}>
                  <span>{item.text}</span>
                </YellowMenu>
              ))}
            </div>
            <span
              dangerouslySetInnerHTML={{
                __html: t('axiesthree:scholarship_txt_2') as string,
              }}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: t('axiesthree:scholarship_txt_3') as string,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <Image
              src={axie3}
              width={100}
              height={100}
              alt="axiewithturnip"
              className="md:w-28"
            />
          </div>

          <div className="flex flex-col gap-6">
            <TitleFontChanger>
              <h3>{t('axiesthree:find_scho_title')}</h3>
            </TitleFontChanger>
            <p>{t('axiesthree:find_scho_txt')}</p>

            <span
              dangerouslySetInnerHTML={{
                __html: t('axiesthree:find_scho_txt2') as string,
              }}
            />
            <BoldableWrapper>
              <YellowButton className="flex gap-2">
                {t('axiesthree:find_scho_btn')}
                <i className="fa-solid fa-graduation-cap"></i>
              </YellowButton>
            </BoldableWrapper>
            <p>{t('axiesthree:find_scho_txt_3')}</p>

            <div className="flex flex-col gap-8 sm:flex-row">
              <Image src={discord} width={300} height={100} alt="discord" />
              <Image src={twitter} width={300} height={100} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
