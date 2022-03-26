import './App.css';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fqa from './components/FQA/Fqa';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Shop />
      <Fqa />
    </div>
  );
}

export default App;
