import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import workshop from 'public/img/jpeg/workshop.jpg'
import { BoldableWrapper, TitleFontChanger, YellowButton } from '../core'
import Link from 'next/link'

export const JoinCommunity = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full px-4 ">
      <div className="relative w-full">
        <div>
          <Image
            src={workshop}
            width={800}
            height={500}
            alt="workshop"
            className="object-cover object-center rounded-3xl w-full h-[500px]"
          />
        </div>
        <div className="p-8 w-full absolute left-0 right-0 top-0">
          <div className="flex flex-col items-center gap-6 bg-white rounded-2xl mx-auto py-4 px-8 max-w-[400px] w-4/5">
            <div className="flex flex-col items-center gap-2">
              <TitleFontChanger className="md:max-w-[336px]">
                <h2 className="text-center text-4xl md:text-5xl ">
                  {t('common:join_title')}
                </h2>
              </TitleFontChanger>
              <p className="text-center">{t('common:join_text')}</p>
            </div>
            <div className="flex flex-col justify-between items-center sm:flex-row gap-4">
              <BoldableWrapper>
                <Link href={'https://welcome.skymavis.com/regional-servers/'}>
                  <YellowButton className="flex gap-2">
                    {t('common:discord')}
                    <i className="fa-brands fa-discord text-[12px]"></i>
                  </YellowButton>
                </Link>
              </BoldableWrapper>

              <BoldableWrapper>
                <Link href={'https://twitter.com/axieinfinity'}>
                  <YellowButton className="flex gap-2">
                    {t('common:twitter')}
                    <i className="fa-brands fa-twitter text-[12px]"></i>
                  </YellowButton>
                </Link>
              </BoldableWrapper>

              <BoldableWrapper>
                <Link href={'https://www.twitch.tv/axieinfinity'}>
                  <YellowButton className="flex gap-2">
                    {t('common:twitch')}
                    <i className="fa-brands fa-twitch text-[12px]"></i>
                  </YellowButton>
                </Link>
              </BoldableWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
