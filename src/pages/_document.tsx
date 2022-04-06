import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class DefaultDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;1,400&family=Oswald:wght@500;700&family=Zilla+Slab:ital,wght@0,600;1,500;1,600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DefaultDocument;