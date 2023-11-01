import React from 'react'
import Select from 'react-select'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from './_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import { status_data } from '../../mock'
import {
  BoldableWrapper,
  GreenBackground,
  IntroBanner,
  IntroductionBox,
  TextBox,
  TitleFontChanger,
} from '@/components/core'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['status', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

import statusEffect from 'public/img/jpeg/status-effects.jpg'
import StatusOptions from '@/components/partials/StatusOptions'

const StatusEffects: NextPageWithLayout = () => {
  const { t } = useTranslation()

  const [option, setOption] = useState(status_data)

  useEffect(() => {
    if (option.length === 0) {
      setOption(status_data)
    }
  }, [option])

  const handleChange = (selectedOption: any) => {
    setOption(selectedOption)
  }

  const filteredBuff = option.filter((item) => item.label.includes('(Buff)'))
  const filteredDebuff = option.filter((item) =>
    item.label.includes('(Debuff)'),
  )
  const filteredNeutral = option.filter((item) =>
    item.label.includes('(Neutral)'),
  )

  return (
    <GreenBackground>
      <section className={`w-full ${poppins.className}`}>
        <IntroBanner
          src={statusEffect}
          height={300}
          alt="statusEffect"
          className="h-72 object-cover mx-4"
          priority
        />

        <div className="sm:w-[600px] lg:w-[900px] xl:w-[1200px] flex flex-col gap-20 pt-20 px-4 sm-px-6 mx-auto">
          <div className="flex flex-col items-center sm:w-[480px] gap-8 mx-auto">
            <TitleFontChanger>
              <h1>{t('status:page_title')}</h1>
            </TitleFontChanger>
            <p className="text-center md:text-xl font-semibold">
              {t('status:page_description')}
            </p>

            <div className="flex flex-col items-center shadow-search rounded-xl outline-none">
              <Select
                defaultValue={'select'}
                isMulti
                name="colors"
                //@ts-ignore
                options={status_data}
                // components={{ Menu: StatusOptions as React.ComponentType<any>}}
                styles={{
                  option: (base) => ({
                    ...base,
                    height: '100%',
                    ':hover': {
                      backgroundColor: '#FF6060',
                      color: 'white',
                      cursor: 'pointer',
                    },
                    ':active': { outline: 'none' },
                    ':focus': { outline: 'none' },
                  }),
                }}
                className="basic-multi-select outline-none"
                classNamePrefix="select"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Buffs */}
          <div className="flex flex-col gap-8 ">
            <TitleFontChanger>
              <h2>{t('status:buffs')}</h2>
            </TitleFontChanger>
            <p className="md:text-xl font-semibold">{t('status:buffs_text')}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {filteredBuff?.map((item) => (
              <BoldableWrapper
                className="col-span-2 sm:col-span-1"
                key={item.label}
              >
                <TextBox className=" bg-white flex items-center h-40 sm:h-60 lg:h-48 xl:h-40 gap-2">
                  <div className="w-1/6">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt={item.label}
                      className="w-4/5"
                    />
                  </div>
                  <div className="w-5/6 flex flex-col gap-2 ">
                    <TitleFontChanger>
                      <h6 className="text-2xl">{item.label}</h6>
                    </TitleFontChanger>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </TextBox>
              </BoldableWrapper>
            ))}
          </div>

          {/* Debuffs */}
          <div className="flex flex-col gap-8 ">
            <TitleFontChanger>
              <h2>{t('status:debuffs')}</h2>
            </TitleFontChanger>
            <p className="md:text-xl font-semibold">
              {t('status:debuffs_text')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {filteredDebuff.map((item) => (
              <BoldableWrapper
                className="col-span-2 sm:col-span-1"
                key={item.label}
              >
                <TextBox className=" bg-white flex items-center h-40 sm:h-60 lg:h-48 xl:h-40 gap-2">
                  <div className="w-1/6">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt={item.label}
                      className="w-4/5"
                    />
                  </div>
                  <div className="w-5/6 flex flex-col gap-2 ">
                    <TitleFontChanger>
                      <h6 className="text-2xl">{item.label}</h6>
                    </TitleFontChanger>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </TextBox>
              </BoldableWrapper>
            ))}
          </div>

          {/* Neutrals */}
          <div className="flex flex-col gap-8 ">
            <TitleFontChanger>
              <h2>{t('status:neutral')}</h2>
            </TitleFontChanger>
            <p className="md:text-xl font-semibold">
              {t('status:neutral_text')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {filteredNeutral.map((item) => (
              <BoldableWrapper
                className="col-span-2 sm:col-span-1"
                key={item.label}
              >
                <TextBox className=" bg-white flex items-center h-40 sm:h-60 lg:h-48 xl:h-40 gap-2">
                  <div className="w-1/6">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt={item.label}
                      className="w-4/5"
                    />
                  </div>
                  <div className="w-5/6 flex flex-col gap-2 ">
                    <TitleFontChanger>
                      <h6 className="text-2xl">{item.label}</h6>
                    </TitleFontChanger>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </TextBox>
              </BoldableWrapper>
            ))}
          </div>
        </div>
      </section>
    </GreenBackground>
  )
}

StatusEffects.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default StatusEffects
