import React from 'react';

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
      <div className="image">
        <img src="src/images/MOSHED-2020-6-25-14-37-39.gif" width="700" height="350" alt="gif swagger" className="image" />
      </div>

    </Layout>
  </main>


)

export default Index;





