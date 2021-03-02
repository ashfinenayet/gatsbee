import React from 'react';
import '../styles/page.css';
import Layout from '../components/Layout';

import { Helmet } from 'react-helmet';

import SocialFollow from '../components/SocialFollow';

const About = () => (

    <div className="content">


        <Helmet>
            <title>About Me</title>
        </Helmet>
        <Layout>

            <h1>About Me</h1>
            <h2>Ashfin Enayet</h2>


            <p>that is quite literally my name. Currently a freshman at Virginia Commonwealth University. </p>



            <SocialFollow />
       </Layout>
    </div>

)

export default About;