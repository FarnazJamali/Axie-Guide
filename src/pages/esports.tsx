import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from './_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import {
  Alert,
  BoldableWrapper,
  IntroBanner,
  IntroductionBox,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['esports', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

import sky from 'public/img/jpeg/sky.jpg'
import axie from 'public/img/webp/axieEsports.webp'
import twitter from 'public/img/png/twitter.png'

const Esports: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <section
      className={`w-full bg_light_pattern_background px-4 ${poppins.className}`}
    >
      <IntroBanner
        src={sky}
        height={300}
        alt="sky"
        className="object-cover object-right h-72"
      >
        <IntroductionBox className="-translate-y-1/2 w-4/5 sm:w-[600px]">
          <div className="flex flex-col items-center gap-2 ">
            <TitleFontChanger>
              <h1 className="text-[#936e59] ">{t('esports:page_title')}</h1>
            </TitleFontChanger>
            <p className="text-[#5b463a] text-center md:text-xl font-semibold">
              {t('esports:page_description')}
            </p>
          </div>
        </IntroductionBox>
      </IntroBanner>

      <div className="flex flex-col lg:flex-row gap-12 pt-32 xl:pt-56 sm:w-[600px] lg:w-[1100px] mx-auto">
        <div className="lg:w-[60%] flex flex-col gap-4 pt-5">
          <TitleFontChanger>
            <h2>{t('esports:compete_title')}</h2>
          </TitleFontChanger>
          <p className="text-xl">{t('esports:compete_txt1')}</p>
          <p className="text-xl">{t('esports:compete_txt2')}</p>
          <p className="text-xl">{t('esports:compete_txt3')}</p>
          <p className="text-xl">{t('esports:compete_txt4')}</p>
          <Link href="https://skymavis.notion.site/Grant-3-Official-Calendar-1eb79c51ffd04fc9918fb0ac197f08e0">
            <BoldableWrapper>
              <YellowButton className="flex gap-3">
                <span>{t('esports:btn')}</span>
                <i className="fa-solid fa-play"></i>
              </YellowButton>
            </BoldableWrapper>
          </Link>
        </div>

        <div className="lg:w-[40%] flex flex-col gap-7">
          <Link href="https://skymavis.notion.site/Grant-3-Official-Calendar-1eb79c51ffd04fc9918fb0ac197f08e0">
            <BoldableWrapper>
              <Image
                src={axie}
                width={400}
                height={100}
                alt="axie"
                className="w-full rounded-xl shadow-bigImage"
              />
            </BoldableWrapper>
          </Link>
          <Link href="https://twitter.com/EsportsAxie">
            <BoldableWrapper>
              <Image
                src={twitter}
                width={400}
                height={100}
                alt="twitter"
                className="w-full rounded-xl"
              />
            </BoldableWrapper>
          </Link>
          <Alert>{t('esports:alert')}</Alert>
        </div>
      </div>
    </section>
  )
}

Esports.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Esports
