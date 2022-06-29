import React from 'react';
import './assets/style/App.scss';
import { RouteController } from "./routes";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <>
      <RouteController />
      <Footer />
    </>
  );
}

export default App;
