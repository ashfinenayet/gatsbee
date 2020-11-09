import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/page.css';
import Layout from '../components/Layout.js';


import { Helmet } from 'react-helmet';



const Images = () => (




  <section className="content">
    <Helmet>
      <title>Images</title>
    </Helmet>
    <Layout>
    <h1>Locations</h1>
    <h2><a href="#">Richmond</a></h2>
    <h2><a href="#">Henrico</a></h2>
     

    </Layout>
  </section>


)

export default Images;
