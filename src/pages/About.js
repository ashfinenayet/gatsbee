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
            <h3>Ashfin Enayet</h3>

            <div className="description">

                <p>that is quite literally my name. Currently a freshman at Virginia Commonwealth University. I also like to take <a href="https://www.instagram.com/ae_fotoz/">  pictures </a> sometimes </p>
            </div>


            <SocialFollow />
            
        </Layout>
    </div>

)

export default About;