import React from "react";
import RouteProvider from "./RouteProvider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />

      <RouteProvider />

      <Footer />
    </div>
  );
}

export default App;
