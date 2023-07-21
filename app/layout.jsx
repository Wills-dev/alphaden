import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@components/NavBar";
import "@styles/globals.css";

export const metadata = {
  title: "Alphaden group",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="app">{children} </main>
      </body>
    </html>
  );
};

export default RootLayout;
