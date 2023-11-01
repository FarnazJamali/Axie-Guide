import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'

import AppLayout from '@/components/layout/AppLayout'
import { NextPageWithLayout } from './_app'
import { AxiesNewPlayers, HowToPlay, InfinitPossibilities, IntroNewPlayers, JoinCommunity } from '@/components/partials'
import { LightBackground } from '@/components/core'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['newplayers', 'home', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const NewPlayers: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <LightBackground className="min-h-screen">
      <section className={`pt-16 gap-20 sm:pt-20 sm:pb-4 sm:gap-24 lg:pb-32 lg:gap-48 flex flex-col relative ${poppins.className}`}>
        <IntroNewPlayers/>
        <AxiesNewPlayers />
        <HowToPlay />
        <InfinitPossibilities/>
      <JoinCommunity/>
      </section>
    </LightBackground>
  )
}

NewPlayers.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default NewPlayers
