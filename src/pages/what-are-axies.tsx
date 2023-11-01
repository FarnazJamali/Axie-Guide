import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'

import AppLayout from '@/components/layout/AppLayout'
import { NextPageWithLayout } from './_app'
import {
  GreenBackground,
  IntroBanner,
  IntroductionBox,
  TitleFontChanger,
} from '@/components/core'

import axies from 'public/img/jpeg/axies.jpg'

import {
  BodyParts,
  Classes,
  PotentialPoints,
  PowerUps,
  Types,
} from '@/components/partials'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['axiesone', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const WhatAreAxies: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <GreenBackground
      className="min-h-screen"
      imageSource='puffy'
      title={t('common:bgfooter_title') as string}
      text={t('common:bgfooter_text') as string}
      btn_text={t('common:starter_link') as string}
      url={t("axiesone:footer_url") as string}
    >
      <section className={` ${poppins.className}`}>
        <div className="flex flex-col gap-28">
          <IntroBanner
            src={axies}
            height={300}
            alt="axies"
            className="h-40 lg:h-72 object-cover object-center mx-4"
          >
            <IntroductionBox
              vertical={false}
              className="-translate-y-1/2  max-lg:w-[90%] lg:w-[540px]"
            >
              <div className="w-2/3 md:w-3/4  flex flex-col items-center gap-2 ">
                <TitleFontChanger>
                  <h1 className="text-[#936e59]">{t('axiesone:page_title')}</h1>
                </TitleFontChanger>
                <p className="text-[#5b463a] text-center">
                  {t('axiesone:title_description')}
                </p>
              </div>
            </IntroductionBox>
          </IntroBanner>

          <div className="w-full px-4 sm:px-6 lg:w-[900px] xl:w-[1150px] mx-auto">
            <div className="flex flex-col pt-16 gap-20 sm:pt-20 sm:pb-4 sm:gap-24 lg:pb-32">
              <Classes />
              <BodyParts />
              <PotentialPoints />
              <PowerUps />
              <Types />
            </div>
          </div>
        </div>
      </section>
    </GreenBackground>
  )
}

WhatAreAxies.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default WhatAreAxies
