import Nav from "./Nav";
import Footer from "./Footer";
import Snowfall from "react-snowfall";

export default function Layout({ children }) {
  return (
    <div className="px-8 lg:mx-32">
      <Snowfall
        snowflakeCount={50}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
