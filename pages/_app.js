import '../styles/globals.css'
import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx>
        {
          `
          
          `
        }
          
        
      </style>
    </>
  )
}

export default MyApp
