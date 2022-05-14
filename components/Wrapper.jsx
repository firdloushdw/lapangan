import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Wrapper({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
