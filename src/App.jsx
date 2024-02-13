import "./App.css";
import Navbar from "./components/Navbar";
import Maincontainer from "./components/Maincontainer";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
      <div id="container">
        <Navbar />
        <Maincontainer />
        <Footer />
      </div>
    </>
  );
}