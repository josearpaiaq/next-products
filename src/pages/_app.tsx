import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <NavBar />
    <div className={styles.container}>
      
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
