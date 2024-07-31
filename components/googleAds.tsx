import React from 'react';
import Head from 'next/head';

const GoogleAdSense = () => (
  <Head>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5161344263980975"
      crossOrigin="anonymous"
    ></script>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-KXRVL4HNDK"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KXRVL4HNDK');
        `,
      }}
    />
  </Head>
);

export default GoogleAdSense;
