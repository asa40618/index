import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <DefaultLayout>{getLayout(<Component {...pageProps} />)}</DefaultLayout>
    </>
  )
}
