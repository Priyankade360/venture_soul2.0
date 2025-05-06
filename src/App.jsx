import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="mainBody">
        <HelmetProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      </div>
    </>
  );
}

export default App;
