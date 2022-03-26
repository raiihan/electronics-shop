import './App.css';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fqa from './components/FQA/Fqa';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Silvaan Internation Electronics</h1>
        <h5>Our Product Your Passion</h5>
      </div>
      <Shop />
      <Fqa />
    </div>
  );
}

export default App;
