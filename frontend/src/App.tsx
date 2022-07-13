import './assets/style/App.scss';
import { RouteController } from "./routes";
import Footer from "./components/Common/Footer/Footer";
import { Header } from "./components/Common/Header/Header";

function App() {
  return (
    <>
      <Header />
      <RouteController />
      <Footer />
    </>
  );
}

export default App;
