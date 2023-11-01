import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'

import AppLayout from '@/components/layout/AppLayout'
import { NextPageWithLayout } from './_app'
import { GreenBackground } from '@/components/core'
import {
  BuyingAxies,
  FirstPersonal,
  Personal,
  PersonalFaq,
  Scholarship,
} from '@/components/partials'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['axiesthree', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const PersonalAxies: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <GreenBackground
      imageSource='puffy'
      title={t('axiesthree:footer_title') as string}
      text={t('axiesthree:footer_text') as string}
      btn_text={t('axiesthree:footer_btn') as string}
      url={t('axiesthree:footer_url') as string}
    >
      <section className={`w-full ${poppins.className}`}>
        <div className="bg_decorative_pattern"></div>
        <div className="flex flex-col pt-16 gap-20 lg:gap-32">
          <Personal />
          <FirstPersonal />
          <BuyingAxies />
          <div className='personal_axies_bg'></div>
          <Scholarship />
          <PersonalFaq />
        </div>
      </section>
    </GreenBackground>
  )
}

PersonalAxies.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default PersonalAxies
