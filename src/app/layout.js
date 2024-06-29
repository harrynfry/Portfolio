import "./globals.css";
import bg from '../../public/shapelined-_JBKdviweXI-unsplash.jpg';

export const metadata = {
  title: "Harry Fry's Portfolio",
  description: "Portfolio site for Harry Fry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      
      <body style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%'
      }}
      >{children}</body>
    </html>
  );
}
