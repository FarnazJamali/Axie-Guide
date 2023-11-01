import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { BoldableWrapper, IntroBanner, LinkComponent } from '@/components/core'

import sky from 'public/img/jpeg/sky.jpg'
import infinitePossibilities from 'public/img/png/infinite-possibilities.png'
import battle from 'public/img/png/battle.png'
import theorycraft from 'public/img/png/theorycraft.png'
import infiniteExperiences from 'public/img/png/infinite-experiences.png'

interface IBattleTypeData {
  href: string
  src1: string
  src2: string
  description: string
}

export const InfinitPossibilities = () => {
  const { t } = useTranslation()
  return (
    <section id="infinite">
      <div className="flex flex-col items-center mx-4">
        <IntroBanner src={sky} height={300} alt="map" className="w-full" />
        <Image
          src={infinitePossibilities}
          width={200}
          height={200}
          alt="axies"
          className="-translate-y-1/2 w-full max-w-[380px] "
        />
      </div>

      <div className="flex flex-col items-center gap-12 mx-4">
        <p className="text-xl text-center">
          {t('newplayers:infinity_description')}
        </p>
        <div className="flex flex-col items-center gap-8">
          <div>
            <Image
              src={battle}
              width={160}
              height={60}
              alt="battle"
              className="h-16 flex-shrink-0"
            />
          </div>
          <div className="flex flex-wrap justify-center w-full lg:max-w-[760px] gap-4">
            {t<string, IBattleTypeData[]>('newplayers:battletype_data', {
              returnObjects: true,
            }).map((item, index) => (
              <LinkComponent
                className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33%-10px)] gap-1"
                href={item.href}
                key={index}
              >
                <div className="w-full flex flex-col items-center gap-3">
                  <div className="flex flex-col items-center gap-3">
                    <BoldableWrapper>
                      <Image
                        src={item.src1}
                        width={200}
                        height={140}
                        alt="top-img"
                        className="w-[600px] sm:w-72 lg:w-60 lg:h-[120px] object-cover rounded-2xl"
                      />
                    </BoldableWrapper>
                    <Image
                      src={item.src2}
                      width={150}
                      height={50}
                      alt="text-img"
                      className="h-[50px]"
                    />
                  </div>
                  <p className="text-center text-grey">{item.description}</p>
                </div>
              </LinkComponent>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div>
            <Image
              src={theorycraft}
              width={240}
              height={50}
              alt="theorycraft"
              className="h-16 flex-shrink-0"
            />
          </div>

          <div className="flex flex-wrap justify-center w-full lg:max-w-[760px] gap-8">
            {t<string, IBattleTypeData[]>('newplayers:theory_craft_data', {
              returnObjects: true,
            }).map((item, index) => (
              <div
                className="w-full sm:w-[calc(50%-16px)] lg:h-[350px] gap-1"
                key={index}
              >
                <LinkComponent href={item.href}>
                  <div className="w-full flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center gap-3">
                      <BoldableWrapper>
                        <Image
                          src={item.src1}
                          width={200}
                          height={140}
                          alt="top-img"
                          className="w-[600px] sm:w-72 lg:w-96 lg:h-[250px] object-cover rounded-2xl"
                        />
                      </BoldableWrapper>
                      <Image
                        src={item.src2}
                        width={150}
                        height={30}
                        alt="text-img"
                        className="h-[30px]"
                      />
                    </div>
                    <p className="text-center text-grey">{item.description}</p>
                  </div>
                </LinkComponent>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <div>
              <Image
                src={infiniteExperiences}
                width={350}
                height={60}
                alt="infiniteExperiences"
                className="h-16 flex-shrink-0 sm:w-[420px]"
              />
            </div>
            <div className="flex flex-col w-full lg:max-w-[760px] gap-8">
              {t<string, IBattleTypeData[]>('newplayers:infiniteExperience', {
                returnObjects: true,
              }).map((item, index) => (
                <div className="w-full flex flex-col gap-4" key={index}>
                  <LinkComponent href={item.href}>
                    <div className="w-full flex flex-col sm:flex-row gap-5">
                      <BoldableWrapper className="sm:w-1/3">
                        <Image
                          src={item.src1}
                          width={200}
                          height={140}
                          alt="top-img"
                          className="w-[500px] sm:w-60 lg:w-96 md:h-40 object-cover rounded-2xl"
                        />
                      </BoldableWrapper>
                      <div className="sm:w-2/3 flex flex-col gap-4">
                        <div>
                          <Image
                            src={item.src2}
                            width={150}
                            height={30}
                            alt="text-img"
                            className="h-[30px] "
                          />
                        </div>
                        <p className='text-grey'>{item.description}</p>
                      </div>
                    </div>
                  </LinkComponent>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
