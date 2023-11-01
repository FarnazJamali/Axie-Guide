import { useTranslation } from 'next-i18next'

import FAQ from '@/components/core/Faq'
import {
  BlueButton,
  BoldableWrapper,
  TextBox,
  TitleFontChanger,
} from '@/components/core'
import Link from 'next/link'

interface IFaqData {
  h4: string
  p: string
  btn_txt?: string
  href?: string
}

export const PersonalFaq = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full">
      <div className="bg_decorative_pattern"></div>
      <div className="flex flex-col items-center gap-8 px-4 -mt-7">
        <FAQ className="sm:w-[600px] ">{t('common:faq')}</FAQ>

        {t<string, IFaqData[]>('axiesthree:faq_data', {
          returnObjects: true,
        }).map((item, index) => (
          <TextBox
            key={index}
            className="bg-white flex flex-col items-start w-full max-w-[600px] gap-3 text-grey p-10"
          >
            <TitleFontChanger>
              <h4>{item.h4}</h4>
            </TitleFontChanger>

            <span dangerouslySetInnerHTML={{ __html: item.p }}></span>
            {item.btn_txt && (
              <Link href={item.href as string}>
                <BoldableWrapper>
                  <BlueButton className="flex gap-3">
                    {item.btn_txt}
                    <i className="fa-solid fa-shop"></i>
                  </BlueButton>
                </BoldableWrapper>
              </Link>
            )}
          </TextBox>
        ))}
      </div>
    </section>
  )
}
