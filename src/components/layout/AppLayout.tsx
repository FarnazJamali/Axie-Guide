import dynamic from 'next/dynamic'

import Footer from '../partials/Footer'

const DynamicHeader = dynamic(() => import('../partials/Header'), {
  ssr: false,
})
const AppLayout = ({ children }: any) => {
  return (
    <>
      <DynamicHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default AppLayout
