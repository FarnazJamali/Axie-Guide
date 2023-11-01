import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { LinkComponent, TitleFontChanger, YellowMenu } from '@/components/core'

import marketplace from 'public/img/jpeg/marketplace.jpg'

type personal_abilities_data = {
  title: string
  text: string
}
export const Personal = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full lg:max-w-[1200px] px-4 sm:px-6 mx-auto flex flex-col gap-20">
      <div className="flex flex-col items-center sm:w-[480px] mx-auto gap-5">
        <TitleFontChanger>
          <h1>{t('axiesthree:page_title')}</h1>
        </TitleFontChanger>
        <p className="text-center">{t('axiesthree:page-description')}</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between px-4 gap-10">
        <div className="flex flex-col gap-4 md:w-1/2">
          <TitleFontChanger>
            <h2>{t('axiesthree:personal_title')}</h2>
          </TitleFontChanger>
          <p>
            {t('axiesthree:personal_text_1')}
            <LinkComponent href="/starter-axies">
              {t('common:starter_link')}
            </LinkComponent>
            <span>{t('axiesthree:personal_text_2')}</span>
            <LinkComponent href="/adventure">
              {t('common:adventure')}
            </LinkComponent>
            <span>{t('common:and')}</span>
            <LinkComponent href="/arena">{t('common:arena')}</LinkComponent>
          </p>
          <p>{t('axiesthree:personal_text_3')}</p>
          <div className="flex flex-col gap-4">
            {t<string, personal_abilities_data[]>(
              'axiesthree:personal_abilities_data',
              { returnObjects: true },
            ).map((item, index) => (
              <YellowMenu key={index} className="ml-4">
                <span className="font-bold">{item.title}</span>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </YellowMenu>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Image
            src={marketplace}
            width={650}
            height={200}
            alt="marketplace"
            className="w-full object-fit rounded-xl xl:w-[450px] mx-auto"
          />
        </div>
      </div>
    </div>
  )
}
