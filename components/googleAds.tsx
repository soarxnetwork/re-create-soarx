import React from 'react';
import Head from 'next/head';
import GoogleAdSense from './AdSense/GoogleAdSense';

const GoogleAdHeader = () => (
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
      <GoogleAdSense pId="5161344263980975"/>

  </Head>
);

export default GoogleAdHeader;
