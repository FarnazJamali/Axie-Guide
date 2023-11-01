import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { Tooltip } from 'react-tooltip'

import { TitleFontChanger } from './TitleFontChanger'
import { ComponentProps } from 'react'

import frameEnergy from 'public/img/png/frame-energy.png'
import energyIcon from 'public/img/png/energy-icon.png'
import framePlate from 'public/img/png/frame-owner-plate.png'
import { ICard } from '../interface'

type divProps = ComponentProps<'div'>

export const Card = ({
  className,
  children,
  card_bg,
  card_image,
  card_bg_2,
  card_energy,
  icon,
  card_name,
  skill,
  card_text,
  bottom_icon,
  card_heal,
  heal_icon,
  card_damage,
  damage_icon,
}: ICard & divProps) => {
  const { t } = useTranslation()

  return (
    <div className={`pt-4  ${className}`}>
      <div className="w-28 h-44  relative cards_blur_shadow ">
        <div className="absolute w-[94%] h-[93.2%] top-[2%] left-[3px] rounded-3xl right-0 z-10">
          <Image
            src={card_bg}
            fill
            alt="blue-background"
            className="w-[92%] mx-auto"
          />
        </div>
        <div className="absolute top-[2%] left-0 right-0 z-10">
          <Image
            src={card_image}
            width={100}
            height={100}
            alt="aquatic"
            className="w-[92%] mx-auto "
          />
        </div>
        <div className="absolute top-[30%] left-0 right-0 z-20 overflow-hidden">
          <Image
            src={card_bg_2}
            width={100}
            height={100}
            alt="aquatic"
            className="w-[136%] relative left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="cards_bg_card-frame"></div>
        {/* Upper Badge */}
        <div className="absolute top-[-10%] left-[-10%] z-30 w-2/5">
          <div>
            <div>
              <Image
                src={frameEnergy}
                width={100}
                height={100}
                alt="energy frame"
              />
            </div>
          </div>
          <div>
            {card_heal && (
              <div className="absolute z-30 w-full top-3 left-[78%] ">
                <Image
                  src={heal_icon ? heal_icon : ''}
                  width={100}
                  height={100}
                  alt="damage"
                />
                <TitleFontChanger>
                  <span className="text-white text-xs absolute -top-[7%] left-[20%] z-50">
                    {card_heal}
                  </span>
                </TitleFontChanger>
              </div>
            )}
            {card_damage && (
              <div className="absolute z-30 w-full top-3 left-[78%] ">
                <Image
                  src={damage_icon ? damage_icon : ''}
                  width={100}
                  height={100}
                  alt="damage"
                />
                <TitleFontChanger>
                  <span className="text-white text-xs absolute -top-[7%] left-[20%] z-50">
                    {card_damage}
                  </span>
                </TitleFontChanger>
              </div>
            )}
          </div>
          <div>
            <Image
              src={energyIcon}
              width={90}
              height={90}
              alt="energy-icon"
              className="absolute w-[70%] top-[6%] left-[8%]"
            />
          </div>
          <TitleFontChanger>
            <span className="absolute left-3 top-1 text-xl text-center text-white">
              {card_energy}
            </span>
          </TitleFontChanger>
        </div>
        {/* Middle Badge */}
        <div className="absolute top-1/2 -left-[0.55%] w-[35%] h-[30%] z-30">
          <div>
            <Image src={framePlate} fill alt="frame-plate" />
          </div>
          <div>
            <Image
              src={icon}
              width={20}
              height={20}
              alt="frame-plate"
              className="absolute z-40 left-[20%] top-[21%] w-[48%]"
            />
          </div>

          <span className="absolute font-medium text-[9.5px] sm:text-[10px] xl:text-[8px] w-20 text-white  left-full py-1">
            {card_name}
          </span>
        </div>
        <div className="flex justify-center items-center absolute z-30 bottom-[40%] translate-y-4 w-8 left-1/3">
          <Image
            src={skill}
            width={100}
            height={100}
            alt="skill"
            className="h-3"
          />
        </div>
        <span
          className="absolute w-full top-[72%] left-[10%] z-30 max-w-[80%] text-[5px] font-normal text-[#dbdbdb] text-center"
          dangerouslySetInnerHTML={{ __html: card_text }}
        />
        {/* {card_text.includes('strong') ? (
          <>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello!">

            </a>
            <Tooltip id="my-tooltip" />
          </>
        ) : (
          ''
        )} */}

        <div className="absolute z-40 bottom-[4%] h-[5%] left-[40%] translate-x-1/2 mx-auto">
          <Image
            src={bottom_icon}
            width={100}
            height={100}
            alt="fish"
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  )
}
