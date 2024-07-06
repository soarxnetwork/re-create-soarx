import Script from 'next/script';
import React from 'react'

type AdsenseTypes = {
    pId: string;
}

const GoogleAdSense = ({ pId }: AdsenseTypes) => {
  return (
    <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
        crossOrigin='anonymous'
        strategy='afterInteractive'
    />
  )
}

export default GoogleAdSense