import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <script id="sakura-script" src="/script/sakura.js" defer />
        <title>Wedding of Vina {'&'} Adhar 💜</title>
        <Script
          id="sakura-start"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.sakura = new Sakura('.sakura-wrapper');
        `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="Wedding of Vina & Adhar 💜" />
        <meta name="description" content="We are getting married 💜" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wedding of Vina & Adhar 💜" />
        <meta property="og:description" content="We are getting married 💜" />
        <meta property="og:image" content="https://i.ibb.co/SwpYncY/3.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Wedding of Vina & Adhar 💜" />
        <meta property="twitter:description" content="We are getting married 💜" />
        <meta property="twitter:image" content="https://i.ibb.co/SwpYncY/3.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-portal" className="overflow-hidden" />
        <div id="modal-portal-1" className="overflow-hidden" />
      </body>
    </Html>
  );
}
