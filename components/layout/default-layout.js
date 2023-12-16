import Header from './Header'
import Footer from './footer/footer'
import style from './default-layout.module.scss'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className={`${style.main} bg-primary`}>{children}</main>
      <Footer />
    </>
  )
}
