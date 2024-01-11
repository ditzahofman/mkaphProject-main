import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
          <Home></Home>
    </BrowserRouter>
  );
}
export default App;
