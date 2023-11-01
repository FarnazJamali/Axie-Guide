import { Poppins } from 'next/font/google'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from './_app'

import AppLayout from '@/components/layout/AppLayout'
import {
  IntroBanner,
  IntroductionBox,
  RotatedImage,
  TitleFontChanger,
} from '@/components/core'
import { AxiesDescription } from '@/components/partials'

import char2 from 'public/img/png/buba-right.png'
import banner from 'public/img/jpeg/axie-infinity.jpg'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <section
      className={`min-h-screen bg_light_pattern_background ${poppins.className}`}
    >
      
      <IntroBanner
        className="h-72 sm:h-96 md:h-[620px] mx-4 shadow-banner"
        src={banner.src}
        width={800}
        height={100}
        alt='banner'
      >
        <IntroductionBox vertical className='mx-4 -mt-20 max-w-[860px]'>
          <div className="flex flex-col items-center md:flex-row relative gap-4">
            <RotatedImage
              src={char2}
              width={200}
              height={200}
              className="hidden md:inline-flex -rotate-12 w-1/3 md:1/4 -my-10 overflow-hidden"
              alt="Rotated"
            />
            <div className="w-2/3 md:w-3/4 flex flex-col max-md:text-center gap-2 ">
              <TitleFontChanger>
                <h1 className="text-[#936e59]">{t('home:welcome_msg')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a]">{t('home:lunacia_introduction')}</p>
            </div>
          </div>
        </IntroductionBox>
      </IntroBanner>

      <AxiesDescription />
      
    </section>
  )
}
Home.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Home
