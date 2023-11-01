import { useTranslation } from 'next-i18next'

import { LinkComponent, TitleFontChanger, YellowMenu } from '@/components/core'

type potential_data = {
  title: string
  text: string
}
export const PotentialPoints = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10">
      <div className="lg:w-2/3 text-grey text-lg">
        <TitleFontChanger className="mb-3">
          <h2>{t('axiesone:potential_title')}</h2>
        </TitleFontChanger>
        <div className="flex flex-col gap-4 font-normal text-grey text-lg">
          <p>{t('axiesone:potential_text_1')}</p>
          <p>
            {t('axiesone:potential_text_2')}
            <LinkComponent href="/charms">
              {t('axiesone:charms_link')}
            </LinkComponent>
            <span>{t('axiesone:potential_text_3')}</span>
          </p>
          <p>{t('axiesone:potential_text_4')}</p>
          <p>{t('axiesone:potential_text_5')}</p>
        </div>
        <div className="flex flex-col gap-4 mt-8 ms-5">
          {t<string, potential_data[]>('axiesone:potential_data', {
            returnObjects: true,
          }).map((item, index) => (
            <YellowMenu key={index} className="flex md:w-[550px]">
              <span className="font-bold">{item.title}</span>
              <span>{item.text}</span>
            </YellowMenu>
          ))}
        </div>
      </div>
      <div className="lg:w-1/3">
        <TitleFontChanger className="mb-3">
          <h3>{t('axiesone:charms_title')}</h3>
        </TitleFontChanger>
        <div className="flex flex-col text-grey text-lg gap-4">
          <p>
            {t('axiesone:charms_text_1')}
            <LinkComponent href="/charms">
              {t('axiesone:charms_link')}
            </LinkComponent>
            <span>{t('axiesone:charms_text_2')}</span>
          </p>
          <p>{t('axiesone:charms_text_3')}</p>
          <p>
            {t('axiesone:charms_text_4')}
            <LinkComponent href="https://www.axie.tech/inspector">
              {t('axiesone:axie_inspector_link')}
            </LinkComponent>
          </p>
        </div>
      </div>
    </div>
  )
}
