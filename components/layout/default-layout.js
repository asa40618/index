import Header from './Header'
import Footer from './footer/footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-primary">{children}</main>
      <Footer />
    </>
  )
}
