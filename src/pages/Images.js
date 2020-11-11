import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/page.css';



import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Helmet } from 'react-helmet';



const Images = () => (




  <section className="content">
    <Helmet>
      <title>Images</title>
    </Helmet>
    
    <h1>Locations</h1>
    <div class = "anilink-container">
    <AniLink paintDrip to="/richmond" hex="#C3073F" >
  Richmond
</AniLink>
</div>
    <AniLink paintDrip to="/henrico" hex="#C3073F" >
  Henrico
</AniLink>

    
  </section>


)

export default Images;
