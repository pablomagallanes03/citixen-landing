import Navbar from '../Navbar'
import Footer from '../Footer'
import useReveal from './useReveal'
import { useContent } from '../../lib/i18n.mjs'
import { site } from '../../content/site.mjs'

export default function Layout({ children }) {
  const t = useContent(site)
  useReveal()
  return (
    <>
      <a href="#contenido" className="skip-link">{t.skipToContent}</a>
      <Navbar />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  )
}
