import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { LinkComponent, TitleFontChanger, YellowMenu } from '@/components/core'

import runes from 'public/img/png/runes2.png'
import charms from 'public/img/png/charms2.png'

export const PowerUps = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="lg:w-2/3 flex flex-col gap-5">
        <TitleFontChanger>
          <h2>{t('axiesone:powerups_title')}</h2>
        </TitleFontChanger>
        <p>{t('axiesone:powerups_description_1')}</p>

        <div className="flex flex-col gap-2">
          <YellowMenu>
            <LinkComponent href="/runes">
              {t('axiesone:runes_link')}
            </LinkComponent>
            <span>{t('axiesone:runes_text')}</span>
          </YellowMenu>
          <YellowMenu>
            <LinkComponent href="/charms">
              {t('axiesone:charms_link')}
            </LinkComponent>
            <span>{t('axiesone:charms_text')}</span>
          </YellowMenu>
        </div>
        <p>{t('axiesone:powerups_description_2')}</p>
      </div>

      <div className="lg:w-1/3 flex flex-col items-center gap-4">
        <div>
          <Image src={runes} width={300} height={100} alt="runes" />
        </div>
        <div>
          <Image src={charms} width={300} height={100} alt="charms" />
        </div>
      </div>
    </div>
  )
}
