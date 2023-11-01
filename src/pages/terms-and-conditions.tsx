import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from './_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import { TitleFontChanger } from '@/components/core'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['terms', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

type definition_data = {
  title: string
  text: string
}
type acknowledgement_data = {
  text: string
}
const Terms: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <section className={`w-full ${poppins.className}`}>
      <div className="bg_decorative_pattern"></div>

      <div className="sm:w-[600px] lg:w-[900px] xl:w-[1200px] px-4 sm:px-6 mx-auto pt-16">
        <div>
          <TitleFontChanger>
            <h1 className="text-center mb-6">{t('terms:page_title')}</h1>
          </TitleFontChanger>
          <small className="italic text-[#8e8d8d] text-sm my-2">
            {t('terms:page_date')}
          </small>
          <p className="my-3">{t('terms:page_description')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] mb-3">
              {t('terms:second_title')}
            </h2>
          </TitleFontChanger>
          <TitleFontChanger>
            <h3 className="text-sm font-bold mb-3">
              {t('terms:interpretation')}
            </h3>
          </TitleFontChanger>
          <p className="mb-6 leading-7">{t('terms:interpretation_txt')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h3 className="text-sm font-bold mb-3">{t('terms:definitions')}</h3>
          </TitleFontChanger>
          <p>{t('terms:definitions_txt')}</p>
          <ul className='list-disc pl-6'>
            {t<string, definition_data[]>('terms:definition_data', {
              returnObjects: true,
            }).map((item) => (
              <li className="my-2 leading-7" key={item.title}>
                <span className="font-bold text-base">
                  {item.title}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:acknowledgement')}
            </h2>
          </TitleFontChanger>
          <div>
            {t<string, acknowledgement_data[]>('terms:acknowledgement_data', {
              returnObjects: true,
            }).map((item, index) => (
              <p key={index} className="leading-7 my-3">
                {item.text}
              </p>
            ))}
          </div>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">{t('terms:links')}</h2>
          </TitleFontChanger>
          <div>
            {t<string, acknowledgement_data[]>('terms:links_data', {
              returnObjects: true,
            }).map((item, index) => (
              <p key={index} className="leading-7 my-3">
                {item.text}
              </p>
            ))}
          </div>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:termination')}
            </h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:termination_txt1')}</p>
          <p className="leading-7 my-3">{t('terms:termination_txt2')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:limitation')}
            </h2>
          </TitleFontChanger>
          <div>
            {t<string, acknowledgement_data[]>('terms:limitation_data', {
              returnObjects: true,
            }).map((item, index) => (
              <p key={index} className="leading-7 my-3">
                {item.text}
              </p>
            ))}
          </div>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:disclaimer')}
            </h2>
          </TitleFontChanger>
          <div>
            {t<string, acknowledgement_data[]>('terms:disclaimer_data', {
              returnObjects: true,
            }).map((item, index) => (
              <p key={index} className="leading-7 my-3">
                {item.text}
              </p>
            ))}
          </div>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:governing')}
            </h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:governing_text')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">{t('terms:dispute')}</h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:dispute_txt')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:european')}
            </h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:european_text')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:united_states')}
            </h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:united_states_text')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">{t('terms:sever')}</h2>
            <h3 className="text-sm font-bold mb-3">
              {t('terms:severe_second')}
            </h3>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:severe_second_text')}</p>
          <TitleFontChanger>
            <h3 className="text-sm font-bold mb-3">{t('terms:waiver')}</h3>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:waiver_txt')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('terms:translation')}
            </h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:translation_txt')}</p>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">{t('terms:change')}</h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:change_txt1')}</p>
          <p className="leading-7 my-3">{t('terms:change_txt2')}</p>
              </div>
              
               <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">{t('terms:contact')}</h2>
          </TitleFontChanger>
          <p className="leading-7 my-3">{t('terms:contact_txt')}</p>
          <p className="leading-7 my-3 pl-3">&#x2022; {t('terms:email')}</p>
              </div>
      </div>
    </section>
  )
}

Terms.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Terms
