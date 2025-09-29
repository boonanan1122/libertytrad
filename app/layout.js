import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <div className="floating-bg">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
