import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landingpage.css';

import "fontsource-muli"
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';



const Index = () => (




  <section className="content">
    
    <Helmet>
      <title>Ashfin Enayet</title>
    </Helmet>
    <Layout>
    <div className="hero-image">
      <div className="hero-text">
        {/* <h1>I am John Doe</h1>
        <h3>And I'm a Photographer</h3> */}
      </div>
    </div>
</Layout>

  </section>


)

export default Index;





