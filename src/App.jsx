import "./App.css";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import CategoryDiv from "./components/CategoryDiv";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <Header />
      </div>
      <Banner />
      <div className="w-11/12 mx-auto">
        <CategoryDiv />
        <Slider />
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
