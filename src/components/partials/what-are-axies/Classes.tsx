import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import {
  BlackBadge,
  BoldableWrapper,
  TitleFontChanger,
} from '@/components/core'

import plantAxies from 'public/img/png/plant-axie1.png'

type classes_data = {
  src: string
  title: string
}

export const Classes = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col lg:flex-row gap-4 ">
      <div className="flex flex-col gap-5 lg:w-4/5">
        <TitleFontChanger>
          <h2>{t('axiesone:classes_title')}</h2>
        </TitleFontChanger>
        <p className='text-lg'>{t('axiesone:classes_description')}</p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
          {t<string, classes_data[]>('axiesone:classes_data', {
            returnObjects: true,
          }).map((item, index) => (
            <BoldableWrapper key={index} className="flex flex-col items-center gap-3">
              <div>
                <Image src={item.src} width={50} height={50} alt={item.title} />
              </div>
              <p className="text-grey font-extrabold">{item.title}</p>
            </BoldableWrapper>
          ))}
        </div>
      </div>
      <div className="lg:w-1/5 flex flex-col items-center gap-4">
        <p className="text-grey text-sm self-start">
          {t('axiesone:classes_description_2')}
        </p>
        <div>
          <Image src={plantAxies} height={300} width={200} alt="plantAxies" />
        </div>
        <BlackBadge>{t('axiesone:axie_badge')}</BlackBadge>
      </div>
    </div>
  )
}
