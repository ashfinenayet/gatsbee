import React from 'react';
import '../styles/page.css';


import { Helmet } from 'react-helmet';

import SocialFollow from '../components/SocialFollow';

const About = () => (

    <div className="content">


        <Helmet>
            <title>About Me</title>
        </Helmet>
        

            <h1>About Me</h1>
            <h2>Ashfin Enayet</h2>


            <p>that is quite literally my name. Currently a freshman at Virginia Commonwealth University. </p>



            <SocialFollow />
       
    </div>

)

export default About;