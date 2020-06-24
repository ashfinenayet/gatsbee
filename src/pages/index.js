import React from 'react';

import '../styles/index.css';
import Layout from '../components/Layout.js';


import { Helmet } from 'react-helmet';



const Index = () => (




  <main>
    <Helmet>
      <title>Ashfin's Website</title>
    </Helmet>
    <Layout>
      <div id="shadowBox">
        <h1 className="rainbow rainbow_text_animated">swag</h1>
      </div>
      <div className="image">
        <img src="https://i.imgur.com/sjvtlq0.png" width="700" height="350" alt="swag" className="image" />
      </div>

    </Layout>
  </main>


)

export default Index;




