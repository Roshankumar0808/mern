import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    // <Navbar title="TextUtils3" about="About TextUtils"/>
    //<Navbar/>
    <>
    <Navbar title="TextUtils" about="About"/>
    <div className="container my-3">
      <Textform heading="Enter Your Text To Analyse"/>
    </div>
    </>
    );
}
export default App;