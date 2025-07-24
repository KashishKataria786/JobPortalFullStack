import Footer from "./Footer.jsx"
import Header from "./Header.jsx"

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main className="min-h-screen">
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout
