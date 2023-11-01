import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { ICard } from '@/components/interface'
import {
  BoldableWrapper,
  Card,
  LinkComponent,
  TextBox,
  TitleFontChanger,
} from '@/components/core'


import plantAxies from 'public/img/png/plant-axie-right.png'


type body_parts_data = {
  src: string
  title: string
}
export const BodyParts = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <TitleFontChanger>
          <h2>{t('axiesone:body_parts_title')}</h2>
        </TitleFontChanger>
        <p className="text-grey text-lg">
          {t('axiesone:body_parts_text_1')}
          <LinkComponent href="/cards">
            {t('axiesone:cards_link')}
          </LinkComponent>
          <span>{t('axiesone:body_parts_text_2')}</span>
        </p>
        <div className="grid grid-cols-3 lg:justify-start gap-6">
          {t<string, body_parts_data[]>('axiesone:body_parts_data', {
            returnObjects: true,
          }).map((item, index) => (
            <BoldableWrapper key={index} className="flex flex-col">
              <div>
                <Image src={item.src} width={40} height={40} alt={item.title} />
              </div>
              <p className="text-grey font-extrabold">{item.title}</p>
            </BoldableWrapper>
          ))}
        </div>
        <p className='text-lg'>{t('axiesone:body_parts_text_3')}</p>
        <TextBox className="bg-white flex items-center gap-4 w-fit">
          <div>
            <Image
              src={plantAxies}
              width={100}
              height={100}
              alt="plantAxiesright"
            />
          </div>
          <p className='font-bold text-sm'>{t('axiesone:text_text_box')}</p>
        </TextBox>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center gap-4">
        <p className='self-start'>{t('axiesone:cards_intro')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-3">
          {t<string, ICard[]>('axiesone:cards_data', {
            returnObjects: true,
          }).map((item, index) => (
            <Card
              key={index}
              card_bg={item.card_bg}
              card_bg_2={item.card_bg_2}
              card_image={item.card_image}
              bottom_icon={item.bottom_icon}
              card_energy={item.card_energy}
              card_name={item.card_name}
              card_text={item.card_text}
              icon={item.icon}
              skill={item.skill}
              heal_icon={item.card_heal ? item.heal_icon : ''}
              card_heal={item.card_heal}
              damage_icon={item.card_damage ? item.damage_icon : ''}
              card_damage={item.card_damage}
              className='scale-110 hover:scale-125 hover:z-50 hover:duration-200'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
