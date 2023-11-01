import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import FAQ from '@/components/core/Faq'
import {
  Alert,
  BoldableWrapper,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'

type eth_data = {
  title: string
  text: string
  btn_txt: string
  href: string
}
export const BuyingAxies = () => {
  const { t } = useTranslation()
  return (
    <section id="buy" className="xl:w-[1200px] px-4 sm:px-6 mx-auto">
      <div className="w-full flex flex-col items-start gap-5">
        <FAQ className="text-left">
          <span className="p-5 block text-white">
            {t('axiesthree:buying_axies_title')}
          </span>
        </FAQ>
        <p className="text-xl">{t('axiesthree:buying_axies_text')}</p>
        <div className="flex flex-col gap-6">
          <TitleFontChanger>
            <h3>{t('axiesthree:buying_axies_data_title_1')}</h3>
          </TitleFontChanger>
          <p>{t('axiesthree:buying_axies_data_txt_1')}</p>
          <span
            dangerouslySetInnerHTML={{
              __html: t('axiesthree:buying_axies_data_txt_11') as string,
            }}
          />
          <Alert className="sm:w-3/4">{t('axiesthree:alert_text_3')}</Alert>
        </div>

        <div className="flex flex-col gap-6">
          <TitleFontChanger>
            <h3>{t('axiesthree:buying_axies_data_title_2')}</h3>
          </TitleFontChanger>
          <p>{t('axiesthree:buying_axies_data_txt_2')}</p>
          <p>{t('axiesthree:buying_axies_data_txt_22')}</p>

          <div className="flex flex-col gap-4  sm:flex-row">
            {t<string, eth_data[]>('axiesthree:eth_data', {
              returnObjects: true,
            }).map((item, index) => (
              <div
                className="flex flex-col sm:w-1/2 p-3 gap-6 rounded-xl bg-[#fff3c3]"
                key={index}
              >
                <div className="flex items-center gap-3 text-pink">
                  <i className="fa-solid fa-star"></i>
                  <TitleFontChanger>
                    <h4>{item.title}</h4>
                  </TitleFontChanger>
                </div>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
                <Link href={item.href}>
                  <BoldableWrapper className="flex flex-col">
                    <YellowButton className="flex gap-3">
                      {item.btn_txt}
                      <i className="fa-solid fa-play"></i>
                    </YellowButton>
                  </BoldableWrapper>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <TitleFontChanger>
            <h3>{t('axiesthree:buying_axies_data_title_3')}</h3>
          </TitleFontChanger>
          <span
            dangerouslySetInnerHTML={{
              __html: t('axiesthree:buying_axies_data_txt_3') as string,
            }}
          />
          <Alert className="">
            <span
              dangerouslySetInnerHTML={{
                __html: t('axiesthree:alert_text2') as string,
              }}
            />
          </Alert>
        </div>

        <div className="flex flex-col gap-6">
          <TitleFontChanger>
            <h3>{t('axiesthree:buying_axies_data_title_4')}</h3>
          </TitleFontChanger>
          <p>{t('axiesthree:buying_axies_data_txt_4')}</p>
          <p>{t('axiesthree:buying_axies_data_txt_41')}</p>
          <p>{t('axiesthree:buying_axies_data_txt_42')}</p>
        </div>
      </div>
    </section>
  )
}
