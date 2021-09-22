
import './App.css';
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Details from './components/Details'
import Extra from './components/Extra'
import ExtraSecond from './components/ExtraSecond'
import ExtraThrid from './components/ExtraThrid'
import Working from './components/Working'
import Contact from './components/Contact'
import Review from './components/Review'
import Testomonial from './components/Testomonial'
import Brands from './components/Brands'
import Tutorial from './components/Tutorial'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
    <Navbar />
    <Heading />
    <Details />
    <Extra />
    <ExtraSecond />
    <ExtraThrid />
    <Working />
    <Contact />
    <Review />
    <Testomonial/>
    <Brands />
    <Tutorial/>
    <About />
    <Footer/>
    </div>
  );
}

export default App;
