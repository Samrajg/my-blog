import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LayoutWrapper from "../components/LayoutWrapper";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
