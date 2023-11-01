import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'

import AppLayout from '@/components/layout/AppLayout'
import { NextPageWithLayout } from './_app'
import { GreenBackground } from '@/components/core'
import { Explore, FaqStarter, Starter } from '@/components/partials'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['axiestwo', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const StarterAxies: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <GreenBackground
      imageSource='olek'
      title={t('axiestwo:footer_title') as string}
      text={t('axiestwo:footer_text') as string}
      btn_text={t('axiestwo:footer_btn') as string}
      url={t("axiestwo:footer_url") as string}
      className="min-h-screen "
    >
      <section className={`w-full  ${poppins.className}`}>
        <div className="bg_decorative_pattern"></div>
        <div className="flex flex-col pt-16 pb-4 gap-10 sm:pt-16 lg:pb-32 ">
          <div className="flex flex-col gap-20 ">
            <Starter />

            <Explore />
            <FaqStarter />
          </div>
        </div>
      </section>
    </GreenBackground>
  )
}

StarterAxies.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default StarterAxies
