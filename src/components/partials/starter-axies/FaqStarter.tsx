import { TextBox, TitleFontChanger } from '@/components/core'
import FAQ from '@/components/core/Faq'
import { useTranslation } from 'next-i18next'

interface IFaqData {
  h4: string
  p: string
}
export const FaqStarter = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full">
      <div className="bg_decorative_pattern"></div>
      <div className="flex flex-col items-center gap-8 px-4 sm:px-6 -mt-7">
        <FAQ className="w-[600px] ">{t('common:faq')}</FAQ>
        {t<string, IFaqData[]>('axiestwo:faq_data', {
          returnObjects: true,
        }).map((item, index) => (
          <TextBox key={index} className='bg-white flex flex-col w-full max-w-[600px] gap-3 text-grey'>
            <TitleFontChanger>
              <h4 className='text-[28px]'>{item.h4}</h4>
            </TitleFontChanger>

            <span className='text-[19px]' dangerouslySetInnerHTML={{ __html: item.p }}></span>
          </TextBox>
        ))}
      </div>
    </section>
  )
}
