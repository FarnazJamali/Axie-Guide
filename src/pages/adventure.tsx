import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

import AppLayout from '@/components/layout/AppLayout'
import { NextPageWithLayout } from './_app'
import {
  Alert,
  GreenBackground,
  IntroBanner,
  IntroductionBox,
  RedPill,
  TitleFontChanger,
} from '@/components/core'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['adventure', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

import adventure from 'public/img/jpeg/adventure.jpg'
import map from 'public/img/jpeg/map.jpg'
import foraging from 'public/img/jpeg/foraging-rewards.jpg'
import milestone from 'public/img/jpeg/milestone-rewards.jpg'

const Adventure: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <GreenBackground
      imageSource='olek'
      title={t('adventure:footer_title') as string}
      text={t('adventure:footer_text') as string}
      btn_text={t('adventure:footer_btn') as string}
      url={t('adventure:footer_url') as string}
    >
      <section className={`w-full ${poppins.className} mb-20 xl:mb-0`}>
        <div className="flex flex-col px-4 gap-28">
          <IntroBanner
            src={adventure}
            width={1000}
            height={300}
            alt="adventure"
            className="h-40 sm:h-72 lg:h-[500px] object-cover object-center mx-4 mb-10"
          >
            <IntroductionBox className="-translate-y-1/2  sm:w-[600px]">
              <div className="w-2/3 md:w-3/4  flex flex-col items-center gap-2 ">
                <TitleFontChanger>
                  <h1 className="text-[#936e59] ">
                    {t('adventure:page_title')}
                  </h1>
                </TitleFontChanger>
                <p className="text-[#5b463a] text-center md:text-xl">
                  {t('adventure:page_description')}
                </p>
              </div>
            </IntroductionBox>
          </IntroBanner>

          <div className="flex flex-col gap-8 text-xl sm:w-[600px] lg:w-[1150px] mx-auto">
            <TitleFontChanger>
              <h2 className=" ">{t('adventure:adventure_title')}</h2>
            </TitleFontChanger>
            <p>{t('adventure:adventure_txt1')}</p>
            <p>{t('adventure:adventure_txt2')}</p>
            <div className="flex flex-col gap-5 w-full">
              <div className="mx-auto">
                <Image
                  src={map}
                  height={300}
                  width={500}
                  alt="map"
                  className="w-[550px] sm:w-[850px] md:w-[1000px] object-cover"
                />
              </div>

              <Alert className="sm:w-[500px] sm:self-end sm:-mt-20">
                {t('adventure:alert_txt')}
              </Alert>
            </div>
          </div>

          <div className="flex flex-col gap-8 xl:flex-row lg:w-[1150px] px-4 mx-auto">
            <div className="xl:w-1/2">
              <Image
                src={foraging}
                width={500}
                height={370}
                alt="foraging"
                className="w-full md:w-[500px] mx-auto"
              />
            </div>
            <div className="flex flex-col gap-8 xl:w-1/2">
              <div className="flex items-center gap-5">
                <TitleFontChanger>
                  <h2>{t('adventure:foaraging')}</h2>
                </TitleFontChanger>
                <RedPill> {t('adventure:new')}</RedPill>
              </div>
              <p>{t('adventure:foraging_txt1')}</p>
              <p>{t('adventure:foraging_txt2')}</p>
              <Alert className="w-full">{t('adventure:alert_txt2')}</Alert>
            </div>
          </div>

          <div className="flex flex-col gap-8 xl:flex-row lg:w-[1150px] px-4 mx-auto">
            <div className="flex flex-col gap-8 xl:w-1/2">
              <div className="flex items-center gap-5">
                <TitleFontChanger>
                  <h2>{t('adventure:milestone')}</h2>
                </TitleFontChanger>
                <RedPill> {t('adventure:new')}</RedPill>
              </div>
              <p>{t('adventure:milestone_txt1')}</p>
              <p>{t('adventure:milestone_txt2')}</p>
             
            </div>
            <div className="xl:w-1/2">
              <Image
                src={milestone}
                width={500}
                height={370}
                alt="milestone"
                className="w-full md:w-[600px] mx-auto"
              />
               <Alert className="w-full sm:w-[600px] xl:w-full mt-10">{t('adventure:alert_txt3')}</Alert>
            </div>
          </div>
        </div>
      </section>
    </GreenBackground>
  )
}

Adventure.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Adventure
