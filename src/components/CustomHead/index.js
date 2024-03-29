/* eslint-disable linebreak-style */
import React from 'react';
import Head from 'next/head';
import db from '../../../db.json';

export default function CustomHead() {
  return (
    <Head>
      <title>Quiz do Dante</title>
      <meta property="og:image" content={db.bg} key="image" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
