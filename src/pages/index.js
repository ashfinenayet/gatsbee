import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import Layout from '../components/Layout.js';


import { Helmet } from 'react-helmet';



const Index = () => (




  <main>
    <Helmet>
      <title>Ashfin Enayet</title>
    </Helmet>
    <Layout>
      <div id="shadowBox">
        <h1 className="rainbow rainbow_text_animated">Ashfin Enayet</h1>
      </div>
      <div className="gif">
        <img src="https://i.imgur.com/8BD1W2a.gif" width="500" height="500" alt="AE logo" className="gif" />
      </div>

    </Layout>
  </main>


)

export default Index;





