import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/about";
import Menu from "./components/Menu/Menu";
import Review from "./components/Reviews/Review";
import Bookings from "./components/Booking/Bookings";
import Footer from "./components/Footer/Footer";

function App() {
 return (
  <div>
   <Header />
   <Home />
   <About />
   <Menu />
   <Review />
   <Bookings />
   <Footer />
  </div>
 );
}

export default App;
