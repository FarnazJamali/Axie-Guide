import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from './_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['arena', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

import {
  GreenBackground,
  IntroBanner,
  IntroductionBox,
  TitleFontChanger,
} from '@/components/core'

import arena from 'public/img/jpeg/arena.jpg'
import { ArenaIntro, Rank } from '@/components/partials'

const Arena: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <GreenBackground
      imageSource='olek'
      title={t('arena:footer_title') as string}
      text={t('arena:footer_text')  as string}
      btn_text={t('arena:footer_btn')  as string}
      url={t('arena:footer_url')  as string}
    >
      <section className={`w-full ${poppins.className}`}>
        <IntroBanner
          src={arena}
          height={300}
          alt="arena"
          className="h-40 sm:h-60 md:h-[500px] object-cover mx-4"
        >
          <IntroductionBox className="-translate-y-1/2  sm:w-[600px]">
            <div className="w-2/3 md:w-3/4  flex flex-col items-center gap-2 ">
              <TitleFontChanger>
                <h1 className="text-[#936e59] ">{t('arena:page_title')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a] text-center md:text-xl">
                {t('arena:page_description')}
              </p>
            </div>
          </IntroductionBox>
        </IntroBanner>

        <div className="flex flex-col gap-12 pt-16">
          <ArenaIntro />
          <Rank />
        </div>
      </section>
    </GreenBackground>
  )
}

Arena.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Arena
