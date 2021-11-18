import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <main className='container'>
      <Layout>
  <Component {...pageProps} />
  </Layout>
      </main>
    </>
  )
}

export default MyApp
