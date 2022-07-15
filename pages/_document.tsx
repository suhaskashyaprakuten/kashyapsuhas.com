import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {/* TODO: Clean this? */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                let theme = "dark";
                 if ((localStorage.theme === 'light') || (!localStorage.theme === null && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  theme = "light"
                }
                document.documentElement.classList.add(theme);
                localStorage.theme = theme;`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;