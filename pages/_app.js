import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <DefaultLayout>{getLayout(<Component {...pageProps} />)}</DefaultLayout>
    </>
  )
}
