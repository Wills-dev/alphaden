import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@components/NavBar";
import "@styles/globals.css";
import Footer from "@components/Footer";

export const metadata = {
  title: "Alphaden Holding",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="app">{children} </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
