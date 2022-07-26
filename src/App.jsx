import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home.jsx'
import Join from './components/Join/Join';
import Plan from './components/Plans/Plan';
import Program from './components/Program/Program';
import Reason from './components/Reasons/Reason';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Home />
      <Program />
      <Reason />
      <Plan />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
