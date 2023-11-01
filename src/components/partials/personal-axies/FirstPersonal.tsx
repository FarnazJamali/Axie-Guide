import Link from 'next/link'
import Image from 'next/image'
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

import personal from 'public/img/jpeg/personal-axies.jpg'

export const FirstPersonal = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-10 flex flex-col xl:w-[1200px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col h-80 sm:h-52 gap-4 text-lg z-10 px-4">
        <div className="sm:w-[600px] flex flex-col gap-4">
          <TitleFontChanger>
            <h1>{t('axiesthree:first_axies_title')}</h1>
          </TitleFontChanger>
          <p className="max-w-[600px]">{t('axiesthree:first_axies_text')}</p>
        </div>
        <div className="flex flex-col sm:flex-row  sm:gap-8">
          <Link href="#buy" className="mb-5 sm:mb-0">
            <BoldableWrapper>
              <YellowButton className="flex gap-3 text-lg font-semibold">
                {t('axiesthree:btn_one')}
                <i className="fa-solid fa-play"></i>
              </YellowButton>
            </BoldableWrapper>
          </Link>
          <Link href="#find" className="mb-5 sm:mb-0">
            <BoldableWrapper>
              <YellowButton className="flex gap-3 text-lg font-semibold">
                {t('axiesthree:btn_two')}
                <i className="fa-solid fa-play"></i>
              </YellowButton>
            </BoldableWrapper>
          </Link>
        </div>
      </div>

      <RotatedImage
        src={personal}
        width={900}
        height={400}
        alt="starter"
        className="rounded-xl shadow-bigImage -mt-16 relative z-0 sm:-rotate-[4deg] sm:mx-auto"
      />

      <Alert className="max-w-[500px] mt-4 text-lg md:self-end lg:-mt-16 lg:mr-0">
        <span
          dangerouslySetInnerHTML={{
            __html: t('axiesthree:alert_text') as string,
          }}
        />
      </Alert>
    </div>
  )
}
