import Header from './Header'
import Footer from './footer/footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  )
}
