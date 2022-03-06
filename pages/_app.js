import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from './index'

function MyApp({ Component, pageProps }) {
  return( 
    <div className="h-screen dark:bg-stone-900">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default MyApp
