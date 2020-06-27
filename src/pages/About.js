import React from 'react';
import '../styles/page.css';
import { Button } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
var links = new Array();

links[0] = 'https://support.eji.org/give/153413/#!/donation/checkout';
links[1] = 'https://secure.actblue.com/donate/ms_blm_homepage_2019';
links[2] = 'https://www.youtube.com/playlist?list=PLtooIklzheqzORPbQBiEZKsw2T4s6SUxv&app=desktop';
links[3] = 'https://mutualaid.carrd.co/';
links[4] = 'https://rvabailfund.org/';
function openLink() {
    var i = Math.floor(Math.random() * links.length);
    window.location = links[i];
    return false;
}
const About = () => (
    <main>
        <Helmet>
            <title>About Me</title>
        </Helmet>
        <Layout>
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <h1>About Me</h1>
            <h2>Ashfin Enayet</h2>


            <p>that is quite literally my name. Currently an incoming freshman at Virginia Commonwealth University. Click the button below to find out ways to support BLM</p>
            <Button color="danger" onClick={openLink}>Get Involved</Button>

        </div>
        </Layout>
    </main>
)

export default About;