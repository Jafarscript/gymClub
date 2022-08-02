import './App.css';
import Home from './components/Home/Home.jsx'
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
    </div>
  );
}

export default App;
