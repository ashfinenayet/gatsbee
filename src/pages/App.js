import React, { useEffect, useState, Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import Layout from '../components/Layout.js';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    

    
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
        <h2>The date according to Node.js (TypeScript) is:</h2>
        <p>{date ? date : 'Loading date...'}</p>
      </Layout>
    </main>

  );
}





export default Index;
