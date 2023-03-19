import "../styles/scss/style.scss";
import Layout from "../layout/Layout";

import { useState} from 'react';
import { NameContext } from '../components/context/nameContext'

function MyApp({ Component, pageProps }) {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider value={[name, setName]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NameContext.Provider>
  );
}

export default MyApp;
