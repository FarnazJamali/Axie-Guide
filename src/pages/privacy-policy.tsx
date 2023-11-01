import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from './_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import { TitleFontChanger } from '@/components/core'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['privacy', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

type text_data = {
  text: string
}

type text_data_with_subdata = {
  text: string
  subdata?: [{ text: string }]
}

const Privacy: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <section className={`w-full ${poppins.className}`}>
      <div className="bg_decorative_pattern"></div>

      <div className="sm:w-[600px] lg:w-[900px] xl:w-[1200px] px-4 sm:px-6 mx-auto pt-16">
        <div>
          <TitleFontChanger>
            <h1 className="text-center mb-6">
              {t('privacy:page_title')} <br />
              {t('privacy:page_title2')}{' '}
            </h1>
            <h2 className="text-pink text-[26px] mb-3">
              {t('privacy:second_title')}
            </h2>
          </TitleFontChanger>
          <small className="italic text-[#8e8d8d] text-sm my-2">
            {t('privacy:page_date')}
          </small>
          <div>
            {t<string, text_data[]>('privacy:page_description', {
              returnObjects: true,
            }).map((item, index) => (
              <p key={index} className="my-3 leading-7">
                {item.text}
              </p>
            ))}
            <ul className="leading-7 list-disc pl-6">
              <li> {t('privacy:bullet_one')}</li>
              <li> {t('privacy:bullet_two')}</li>
            </ul>
          </div>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] mb-3">{t('privacy:about')}</h2>
          </TitleFontChanger>
          <ul className="list-disc pl-6">
            {t<string, text_data[]>('privacy:about_data', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-3 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] mb-3">
              {t('privacy:collect_data')}
            </h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:data_bullet1')}</li>
            <li> {t('privacy:data_bullet2')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:information')}
            </h2>
          </TitleFontChanger>
          <ul className="list-disc pl-6">
            {t<string, text_data_with_subdata[]>('privacy:information_data', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-3 leading-7">
                {item.text}
                {item?.subdata && (
                  <ul className="list-disc pl-10">
                    {item?.subdata.map((item, index) => (
                      <li key={index}> {item.text}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:collected_title')}
            </h2>
          </TitleFontChanger>
          <ul className="list-disc pl-6">
            {t<string, text_data[]>('privacy:collected_data', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-3 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:third_parties')}
            </h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:third_parties_description')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:collected')}
            </h2>
          </TitleFontChanger>
          <ul className="list-disc pl-6">
            {t<string, text_data_with_subdata[]>('privacy:collected_data2', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-3 leading-7">
                {item.text}
                {item?.subdata && (
                  <ul className="list-disc pl-10">
                    {item?.subdata.map((item, index) => (
                      <li key={index}> {item.text}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:share_title')}
            </h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:share_txt1')}</li>
            <li> {t('privacy:share_txt2')}</li>
          </ul>
          <p className="mt-6 pl-6"> {t('privacy:share_txt3')}</p>
          <ul className="list-disc pl-12">
            {t<string, text_data[]>('privacy:shared_data', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-1 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:share_txt4')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:grounds')}
            </h2>
          </TitleFontChanger>
          <ul className="list-disc pl-6">
            {t<string, text_data[]>('privacy:grounds_data', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-1 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:services')}
            </h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:services_txt1')}</li>
            <li> {t('privacy:services_txt2')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:data_export')}
            </h2>
          </TitleFontChanger>
          <ul className="list-disc pl-6">
            {t<string, text_data[]>('privacy:data_export_sub', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-1 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:rights')}
            </h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:rights_text1')}</li>
          </ul>
          <ul className="list-disc pl-12">
            {t<string, text_data[]>('privacy:rights_data', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-1 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:rights_text2')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">{t('privacy:keep')}</h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:keep_data1')}</li>
            <li> {t('privacy:keep_data2')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:opt_out')}
            </h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:opt_out_text1')}</li>
            <li> {t('privacy:opt_out_text2')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:queries')}
            </h2>
          </TitleFontChanger>
          <ul className="list-disc pl-6">
            {t<string, text_data[]>('privacy:queries_data', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-1 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
          <ul className="leading-7 list-disc pl-12">
            <li> {t('privacy:queries_text')}</li>
          </ul>
        </div>

        <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:changes')}
            </h2>
          </TitleFontChanger>
          <ul className="leading-7 list-disc pl-6">
            <li> {t('privacy:changes_text')}</li>
          </ul>
              </div>
              
              <div>
          <TitleFontChanger>
            <h2 className="text-pink text-[26px] my-3">
              {t('privacy:title')}
            </h2>
                  </TitleFontChanger>
                  <ul className="list-disc pl-6">
            {t<string, text_data[]>('privacy:annex', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index} className="my-1 leading-7">
                {item.text}
              </li>
            ))}
          </ul>
              </div>
      </div>
    </section>
  )
}

Privacy.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Privacy
