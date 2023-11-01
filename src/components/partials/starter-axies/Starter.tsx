import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import {
  Alert,
  BoldableWrapper,
  LinkComponent,
  RotatedImage,
  TextBox,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'

import starter from 'public/img/jpeg/starter-axies2.jpg'

export const Starter = () => {
  const { t } = useTranslation()
  return (
    <div className="pt-10 flex flex-col xl:w-[1100px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col h-52 gap-4 text-lg z-10">
        <TitleFontChanger>
          <h1>{t('axiestwo:page_title')}</h1>
        </TitleFontChanger>
        <p className="max-w-[600px]">{t('axiestwo:title_description')}</p>
        <Link href="#explore" className="mb-5 sm:mb-0">
          <BoldableWrapper>
            <YellowButton className="flex gap-3 text-lg font-semibold">
              {t('axiestwo:btn_starter')}
              <i className="fa-solid fa-play"></i>
            </YellowButton>
          </BoldableWrapper>
        </Link>
      </div>

      <RotatedImage
        src={starter}
        width={900}
        height={400}
        alt="starter"
        className="shadow-bigImage -mt-16 relative z-0 sm:-rotate-[4deg] sm:mx-auto"
      />

      <TextBox className="inline-flex flex-col sm:w-[500px] mx-auto bg-white sm:absolute sm:left-1/3 sm:top-1/4 md:top-[300px] md:-right-40 z-10">
        <TitleFontChanger>
          <h3>{t('axiestwo:meet_title')}</h3>
        </TitleFontChanger>
        <p>{t('axiestwo:meet_text')}</p>
      </TextBox>
      <Alert className="max-w-[500px] mt-4 text-lg md:self-end lg:-mt-20 lg:mr-28">
        <span>{t('axiestwo:alert_text_1')}</span>
        <LinkComponent href="/personal-axies">
          {t('common:personal_link')}
        </LinkComponent>
        <span>{t('axiestwo:from')}</span>
        <LinkComponent href="https://marketplace.axieinfinity.com/axie">
          {t('common:Market_place')}
        </LinkComponent>
        <span>{t('axiestwo:exclamation')}</span>
      </Alert>

      <div className="flex flex-col gap-4 mt-16">
        <TitleFontChanger>
          <h2>{t('axiestwo:upgrade_title')}</h2>
        </TitleFontChanger>
        <p>{t('axiestwo:upgrade_text')}</p>
        <div className="w-full mt-5">
          <iframe
            src="https://drive.google.com/file/d/17RjoeZ95lT80azrX33Ks2Pto7h-idKEc/preview"
            className="w-full h-full aspect-video rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
