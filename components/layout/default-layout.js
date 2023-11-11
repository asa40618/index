import Navbar from './Header'
import Footer from './footer/footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
