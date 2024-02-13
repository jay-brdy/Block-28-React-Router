import "./App.css";
import Navbar from "./components/Navbar";
import Maincontainer from "./components/Maincontainer";

export default function App() {

  return (
    <>
      <div id="container">
        <Navbar />
        <Maincontainer />
      </div>
    </>
  );
}