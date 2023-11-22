import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // require("bootstrap/dist/js/bootstrap.bundle")
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
